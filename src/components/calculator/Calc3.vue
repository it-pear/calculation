<template>
  <div>
    <!--    Простая-->
    <div class="calc_block" v-if="true">
      <div class="calc_leftBlock">
        <h3 class="calc_block_title">
          Простой фундамент УШП
          <span class="calc_block_tip">
            подсказка 
            <div>Данные калькулятора будут верны только в том случае, если высота не меняется на участках опалубки и не нарушена геометрия самой опалубочной системы</div>
          </span>
        </h3>
        <img class="calc_rightBlock_Image lg-none" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/3_1.png" alt="" srcset="">
        <div class="calc_block_inputContainer">Общая длина ростверка, L:
          <input type="number" placeholder="Длина" v-model.number="simple.values.in.l"><span class="metr">м</span>
        </div>
        <div class="calc_block_inputContainer">Ширина ростверка, B:
          <input type="number" placeholder="Ширина" v-model.number="simple.values.in.w"><span class="metr">м</span></div>
        <div class="calc_block_inputContainer">Высота ростверка, H:
          <input type="number" placeholder="Высота" v-model.number="simple.values.in.h"><span class="metr">м</span></div>

        <div class="calc_block_inputContainer">Длина центральной секции:
          <input type="number" placeholder="Длина центра" v-model.number="simple.values.out.l"><span class="metr">м</span>
        </div>
        <div class="calc_block_inputContainer">Ширина центральной секции:
          <input type="number" placeholder="Ширина центра" v-model.number="simple.values.out.w"><span class="metr">м</span></div>
        <div class="calc_block_inputContainer">Высота центральной секции:
          <input type="number" placeholder="Высота центра" v-model.number="simple.values.out.h"><span class="metr">м</span></div>
        <div class="calc_block_inputResult">Объем УШП:
          <span>
            {{ printResult(simple.result) }}
        </span>
        </div>
      </div>
      <div class="calc_rightBlock">
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/3_1.png" alt="" srcset="">
      </div>
    </div>
    <MiniResult
      title="Простой фундамент УШП"
      tip="Данные калькулятора будут верны только в том случае, если высота не меняется на участках опалубки и не нарушена геометрия самой опалубочной системы"
      :concrete="simple.result"
      :totalData="printResult(simple.result)"
      @scrollResult="onscrollResult"
    />

    <slotInlineBlockContainer
      title="Сложная плита УШП"
      tip="Рассчитать общий объем такой конструкции лучше всего путем сложения объема внешней части ростверка, его перегородок и объемов свай."
      :concrete="complex.result"
      :totalData="printResult(complex.result)"
      @scrollResult="onscrollResult"
    >
      <template v-slot:inlineBlock>
        <template v-for="(undefined_, index) in complex.values" :key="index">
          <div class="calc_block_inlineContainer">
            <span class="calc_section_title">Внешняя часть <span style="margin-left: auto">{{ index + 1 }}:</span></span>
            <input type="number" v-model.number="complex.values[index].in.l" placeholder="Длина"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="complex.values[index].in.w" placeholder="Ширина"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="complex.values[index].in.h" placeholder="Высота"><span class="metr">м</span>
            <span class="close" @click="removeInField(index, complex)">&#215;</span>
          </div>
          <div class="calc_block_inlineContainer">
            <span class="calc_section_title">Внутренняя часть <span style="margin-left: auto">{{ index + 1 }}:</span></span>
            <input type="number" v-model.number="complex.values[index].out.l" placeholder="Длина"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="complex.values[index].out.w" placeholder="Ширина"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="complex.values[index].out.h" placeholder="Высота"><span class="metr">м</span>
            <span class="close" @click="removeInField(index, complex)">&#215;</span>
          </div>
        </template>
      </template>
      <template v-slot:addContainer2>
        <div class="calc_block_addField" @click="addComplex()">
          <img src="./../assets/icons/add_field.png" alt="">
          <span>Добавить секцию</span>
        </div>
      </template>

      <template v-slot:resultBlocks>
        <div class="calc_block_inputResult">Объем сложной УШП: <span>{{ printResult(complex.result) }}</span></div>
      </template>
      <template v-slot:image>
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/3_2.png" alt="" srcset="">
      </template>
    </slotInlineBlockContainer>

    <slotResultBlock 
      title="Общий суммарный объем конструкции" 
      titlePage="БЕТОН ДЛЯ УШП"
      :modal="modal" @modalActive="modalActive" @saveFile="saveFile" :totalData="totalData"
      @typeBeton2="typeBeton2"
      @markaBeton2="markaBeton2"
      @podvigBeton2="podvigBeton2"
      @getScrollResult="ongetScrollResult"
    >
      <template v-slot:total>
        <div class="calc_block_inputResult">Общий объем: <span>{{ printResultBlock(totalData) }}</span></div>
        <div class="calc_block_inputResult">Объем УШП: <span>{{
            printResultBlock(simple.result)
          }}</span>
        </div>
        <div class="calc_block_inputResult">Объем сложной УШП: <span>{{
            printResultBlock(complex.result)
          }}</span>
        </div>
      </template>
      <template v-slot:form>
        
      </template>
    </slotResultBlock>
    <HelpBetter />
    <readme
      title="Онлайн калькулятор расчета объема бетона УШП"
      text="Воспользуйтесь нашим калькулятором, чтобы рассчитать, сколько бетона потребуется для утепленной шведской плиты (УШП). Для того чтобы узнать, сколько бетона нужно заказать для простой УШП вам потребуется ввести общую длину, ширину и высоту ростверка, а также длину, ширину и высоту центральной секции. Если плита УШП – сложная, то потребуется ввести размеры внешних и внутренних секций. После ввода данных кликните на кнопку “Объем плиты” и калькулятор подскажет, сколько бетона необходимо для заливки УШП."
    />
    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      :totalData="totalData"
      :simple="simple.result"
      :complex="complex.result"
      titlePage="БЕТОН ДЛЯ УШП"
      titleForm1="Общий объем: "
      titleForm2="Объем УШП: "
      titleForm3="Объем сложной УШП: "
      :typeBeton="typeBeton"
      :markaBeton="markaBeton"
      :podvigBeton="podvigBeton"
      :totalModalPrice="totalModalPrice"
    />
    
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import {ISimpleUSHP, IComplexUSHP, USHP} from "./types";
import {printResultBlock, printResult} from "./methods"
import slotInlineBlockContainer from "./slotInlineBlockContainer.vue"
import slotResultBlock from "./slotResultBlock.vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import MiniResult from "./MiniResult.vue";
import readme from "./readme.vue";
import modal from "./modal.vue"
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      simple: {
        values: {
          in: {l: "", w: "", h: "",},
          out: {l: "", w: "", h: "",}
        },
        result: ""
      } as ISimpleUSHP,
      complex: {
        values: [{
          in: {l: "", w: "", h: "",},
          out: {l: "", w: "", h: "",}
        }],
        result: ""
      } as IComplexUSHP,
      modal: false,
      typeBeton: '',
      markaBeton: '',
      podvigBeton: '',
      totalModalPrice: 0,
      positionResult: 0
    }
  },
  computed: {
    totalData(): Number {
      return Number(this.simple.result) + Number(this.complex.result)
    },
    simpleResult(): Number {
      return Number(this.simple.result)
    },
    complexResult(): Number {
      return Number(this.complex.result)
    }
  },
  methods: {
    printResultBlock: printResultBlock,
    printResult: printResult,
    addComplex() {
      const emptyData: { in: USHP, out: USHP } = {
        in: {l: "", w: "", h: "",},
        out: {l: "", w: "", h: "",}
      }
      this.complex.values.push(emptyData)
    },
    removeInField(){
      this.complex.values.pop()
    },
    typeBeton2(value: string) {
      this.typeBeton = value;
    },
    markaBeton2(value: string) {
      this.markaBeton = value;
    },
    podvigBeton2(value: string) {
      this.podvigBeton = value;
    },
    modalActive(value: number) {
      this.modal = true;
      this.totalModalPrice = value
    },
    modalDisable() {
      this.modal = false
    },
    saveFile() {
      let state = {
        head1: this.totalData,
        head2:  this.simpleResult,
        head3: this.complexResult,
        head5: "Вид бетона: ",
        head6: "Марка бетона: ",
        head7: "Подвижность: ",
        head8: "Стоимость бетона",
        title1: 'Общий объем: ',
        title2: 'Объем УШП: ',
        title3: 'Объем сложной УШП: ',
        title5: this.typeBeton,
        title6: this.markaBeton,
        title7: this.podvigBeton,
        title8: this.totalModalPrice
      };
      axios({
        method: 'post',
        url: '/sendmail.php',
        headers: { 'content-type': 'application/json' },
        data: state
      }).then(res => {
        var link = document.createElement('a');
        link.setAttribute('href','/data.txt');
        link.setAttribute('download','download');
        link.click();
        return alert('Файл сохранен');
      });
    },
    ongetScrollResult(value: number) {
      this.positionResult = value
    },
    onscrollResult() {
      window.scrollBy({
        top: this.positionResult - window.pageYOffset,
        behavior: 'smooth'
      })
    }
  },
  watch: {
    simple: {
      handler: function (val) {
        val.result = val.values.in.l * val.values.in.w * val.values.in.h + val.values.out.l * val.values.out.w * val.values.out.h
      },
      deep: true
    },
    complex: {
      handler: function (val) {
        let result = 0;
        for(let i=0; i < val.values.length; i++) {
          let sum1 = val.values[i].in.l * val.values[i].in.w * val.values[i].in.h
          let sum2 = val.values[i].out.l * val.values[i].out.w * val.values[i].out.h
          result += sum1 + sum2
        }
        val.result = result.valueOf()
      },
      deep: true
    },
  },
  components: {
    "slotInlineBlockContainer": slotInlineBlockContainer,
    "slotResultBlock": slotResultBlock,
    "readme": readme,
    "modal": modal,
    HelpBetter,
    MiniResult
  }

})
</script>

<style lang="sass" scoped>

</style>
