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
                <span>{{formatNumber(concrete)}}</span>
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
            <p class="calc_result__title">Стоимость бетона: <span>{{totalModalPrice}} руб.</span></p>
          </div>
          <div class="calc_result-btn">
            <div class="calc_blockButtonContainer">
              <div class="calc_blockButton" @click="$emit('saveFile')">Скачать данные </div>
              <div class="calc_blockButton Orange" @click="$emit('modalActive')">Оформить заказ</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { formatNumber } from '@/numbers.js'

export default defineComponent({
  setup() {
    return {
      formatNumber
    }
  },
  props: {
    title: String,
    tip: [String, undefined],
    concrete: [null],
    totalData: Number,
  },
  data() {
    return {
      typeBeton: '',
      markaBeton: null,
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
      if (this.concrete > 0 && this.concrete < 1) return this.formatNumber(this.markaBeton.price * this.concrete)
      if (this.markaBeton !== null && this.markaBeton !== '') {
        let totalData = Number(this.totalData.replace(/\s+/g, ''))
        let result =  (totalData * this.markaBeton.price).toFixed()
        return this.formatNumber(result)
      } else {
        return 0
      }
      
    }
  },
  mounted() {
    this.getData()
  }
})
</script>

