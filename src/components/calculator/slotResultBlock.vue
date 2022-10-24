<template>
  <div class="calc_block_result">
    <div class="calc_block">
      <div class="calc_leftBlock">
        <div class="calc_row">
          <div class="calc__left">
            <p class="calc_block_title">
              {{ title }}
            </p>
            <div class="calc_block_inline">
              <slot name="total"></slot>
            </div>
          </div>
          <div class="calc__right">
            <p class="calc_block_title">
              Поссчитать стоимость бетона для вашей конструкции
            </p>
            <div class="calc_block_inline">
              <div class="calc_block_inputResult">
                <div class="calc_block_inputResult__title">Выбрать Вид бетона</div>  
                <select v-model="typeBeton" @change="typeBeton2" class="calc__select">
                  <option
                    v-for="option in typeBetonOptions"
                    :value="option"
                    :key="option"
                  >
                    {{option.title}}
                  </option>
                </select>
                
                <p class="placholder" v-show="!typeBeton">бетон товарный</p>
              </div>
              <div class="calc_block_inputResult">
                <div class="calc_block_inputResult__title">Выбрать Марку</div>  
                <select v-model="markaBeton" @change="markaBeton2" class="calc__select">
                  <option
                    v-for="option in typeBeton.price"
                    :value="option"
                    :key="option"
                  >
                    {{option.title}}
                  </option>
                </select>
                <p class="placholder" v-show="!markaBeton">М 300</p>
              </div>
            </div>
          </div>
        </div>
        <div class="calc_row">
          <div class="calc_result">
            <p class="calc_result__title">Результат</p>
            <ul>
              <li>
                <span>Общий объем:</span>
                <span>{{totalData.toFixed()}} м³</span> 
              </li>
              <li>
                <span>Вид бетона:</span>
                <span v-if="!typeBeton">Не выбрано</span>
                <span v-else>{{typeBeton.title}}</span>
              </li>
              <li>
                <span>Марка бетона:</span>
                <span v-if="!markaBeton">Не выбрано</span>
                <span v-else>{{markaBeton.title}}</span>
              </li>

            </ul>
            
            <p
              class="calc_result__title"
              style="margin-top: 32px;"
            >
              Стоимость бетона: {{markaBeton == '' ? 0 : totalModalPrice}} руб.
            </p>
          </div>
          <div class="calc_warning">
            <div class="calc_blockDescription">
              <strong>ВАЖНО!</strong> <br>
              Если основание опалубкии имеет уклон, или перепады высот, требуется расчет с учетом медианных значений
              высотных отметок. Для таких расчетов советуем вызвать специалиста нашего завода на объект. Он произведет
              необходиммый объем измерений и определит требуемый объем наиболее близко к реальному значению!
            </div>
            <div class="row">
              <div class="calc_blockButtonContainer">
                <div class="calc_blockButton" @click="saveFile()">сохранить данные</div>
                <div
                  class="calc_blockButton Orange"
                  style="padding-left: 25px;padding-right: 25px; margin-right: 10px;"
                  @click="modalActive()"
                >
                  Оформить заказ
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
    <div class="calc_block_result_sidebar">
      <FormQuetions :titlePage="titlePage" />
      <QrCode />
    </div>

  </div>
</template>

<script >
import {defineComponent, PropType} from 'vue'
import axios from 'axios'
import Inputmask from 'inputmask';
import FormQuetions from '../newComponents/FormQuetions.vue';
import QrCode from '../newComponents/QrCode.vue';

export default defineComponent({
  props: {
    title: String,
    simple: [String, Number],
    complex: [String, Number],
    triangle: [String, Number],
    rad: [String, Number],
    message: [Number],
    checkedNames: [Boolean], 
    modal: Boolean,
    titlePage: String,
    totalData: Number,
  },
  data() {
    return {
      typeBeton: '',
      markaBeton: '',
      typeBetonOptions:[
        {
          title:'бетон товарный',
          price: [
            {title:'М 100', price:3250},
            {title:'М 150', price:3350},
            {title:'М 200', price:3450},
            {title:'М 250', price:3550},
            {title:'М 300', price:3750},
            {title:'М 350', price:3850},
            {title:'М 400', price:4000},
            {title:'М 450', price:4150},
            {title:'М 500', price:4300}
          ]
        },
        {
          title:'Керамзитобетон',
          price: [
            {title:'М 100', price:3500},
            {title:'М 150', price:3600},
            {title:'М 200', price:3700},
            {title:'М 250', price:3800},
            {title:'М 300', price:4000},
            {title:'М 350', price:4100},
            {title:'М 400', price:4250},
            {title:'М 450', price:4400},
            {title:'М 500', price:4550}
          ]
        },
        {
          title:'Фибробетон',
          price: [
            {title:'М 100', price:3650},
            {title:'М 150', price:3750},
            {title:'М 200', price:3850},
            {title:'М 250', price:3950},
            {title:'М 300', price:4150},
            {title:'М 350', price:4250},
            {title:'М 400', price:4400},
            {title:'М 450', price:4550},
            {title:'М 500', price:4700}
          ]
        },
        {
          title:'Бездобавочный беон',
          price: [
            {title:'М 100', price:3450},
            {title:'М 150', price:3550},
            {title:'М 200', price:3650},
            {title:'М 250', price:3750},
            {title:'М 300', price:3950},
            {title:'М 350', price:4050},
            {title:'М 400', price:4200},
            {title:'М 450', price:4350},
            {title:'М 500', price:4500}
          ]
        },
        {
          title:'Бетон противоморзный', 
          price: [
            {title:'М 100', price:100},
            {title:'М 150', price:200},
            {title:'М 200', price:300},
            {title:'М 250', price:300},
            {title:'М 300', price:300},
            {title:'М 350', price:300},
            {title:'М 400', price:300},
            {title:'М 450', price:300},
            {title:'М 500', price:300}
          ]
        } 
      ],
    }
  },
  computed: {
    totalModalPrice()  {
      return (this.totalData * this.markaBeton.price).toFixed() 
    }
  },
  methods: {
    modalActive() {
      this.$emit('modalActive', this.totalModalPrice);
    },
    typeBeton2() {
      this.$emit('typeBeton2', this.typeBeton.title);
      console.log(this.typeBeton)
    },
    markaBeton2() {
      this.$emit('markaBeton2', this.markaBeton.title);
    },
    saveFile() {
      this.$emit('saveFile');
    }
  },
  mounted() {
    this.typeBeton = this.typeBetonOptions[0]
    this.markaBeton = this.typeBeton.price[0]
  },
  components: {
    FormQuetions,
    QrCode
  }
})
</script>

<style lang="sass">
@import "mixins"
.calc_block_result_sidebar
  flex: 0 0 auto
  max-width: 286px
  width: 286px
  disply: flex
  align-items: center
  justify-content: center
  padding-left: 30px
  @media (max-width: 780px)
    flex: 0 0 100%
    max-width: 100%
    width: 100%
    padding-left: 0
    .calc_contact
      margin-top: 17px !important
      display: block
  .qr-code
    margin-top: 36px
    @media (max-width: 780px)
      display: none
.calc_row
  display: flex
  .calc_result
    ul
      margin-top: 46px
  @media (max-width: 780px)
    display: block
.calc_warning 
  padding-left: 58px
  padding-top: 32px
  flex: 1 1 100%
  @media (max-width: 780px)
    padding-left: 0
  .row 
    display: flex
    @media (max-width: 1100px)
      display: block
      .calc_blockButtonContainer
        display: block
        .calc_blockButton.Orange
          margin-left: 0
          margin-top: 15px
  .calc_blockButton
    border: 2px solid #AFAFAF
    box-sizing: border-box
    border-radius: 2px
    background: rgba(0,0,0,0) !important
    padding-left: 27px !important
    padding-right: 27px !important
  .calc_blockButton.Orange
    background: #FFA92E !important
    border: 2px solid #FFA92E
    margin-left: 29px

.calc_result
  flex: 0 0 245px
  ul
    padding-left: 0
    li
      list-style: none
      display: flex
      justify-content: space-between
      margin-bottom: 20px
      span
        font-weight: 500
        font-size: 16px
        line-height: 19px
        color: #696969
  .calc_result__title
    font-weight: 600
    font-size: 20px
    line-height: 24px
    color: #2B2B2B
.calc_block_result
  display: flex
  align-items: stretch
  margin-bottom: 30px

  .calc_blockDescription
    font-style: normal
    font-size: 15px
    line-height: 140%

  .calc_block
    padding-right: 46px
    margin-bottom: 0
    padding-bottom: 0
    background: #EEEEEE
    border: 1px solid #E8E8E8
    box-shadow: 5px 8px 18px rgba(98, 94, 88, 0.12)
    border-radius: 2px
    @media (min-width: 780px)
      flex: 1 1 calc(100% - 30px)
      max-width: calc(74.3%)
    .calc_block_title
      padding-right: 60px
      text-transform: capitalize
    .calc_leftBlock
      flex: 1 1 100%

      .calc__left,
      .calc__right
        max-width: 50%
        flex: 1 1 50%
        @media (max-width: 780px)
          display: block
          max-width: 100%
          .calc_block_inline
            left: 0
          .calc_block_inputResult
            overflow: visible !important
            margin-right: 0
      .calc__right
        .calc_block_inputResult 
          @media (max-width: 552px)
            margin-top: 26px
    .calc_block_inline
      display: flex
      flex-flow: wrap row
      left: 0

    .calc_block_inputResult
      margin: 10px
      position: relative
      display: flex
      justify-content: space-between
      margin-left: 0
      background: white
      .calc_block_inputResult__title
        @media (max-width: 552px)
          position: relative
          top: -35px
      .calc__select 
        margin-left: auto
        position: relative
        z-index: 1
        text-align: right
        position: absolute
        width: 100%
        right: 4px
        left: 0
      .placholder 
        position: absolute
        right: 32px
        top: 0px
        bottom: 0
        align-items: center
        display: flex
        font-weight: bold
        font-size: 16px
        line-height: 19px
        z-index: 0
        color: #2B2B2B
        @media (max-width: 552px)
          right: auto

      @media (max-width: 1100px)
        width: unset
        flex: 1 1 100%

.calc_blockButtonContainer
  margin: 28px 0
  display: flex

  .calc_blockButton
    @include button(#EEE)

    &.Orange
      margin-right: 22px
      background-color: #FFA92E

.calc_concreteCalculation .calc_block_inputResult .placholder 
  position: absolute
  right: 32px
  top: 0
  bottom: 0
  align-items: center
  display: flex
  font-weight: 700
  font-size: 16px
  line-height: 19px
  z-index: 0
  color: #2b2b2b

</style>

// <style lang="scss">
//   .calc_leftBlock {

//   }
// </style>