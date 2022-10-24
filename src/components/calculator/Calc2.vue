<template>
  <div>
    <!--    Простая-->
    <div class="calc_block" v-if="true">
      <div class="calc_leftBlock">
        <h3 class="calc_block_title">
          Простая лента
          <span class="calc_block_tip">
            подсказка 
            <div>Данные калькулятора будут верны только в том случае, если высота не меняется на участках опалубки и не нарушена геометрия самой опалубочной системы</div>
          </span>
        </h3>
        <div class="calc_block_inputContainer">Общая длина, L:
          <input type="number" placeholder="Длина" v-model.number="simple.l"><span class="metr">м</span>
        </div>
        <div class="calc_block_inputContainer">Ширина, B:
          <input type="number" placeholder="Ширина" v-model.number="simple.b"><span class="metr">м</span></div>
        <div class="calc_block_inputContainer">Высота, H:
          <input type="number" placeholder="Высота" v-model.number="simple.h"><span class="metr">м</span></div>
        <div class="calc_block_inputResult">Объем плиты: <span>{{ printResult(simple.result) }}</span></div>
      </div>
      <div class="calc_rightBlock">
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/2_1.png" alt="" srcset="">
      </div>
    </div>
    <MiniResult
      title="Простая лента"
      tip="Данные калькулятора будут верны только в том случае, если высота не меняется на участках опалубки и не нарушена геометрия самой опалубочной системы"
      :concrete="simple.result"
      :totalData="printResult(simple.result)"
    />

    <slotInlineBlockContainer
      title="Лента с внутренними перегородками"
      tip="Если будущий фундамент имеет внутренние перегородки, то лучшим способом будет посчитать их объем отдельно и сложить полученные значения. Таким образом объем будет наиболее близок к реальному"
      :concrete="complex.result"
      :totalData="printResult(complex.result)"
      >
      <template v-slot:inlineBlock>
        <div class="calc_block_inlineContainer" v-for="(undefined__, index) in complex.values" :key="index">
          <span class="calc_section_title">Размер секции {{ index + 1 }}:</span>
          <input type="number" v-model.number="complex.values[index].l" placeholder="Длина"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" v-model.number="complex.values[index].b" placeholder="Ширина"><span class="metr">м</span>           <span class="calc_section_spread">&#215;</span>
          <input type="number" v-model.number="complex.values[index].h" placeholder="Высота"><span class="metr">м</span>
          <span class="close" @click="removeField(index, complex)">&#215;</span>
        </div>
      </template>
      <template v-slot:addContainer>
        <div class="calc_block_addField" @click="addComplex()">
          <img src="./../assets/icons/add_field.png" alt="">
          <span>Добавить секцию</span>
        </div>
      </template>
      <template v-slot:resultBlocks>
        <div class="calc_block_inputResult">Объем плиты: <span>{{ printResult(complex.result) }}</span></div>
      </template>
      <template v-slot:image>
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/2_2.png" alt="" srcset="">
      </template>
    </slotInlineBlockContainer>

    <slotResultBlock
      title="Общий суммарный объем конструкции"
      titlePage="БЕТОН ДЛЯ ЛЕНТЫ"
      :totalData="totalData"
      :modal="modal"
      @typeBeton2="typeBeton2"
      @markaBeton2="markaBeton2"
      @podvigBeton2="podvigBeton2"
      @modalActive="modalActive"
      @saveFile="saveFile"
    >
      <template v-slot:total>
        <div class="calc_block_inputResult">Общий объем: <span>{{ printResultBlock(totalData) }}</span></div>
        <div class="calc_block_inputResult">Объем ленты: <span>{{
            printResultBlock(simple.result)
          }}</span>
        </div>
        <div class="calc_block_inputResult">Объем ленты с перегородками:<span>{{
            printResultBlock(complex.result)
          }}</span>
        </div>
      </template>
      <template v-slot:image><img src="./tempContact.png" alt=""></template>
    </slotResultBlock>
    <HelpBetter />
    <readme />
    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      :totalData="totalData"
      :simple="simple.result"
      :complex="complex.result"
      titlePage="БЕТОН ДЛЯ ЛЕНТЫ"
      titleForm1="Общий объем: "
      titleForm2="Объем ленты: "
      titleForm3="Объем ленты с перегородками: "
      titleForm4=" "
      :typeBeton="typeBeton"
      :markaBeton="markaBeton"
      :podvigBeton="podvigBeton"
      :totalModalPrice="totalModalPrice"
    />

  </div>


</template>

<script lang="ts">

import {defineComponent} from 'vue'
import {IComplex} from "./types";
import {printResultBlock, printResult, removeField} from "./methods"
import slotInlineBlockContainer from "./slotInlineBlockContainer.vue"
import slotResultBlock from "./slotResultBlock.vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import MiniResult from "./MiniResult.vue";
import modal from "./modal.vue";
import readme from "./readme.vue";
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      simple: {
        l: "",
        b: "",
        h: "",
        result: ""
      },
      complex: {
        values: [{l: "", b: "", h: ""}, {l: "", b: "", h: ""}, {l: "", b: "", h: ""}],
        result: ""
      } as IComplex,
      modal: false,
      typeBeton: '',
      markaBeton: '',
      podvigBeton: '',
      totalModalPrice: 0
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
    },
  },
  methods: {
    printResultBlock: printResultBlock,
    printResult: printResult,
    removeField,
    addComplex() {
      this.complex.values = [...this.complex.values, {l: "", b: "", h: ""}]
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
        title2: 'Объем ленты: ',
        title3: 'Объем ленты с перегородками: ',
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
    }
  },
  watch: {
    simple: {
      handler: function (val) {
        val.result = val.l * val.b * val.h;
      },
      deep: true
    },
    complex: {
      handler: function (val: IComplex) {
        const result = val.values.reduce((acc: Number, obj) => {
          const values = Object.values(obj)
          if (values.filter(nbr => nbr == "" || Number(nbr) === 0).length != 0) {
            return acc
          } else {
            return Number(acc) + values.reduce((acc: Number, value) => {
              return Number(acc) * Number(value)
            }, 1)
          }
        }, 0)
        val.result = result.valueOf()
      },
      deep: true
    },
  },
  components: {
    "slotInlineBlockContainer": slotInlineBlockContainer,
    "slotResultBlock": slotResultBlock,
    "modal": modal,
    "readme": readme,
    HelpBetter,
    MiniResult
  }

})
</script>

<style lang="sass">

</style>
