<template>
  <div class="calc_block">
    <div class="calc_leftBlock">
      <h3 class="calc_block_title">
        {{ title }}
        <span class="calc_block_tip">подсказка <div v-if="tip">{{ tip }}</div></span>
      </h3>
      <div class="calc_block_inline">
        <slot name="inlineBlock"/>
      </div>
      <slot name="addContainer"/>
      <div class="calc_block_inline" v-if="this.$slots['inlineBlock2']">
        <slot name="inlineBlock2"/>
      </div>
      <slot name="addContainer2"/>
      <slot name="resultBlocks"/>
    </div>
    <div class="calc_rightBlock">
      <slot name="image"></slot>
    </div>
  </div>
  <div class="calc_concreteCalculation" v-if="concrete">

    <div class="calc_block_inline">

      <div class="calc_leftBlock">
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
        <div class="calc_leftBlock__info">
          Полный расчет внизу страницы
          <img src="./../assets/icons/arrowSvg.svg" alt="">
        </div>
      </div>

      <div class="calc_rightBlock">
        <div class="calc_row">
          <div class="calc_result">
            <p class="calc_result__title">Результат</p>
            <ul>
               <li>
                <span>Общий объем:</span>
                <!-- <span> {{totalData.toFixed()}} м³</span>  -->
                <span v-if="!typeBeton">Не выбрано</span>
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
            <p class="calc_result__title" style="margin-top: 32px;">Стоимость бетона: {{markaBeton == '' ? 0 : totalModalPrice}} руб.</p>
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    tip: [String, undefined],
    concrete: [Boolean, undefined]
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
      ]
    }
  },
  computed: {
    calculationConcrete() {
      return ''
    },
  }
})
</script>

<style lang="sass">
.calc_block_tip
  cursor: help

.calc_block_tip > div
  visibility: hidden
  height: 0
  width: 0
  color: #696969


.calc_block_tip:hover
  position: relative

  > div
    visibility: visible
    transition: .2s
    height: unset
    width: max-content
    text-transform: none
    position: absolute
    max-width: 372px
    background: #F8F8F8
    bottom: 100%
    box-shadow: 0 4px 13px rgba(112, 111, 111, 0.1)
    padding: 10px 16px
    border-radius: 2px
    transform: translate(20px, -10px)
    font-size: 14px
    line-height: 130%

.calc_concreteCalculation
    padding-right: 46px
    margin-bottom: 0
    padding-left: 33px
    padding-right: 26px
    background: #EEEEEE
    border: 1px solid #E8E8E8
    border-radius: 2px
    position: relative
    top: -30px
    .calc_block_inline
      display: flex
      .calc_leftBlock
        flex: 1 1 400px
        max-width: 400px
        padding-top: 11px
        .calc_leftBlock__info
          font-weight: 600
          font-size: 20px
          line-height: 140%
          color: #FFA92E
          margin-left: 10px
          margin-top: 11px
      .calc_rightBlock
        
    .calc_block_inputResult
      margin: 10px
      position: relative
      display: flex
      justify-content: space-between
      background: white
      border: 1px solid #E7E7E7;
      border-radius: 2px;
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
</style>
