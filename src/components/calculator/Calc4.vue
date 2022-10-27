<template>
  <div>
    <!--    Простая-->
    <div class="calc_block" v-if="true">
      <div class="calc_leftBlock">
        <h3 class="calc_block_title">
          Простой свайно-ростверковый фундамент
          <span class="calc_block_tip">
            подсказка 
            <div>Простая УШП плита состоит из внешнего «контура» - ростверка и из внутреннего обогреваемого. Как правило они имеют разные геометрические размеры. Лучшим методом будет посчитать их объемы отдельно и суммировать полученный результат.</div>
          </span>
        </h3>
        <div class="calc_block_inputContainer">Общая длина ростверка, L:
          <input type="number" v-model.number="simple.valueOfFundament.l" placeholder="Длина"><span class="metr">м</span>
        </div>
        <div class="calc_block_inputContainer">Ширина ростверка, B:
          <input type="number" v-model.number="simple.valueOfFundament.w" placeholder="Ширина"><span class="metr">м</span></div>
        <div class="calc_block_inputContainer">Высота ростверка, H:
          <input type="number" v-model.number="simple.valueOfFundament.h" placeholder="Высота"><span class="metr">м</span></div>
        <div class="calc_block_inlineContainer">
          <span class="description">Сваи: </span>
          <input type="number" v-model.number="simple.valueOfPile.r" placeholder="Радиус"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" v-model.number="simple.valueOfPile.h" placeholder="Высота"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" v-model.number="simple.valueOfPile.c" placeholder="Кол-во"><span class="metr">м</span>
        </div>
        <div class="calc_block_inputResult">Объем ростверка:
          <span>
            {{ printResult(simple.result) }}
        </span>
        </div>
      </div>
      <div class="calc_rightBlock">
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/4_1.png" alt="" srcset="">
      </div>
    </div>
    <MiniResult
      title="Простой свайно-ростверковый фундамент"
      tip="Простая УШП плита состоит из внешнего «контура» - ростверка и из внутреннего обогреваемого. Как правило они имеют разные геометрические размеры. Лучшим методом будет посчитать их объемы отдельно и суммировать полученный результат."
      :concrete="simple.result"
      :totalData="printResult(simple.result)"
      @scrollResult="onscrollResult"
    />

    <slotInlineBlockContainer
      title="Сложный свайно-ростверковый фундамент"
      tip="Сложная УШП состоит из нескольких обогреваемых участков, разделенных внутренними перегородками. В этом случае предлагаем отдельно рассчитать объемы перегородок и обогреваемых участков."
      :concrete="complex.result"
      :totalData="printResult(complex.result)"
      @scrollResult="onscrollResult"
    >
      <template v-slot:inlineBlock>
        <template v-for="(undefined, index) in complex.valuesOfFundament" :key="index">
          <div class="calc_block_inlineContainer">
            <span class="calc_section_title">Секция <span style="margin-left: auto">{{ index + 1 }}:</span></span>
            <input type="number" v-model.number="complex.valuesOfFundament[index].l" placeholder="Длина"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="complex.valuesOfFundament[index].w" placeholder="Ширина"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="complex.valuesOfFundament[index].h"
                   placeholder="Высота"><span class="metr">м</span>
            <span class="close" @click="removeField(index, complex.valuesOfFundament)">&#215;</span>
          </div>
        </template>
      </template>
      <template v-slot:addContainer>
        <div class="calc_block_addField" @click="addComplexFundament()">
          <img src="./../assets/icons/add_field.png" alt="">
          <span>Добавить секцию</span>
        </div>
      </template>
      <template v-slot:inlineBlock2>
        <div class="calc_block_inlineContainer" v-for="(undefined, index) in complex.valuesOfPile" :key="index">
          <span class="calc_section_title">Сваи {{ index + 1 }}: </span>
          <input type="number" v-model.number="complex.valuesOfPile[index].r" placeholder="Радиус"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" v-model.number="complex.valuesOfPile[index].h" placeholder="Высота"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" v-model.number="complex.valuesOfPile[index].c" placeholder="Кол-во"><span class="metr">м</span>
          <span class="close" @click="removeField(index, complex.valuesOfPile)">&#215;</span>
        </div>
      </template>
      <template v-slot:addContainer2>
        <div class="calc_block_addField" @click="addComplexPile()">
          <img src="./../assets/icons/add_field.png" alt="">
          <span>Добавить секцию</span>
        </div>
      </template>


      <template v-slot:resultBlocks>
        <div class="calc_block_inputResult">Объем сложного ростверка: <span>{{ printResult(complex.result) }}</span>
        </div>
      </template>
      <template v-slot:image>
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/4_2.png" alt="" srcset="">
      </template>
    </slotInlineBlockContainer>


    <slotInlineBlockContainer 
      title="Добавить сваю"
      tip="Рассчитать объем сложных плит удобней всего, разделив общий объем на сектора. Таким образом, можно посчитать площадь каждого сектора и задать для него разные параметры высотных отметок"
      :concrete="pile.result"
      :totalData="printResult(pile.result)"
      @scrollResult="onscrollResult"
    >
      <template v-slot:addContainer>
        <div class="calc_block_addField" @click="addPile()">
          <img src="./../assets/icons/add_field.png" alt="">
          <span>Добавить секцию</span>
        </div>
      </template>
      <template v-slot:inlineBlock>
        <template v-for="(undefined, index) in pile.values" :key="index">
          <div class="calc_block_inlineContainer">
            <span class="calc_section_title">Сваи: {{ index + 1 }} </span>
            <input type="number" v-model.number="pile.values[index].r" placeholder="Радиус"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="pile.values[index].h" placeholder="Высота"><span class="metr">м</span>
            <span class="calc_section_spread">&#215;</span>
            <input type="number" v-model.number="pile.values[index].c" placeholder="Кол-во"><span class="metr">м</span>
            <span class="close" @click="removeField(index, pile.values)">&#215;</span>
          </div>
        </template>
      </template>


      <template v-slot:resultBlocks>
        <div class="calc_block_inputResult">Объем свай: <span>{{ printResultBlock(pile.result) }}</span></div>
      </template>
      <template v-slot:image>
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/5_1.png" alt="" srcset="">
      </template>
    </slotInlineBlockContainer>


    <slotResultBlock
      title="Общий суммарный объем конструкции"
      titlePage="БЕТОН ДЛЯ РОСТВЕРКА"
      :modal="modal"
      @modalActive="modalActive"
      @saveFile="saveFile"
      :totalData="totalData"
      @typeBeton2="typeBeton2"
      @markaBeton2="markaBeton2"
      @podvigBeton2="podvigBeton2"
      @getScrollResult="ongetScrollResult"
    >
      <template v-slot:total>

        <div class="calc_block_inputResult">Общий объем:
          <span>{{ printResultBlock(totalData) }}</span>
        </div>
        <div class="calc_block_inputResult">Объем ростверка:
          <span>{{ printResultBlock(simple.result) }}</span>
        </div>
        <div class="calc_block_inputResult">Объем сложного ростверка:
          <span>
            {{ printResultBlock(complex.result) }}
          </span>
        </div>
        <div class="calc_block_inputResult">Объем свай:
          <span>
            {{ printResultBlock(pile.result) }}
          </span>
        </div>
      </template>
      <template v-slot:image><img src="./tempContact.png" alt=""></template>
    </slotResultBlock>
    <HelpBetter />
    <readme
      text="Наш калькулятор поможет вам рассчитать, сколько бетона нужно заказать для заливки свайно-ростверкого фундамента. Если у вас простая форма фундамента, то потребуется ввести только длину, высоту и ширину ростверка. Если же свайно-ростверковый фундамент сложной формы, то потребуется ввести размеры каждого из секторов. Также в нашем калькуляторе вы можете узнать, сколько бетона нужно купить, чтобы залить свайно-ростверковый фундамент с радиусным сектором. После ввода всех данных, нажмите кнопку “Объем плиты”, и вы получите результаты расчетов. Если что-то вызывает у вас трудности, мы всегда готовы ответить на ваши вопросы по телефону."
    />
    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      :totalData="totalData"
      :simple="simple.result"
      :complex="complex.result"
      :pile="pile.result"
      titlePage="БЕТОН ДЛЯ РОСТВЕРКА"
      titleForm1="Общий объем: "
      titleForm2="Объем ростверка: "
      titleForm3="Объем сложного ростверка: "
      titleForm4="Объем свай: "
      :typeBeton="typeBeton"
      :markaBeton="markaBeton"
      :podvigBeton="podvigBeton"
      :totalModalPrice="totalModalPrice"
    />
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import {IComplexSPF, IComplexUSHP, IPile, IPile2, ISimpleSPF, ISimpleUSHP} from "./types";
import {printResult, printResultBlock} from "./methods"
import slotInlineBlockContainer from "./slotInlineBlockContainer.vue"
import slotResultBlock from "./slotResultBlock.vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import MiniResult from "./MiniResult.vue";
import modal from "./modal.vue"
import readme from "./readme.vue";
import axios from 'axios'

export default defineComponent({
  data() {
    return {
      simple: {
        valueOfFundament: {
          l: "",
          h: "",
          w: ""
        },
        valueOfPile: {
          r: "",
          c: "",
          h: ""
        },
        result: ""
      } as ISimpleSPF,
      complex: {
        valuesOfFundament: [{
          l: "",
          h: "",
          w: ""
        }, {
          l: "",
          h: "",
          w: ""
        }, {
          l: "",
          h: "",
          w: ""
        }],
        valuesOfPile: [{
          r: "",
          c: "",
          h: ""
        }, {
          r: "",
          c: "",
          h: ""
        }],
        result: ""
      } as IComplexSPF,
      pile: {
        values: [{
          r: "",
          c: "",
          h: ""
        }, {
          r: "",
          c: "",
          h: ""
        }],
        result: ""
      } as { values: IPile[], result: number | "" },
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
      return [this.simple.result, this.complex.result, this.pile.result].reduce((acc: number, value) => {
        return (Number(value)) ? acc + Number(value).valueOf() : acc
      }, 0)
    },
    simpleResult(): Number {
      return Number(this.simple.result)
    },
    complexResult(): Number {
      return Number(this.complex.result)
    },
    pileResult(): Number {
      return Number(this.pile.result)
    },
  },
  methods: {
    printResultBlock: printResultBlock,
    printResult: printResult,
    addComplexFundament() {
      this.complex.valuesOfFundament.push({
        l: "",
        h: "",
        w: ""
      })
    },
    addComplexPile() {
      this.complex.valuesOfPile.push({r: "", c: "", h: ""})
    },
    addPile() {
      this.pile.values.push({r: "", c: "", h: ""})
    },
    removeField(index: number,arr: Array<any>) {
      arr.splice(index, 1)
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
        head4: this.pileResult,
        head5: "Вид бетона: ",
        head6: "Марка бетона: ",
        head7: "Подвижность: ",
        head8: "Стоимость бетона",
        title1: 'Общий объем: ',
        title2: 'Объем ростверка: ',
        title3: 'Объем сложного ростверка: ',
        title4: 'Объем свай: ',
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
        let resultPile = Math.pow((Number(val.valueOfPile.r) * 3.14), 2) * Number(val.valueOfPile.h) * Number(val.valueOfPile.c)
        let Fundament = val.valueOfFundament.l * val.valueOfFundament.h * val.valueOfFundament.w
        val.result = resultPile + Fundament
      },
      deep: true
    },
    complex: {
      handler: function (val) {
        let resultFundament = 0;
        let resultvaluesOfPile = 0;
        for(let i=0; i < val.valuesOfFundament.length; i++) {
          let sum1 = val.valuesOfFundament[i].l * val.valuesOfFundament[i].h * val.valuesOfFundament[i].w
          resultFundament += sum1
        }
        for(let i=0; i < val.valuesOfPile.length; i++) {
          let sum1 = Math.pow((Number(val.valuesOfPile[i].r) * 3.14), 2) * Number(val.valuesOfPile[i].c) * Number(val.valuesOfPile[i].h)
          resultvaluesOfPile += sum1
        }
        val.result = resultFundament + resultvaluesOfPile
      },
      deep: true
    },
    pile: {
      handler: function (val: IPile2) {
        const result = val.values.reduce((acc: Number, obj) => {
          const values = Object.values(obj)
          if (values.filter(nbr => nbr == "" || Number(nbr) === 0).length != 0) {
            return acc
          } else {
            return Number(acc) + values.reduce((acc: Number, value) => {
              return Math.pow((Number(obj.r) * 3.14), 2) * Number(obj.h) * Number(obj.c) 
            }, 1)
          }
        }, 0)  
        val.result = result.valueOf()
      },
      deep: true
    }
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

<style lang="sass" scoped>
.calc_block_inputContainer > input
  width: 50%

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
</style>

<style lang="scss">
  .metr {
    position: relative;
    display: block;
    font-size: 15px;
    top: 10px;
    width: 0 !important;
    right: 20px;
    font-weight: bold;
  }
  .calc_block_inputContainer {
    position: relative;
  }
  .calc_block_inputContainer .metr {
    position:  absolute;
  }
  .calc_block_triangle .metr {
    top: 15.5px;
  }
</style>