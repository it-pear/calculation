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

  <div class="calc_concreteCalculation" :class="{'calc_concreteCalculation__active': concrete}">
    <div class="calc_block_inline">

      <div class="calc_leftBlock">
        <div class="calc_block_inputResult">
          <div class="calc_block_inputResult__title">выбрать вид бетона</div>  
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
          <div class="calc_block_inputResult__title">выбрать Марку</div>  
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
        <div class="calc_leftBlock__info" @click="scrollResult">
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
                <span>{{concrete}}</span>
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
            <p class="calc_result__title">Стоимость бетона: <span>{{markaBeton == '' ? 0 : totalModalPrice}} руб.</span></p>
          </div>
          <div class="calc_result-btn">
            <div class="calc_blockButtonContainer">
              <div class="calc_blockButton">Скачать данные </div>
              <div class="calc_blockButton Orange">Оформить заказ</div>
            </div>
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
    concrete: [null],
    totalData: Number,
  },
  data() {
    return {
      typeBeton: '',
      markaBeton: '',
      typeBetonOptions:[]
    }
  },
  methods: {
    scrollResult() {
      this.$emit('scrollResult')
    },
    async getData() {
      let url = '/wp-json/myplugin/v1/getprice'
      let response = await fetch(url)
      this.betonchik =  await response.json();
      this.getget()
      this.typeBeton = this.typeBetonOptions[0]
      this.markaBeton = this.typeBeton.price[0]
    },
    getget() {
      this.betonchik.map((item) => {
        item.conteiner.forEach((el) => {
          let arr = el.title.split(' ')
          el.title = el.title.split(' ')[arr.length - 1]
        })
        item.price = item.conteiner
      })
      console.log(this.betonchik)
      this.typeBetonOptions = this.betonchik
    }
  },
  computed: {
    calculationConcrete() {
      return ''
    },
    totalModalPrice()  {
      return (this.totalData * this.markaBeton.price).toFixed() 
    }
  },
  mounted() {
    this.getData()
  }
})
</script>

<style lang="sass">
.calc_block
  position: relative
  z-index: 2
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
  padding-right: 6px
  background: #EEEEEE
  border: 1px solid #E8E8E8
  border-radius: 2px
  position: relative
  top: -30px
  z-index: 1
  transition: all 0.25s
  opacity: 0
  overflow: hidden
  height: 0
  .calc_result
    flex: 0 0 301px
  @media (max-width: 960px)
    padding-left: 0
    display: none !important
  .calc_block_inline
    display: flex
    margin-bottom: 0
    padding-bottom: 5px
    padding-top: 5px
    .calc_leftBlock
      flex: 0 0 411px
      max-width: 411px
      padding-top: 5px
      @media (max-width: 960px)
        flex: 0 0 360px
        max-width: 360px
      .calc_leftBlock__info
        font-weight: 600
        font-size: 18px
        line-height: 140%
        color: #FFA92E
        margin-left: 10px
        cursor: pointer
        img
          margin-left: 8px
    .calc_rightBlock
      flex: 1 1 100%
      .calc_row
        width: 100%
        justify-content: center
        .calc_result
          .calc_result__title
            margin-top: 12px
          ul
            min-width: 270px
            li
              margin-bottom: 7px
        .calc_result-btn
          display: flex
          align-items: flex-end
          .calc_blockButtonContainer
            flex-direction: column
            padding-left: 24px
            margin: 0
            padding-bottom: 25px
            @media (max-width: 960px)
              align-items: flex-end
            .calc_blockButton 
              border: 2px solid #AFAFAF
              box-sizing: border-box
              border-radius: 2px
              background: rgba(0, 0, 0, 0) 
              width: 184px
              padding: 12px 10px
              @media (max-width: 960px)
                margin-right: 0
              &.Orange
                background: #FFA92E 
                border: 2px solid #FFA92E
                margin-top: 17px
  .calc_block_inputResult
    margin: 10px
    position: relative
    display: flex
    justify-content: space-between
    background: white
    border: 1px solid #E7E7E7;
    border-radius: 2px;
    display: flex
    align-items: center
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
.calc_concreteCalculation__active
  opacity: 1
  display: block
  overflow: visible
  height: auto
</style>
