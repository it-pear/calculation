<template>
  <div>
    <!--    Простая-->
    <div class="calc_block">
      <div class="calc_leftBlock">
        <h3 class="calc_block_title">
          Простая плита
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
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/1_1.png" alt="" srcset="">
      </div>
      
    </div>
    <MiniResult
      title="Простая плита"
      tip="Данные калькулятора будут верны только в том случае, если высота не меняется на участках опалубки и не нарушена геометрия самой опалубочной системы"
      :concrete="simple.result"
      :totalData="printResult(simple.result)"
      @scrollResult="onscrollResult"
    />

    <slotInlineBlockContainer
      title="Сложная плита"
      tip="Рассчитать объем сложных монолитных плит можно, разделив конструкцию на сектора. Таким образом можно узнать совокупный объем с помощью суммы объемов отдельных участков"
      :concrete="complex.result"
      v-if="true"
      :totalData="printResult(complex.result)"
      @scrollResult="onscrollResult"
    >
      <template v-slot:inlineBlock>
        <div class="calc_block_inlineContainer" v-for="(undefined, index) in complex.values" :key="index">
          <span class="calc_section_title">Размер секции {{ index + 1 }}:</span>
          <input type="number" v-model.number="complex.values[index].l" placeholder="Длина"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" v-model.number="complex.values[index].b" placeholder="Ширина"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
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
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/1_2.png" alt="" srcset="">
      </template>
    </slotInlineBlockContainer>


    <slotInlineBlockContainer
      title="Добавить треугольный сектор"
      tip="Если стороны опалубки не перпендикулярны друг другу, то лучшим решением будет разделить весь объем на треугольные и прямоугольный участки. С помощью суммы таких участков легко получить требуемый объем "
      v-if="true"
      :concrete="triangle.result"
      :totalData="printResult(triangle.result)"
      @scrollResult="onscrollResult"
    >
      <template v-slot:inlineBlock>
        <div class="calc_block_inlineContainer calc_block_triangle" v-for="(undefined_, index) in triangle.values" :key="index">

          <span class="calc_section_title">Треугольный сектор {{ index + 1 }}:</span>
          <input type="number" style="width: 100px; padding: 9px 8px; margin-top: 6px;" v-model.number="triangle.values[index].a" data-before-placeholder="Сторона" placeholder="Сторона a"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" style="width: 100px; padding: 9px 8px; margin-top: 6px;" v-model.number="triangle.values[index].b" data-before-placeholder="Сторона" placeholder="Сторона b"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" style="width: 100px; padding: 9px 8px; margin-top: 6px;" v-model.number="triangle.values[index].с" data-before-placeholder="Сторона" placeholder="Сторона с"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input type="number" style="width: 147px; padding: 9px 8px; margin-top: 6px;" v-model.number="triangle.values[index].h" data-after-placeholder="опалубки" placeholder="Высота&#x00A; опалубки"><span class="metr">м</span>
          <span class="close" @click="removeField(index, triangle)">&#215;</span>
        </div>
      </template>
      <template v-slot:addContainer>
        <div class="calc_block_addField" @click="addTriangle()">
          <img src="./../assets/icons/add_field.png" alt="">
          <span>Добавить секцию</span>
        </div>
      </template>
      <template v-slot:resultBlocks>
        <div class="calc_block_inputResult">Объем треугольных секторов: <span>{{ printResult(triangle.result) }}</span></div>
      </template>
      <template v-slot:image>
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/11/triangle.png" alt="" srcset="">
      </template>
    </slotInlineBlockContainer>

    <slotInlineBlockContainer
      title="Добавить радиусный сектор" 
      tip="Если будущий фундамент содержит радиусные элементы, то лучшим способом будет считать их объем отдельно и суммировать с объемом других участков"
      v-if="true"
      :concrete="rad.result"
      :totalData="printResult(rad.result)"
      @scrollResult="onscrollResult"
    >
      <template v-slot:inlineBlock>
        <div class="calc_block_inlineContainer" v-for="(undefined__, index) in rad.values" :key="index">
          <span class="calc_section_title">Радиусный сектор {{ index + 1 }}:</span>
          <input type="number" v-model.number="rad.values[index].r" placeholder="Радиус R"><span class="metr">м</span>
          <span class="calc_section_spread">&#215;</span>
          <input class="additionalLine" type="number" v-model.number="rad.values[index].h"
                 placeholder="Высота&#x00A; опалубки"><span class="metr">м</span>
          <span class="close" @click="removeField(index, rad)">&#215;</span>
        </div>
      </template>
      <template v-slot:addContainer>
        <div class="calc_block_addField" @click="addRad()">
          <img src="./../assets/icons/add_field.png" alt="">
          <span>Добавить секцию</span>
        </div>
      </template>
      <template v-slot:resultBlocks>
        <div class="calc_block_inputResult">Объем радиусных секторов: <span>{{ printResult(rad.result) }}</span></div>
      </template>
      <template v-slot:image>
        <img class="calc_rightBlock_Image" src="https://gorizontbeton.ru/wp-content/uploads/2021/10/1_4.png" alt="" srcset="">
      </template>
    </slotInlineBlockContainer>

    <slotResultBlock
      title="Общий суммарный объем конструкции"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      v-if="true"
      :modal="modal"
      @typeBeton2="typeBeton2"
      @markaBeton2="markaBeton2"
      @podvigBeton2="podvigBeton2"
      @modalActive="modalActive"
      @saveFile="saveFile"
      :totalData="totalData"
      @getScrollResult="ongetScrollResult"
    >
      <template v-slot:total>
        <div class="calc_block_inputResult">Общий объем: <span>{{ printResultBlock(totalData) }}</span></div>
        <div class="calc_block_inputResult">Объем прямоугольных секторов: <span>{{
            printResultBlock(complex.result)
          }}</span>
        </div>
        <div class="calc_block_inputResult">Объем треугольных секторов: <span>{{
            printResultBlock(triangle.result)
          }}</span></div>
        <div class="calc_block_inputResult">
          Объем радиусных секторов: <span>{{ printResultBlock(rad.result) }}</span>
        </div>
        
      </template>
      <template v-slot:image><img src="./tempContact.png" alt=""></template>
    </slotResultBlock>
    
    <HelpBetter />

    <readme
      text="С помощью нашего калькулятора, вы можете быстро узнать, какой объем бетона нужно заказать для заливки монолитной плиты. Если вам нужно залить простую плиту, то нужны данные только о длине, ширине и высоте. Если же сложная – то эти же данные, но, о каждом сегменте. В калькуляторе доступная опция расчета, сколько бетона нужно для того, чтобы залить плиту с треугольным или радиусным сектором. Введи все необходимые данные, и калькулятор подскажет, сколько бетона купить для заливки монолитной плиты"
    />

    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      :totalData="totalData"
      :complex="complex.result"
      :triangle="triangle.result"
      :rad="rad.result"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      titleForm1="Общий объем: "
      titleForm2="Объем прямоугольных секторов: "
      titleForm3="Объем треугольных секторов: "
      titleForm4="Объем радиусных секторов: "
      :typeBeton="typeBeton"
      :markaBeton="markaBeton"
      :podvigBeton="podvigBeton"
      :totalModalPrice="totalModalPrice"
    />
  </div>

</template>

<script lang="ts">

import {defineComponent} from 'vue'
import {IComplex, IRad, ITriangle} from "./types";
import {printResultBlock, printResult, removeField} from "./methods"
import slotInlineBlockContainer from "./slotInlineBlockContainer.vue"
import slotResultBlock from "./slotResultBlock.vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import MiniResult from "./MiniResult.vue";
import readme from "./readme.vue";
import modal from "./modal.vue";
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
      triangle: {
        values: [{a: "", b: "", с: "", h: ""}, {a: "", b: "", с: "", h: ""}],
        result: ""
      } as ITriangle,
      rad: {
        values: [{r: "", h: ""}, {r: "", h: ""}],
        result: ""
      } as IRad,
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
      return Number(this.simple.result) + Number(this.complex.result) + Number(this.triangle.result) + Number(this.rad.result)
    },
    complexResult(): Number {
      return Number(this.complex.result)
    },
    triangleResult(): Number {
      return Number(this.triangle.result)
    },
    radResult(): Number {
      return Number(this.rad.result)
    },
  },
  methods: {
    printResultBlock: printResultBlock,
    printResult: printResult,
    addComplex() {
      this.complex.values = [...this.complex.values, {l: "", b: "", h: ""}]
    },
    addTriangle() {
      this.triangle.values = [...this.triangle.values, {a: "", b: "", с: "", h: ""}]
    },
    addRad() {
      this.rad.values = [...this.rad.values, {r: "", h: ""}]
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
    removeField,
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
        head2:  this.complexResult,
        head3: this.triangleResult,
        head4: this.radResult,
        head5: "Вид бетона: ",
        head6: "Марка бетона: ",
        head7: "Подвижность: ",
        head8: "Стоимость бетона",
        title1: 'Общий объем: ',
        title2: 'Объем прямоугольных секторов: ',
        title3: 'Объем треугольных секторов: ',
        title4: 'Объем радиусных секторов: ',
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
    triangle: {
      handler: function (val: ITriangle) {
        const result = val.values.reduce((acc: Number, obj) => {
          const values = Object.values(obj)
          if (values.filter(nbr => nbr == "" || Number(nbr) === 0).length != 0) {
            return acc
          } else {
            let perimentr = (Number(obj.с) + Number(obj.a) + Number(obj.b)) / 2
            let ploshad = perimentr * (perimentr - Number(obj.a)) * (perimentr - Number(obj.b)) * (perimentr - Number(obj.с))
            // return Number(acc) + Number(obj.h) * Number(obj.a) * Number(obj.b) / 2
            return Number(acc) + (Math.sqrt(ploshad) * Number(obj.h))
          }
        }, 0)
        val.result = result.valueOf()
      },
      deep: true
    },
    rad: {
      handler: function (val: IRad) {
        const result = val.values.reduce((acc: Number, obj) => {
          const values = Object.values(obj)
          if (values.filter(nbr => nbr == "" || Number(nbr) === 0).length != 0) {
            return acc
          } else {
            return Number(acc) + Math.pow(Number(obj.r), 2) * Math.PI * Number(obj.h)
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
    "readme": readme,
    "modal": modal,
    HelpBetter,
    MiniResult
  }
})
</script>

<style lang="sass">

</style>
