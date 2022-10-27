<template>
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
            <p class="calc_result__title">Стоимость бетона: {{markaBeton == '' ? 0 : totalModalPrice}} руб.</p>
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
  methods: {
    scrollResult() {
      this.$emit('scrollResult')
    },
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
    this.typeBeton = this.typeBetonOptions[0]
    this.markaBeton = this.typeBeton.price[0]
  }
})
</script>

