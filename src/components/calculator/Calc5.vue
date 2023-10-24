<template>
  <slotInlineBlockContainer 
    title="Добавить сваю"
    tip="Если требуется залить отдельно стоящие сваи, можно внести их геометрические размеры и количество"
    :concrete="pile.result"
      :totalData="printResult(pile.result)"
      @saveFile="saveFile"
      @modalActive="modalActive"
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
          <span class="calc_section_title">Сваи: {{ index + 1 }}  </span>
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
    titlePage="ОБЪЁМ СВАЙ"
    :modal="modal"
    @modalActive="modalActive"
    @saveFile="saveFile"
    :totalData="totalData"
    @typeBeton2="typeBeton2"
    @markaBeton2="markaBeton2"
    @podvigBeton2="podvigBeton2"
  >
    <template v-slot:total>
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
    title="Онлайн калькулятор расчета объема бетона свай"
    text=""
  />
  <modal
    :modal="modal"
    @modalDisable="modalDisable"
    :pile="pile.result"
    titlePage="ОБЪЁМ СВАЙ"
    titleForm1="Объем свай: "
    :typeBeton="typeBeton"
      :markaBeton="markaBeton"
      :podvigBeton="podvigBeton"
      :totalModalPrice="totalModalPrice"
  />
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import {IComplexSPF, IComplexUSHP, IPile, IPile2, ISimpleSPF, ISimpleUSHP} from "./types";
import {printResult, printResultBlock} from "./methods"
import slotInlineBlockContainer from "./slotInlineBlockContainer.vue"
import slotResultBlock from "./slotResultBlock.vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import modal from "./modal.vue"
import readme from "./readme.vue";
import axios from 'axios'

export default defineComponent({
  data() {
    return {
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
      totalModalPrice: 0
    }
  },
  computed: {
    pileResult(): Number {
      return Number(this.pile.result)
    },
    totalData(): Number {
      return Number(this.pile.result) 
    },
  },
  methods: {
    printResultBlock: printResultBlock,
    printResult: printResult,
    addPile() {
      this.pile.values.push({r: "", c: "", h: ""})
    },
    removeField(index: number, arr: Array<any>) {
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
        head1: this.pileResult,
        head5: "Вид бетона: ",
        head6: "Марка бетона: ",
        head7: "Подвижность: ",
        head8: "Стоимость бетона",
        title1: 'Объем свай: ',
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
    
  },
  watch: {
    pile: {
      handler: function (val: IPile2) {
        const result = val.values.reduce((acc: Number, obj) => {
          const values = Object.values(obj)
          if (values.filter(nbr => nbr == "" || Number(nbr) === 0).length != 0) {
            return acc
          } else {
            return Number(acc) + values.reduce((acc: Number, value) => {
              return (Number(obj.r) * (Number(obj.r)) * 3.14) * Number(obj.h) * Number(obj.c)
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
    HelpBetter
  },


})
</script>

<style lang="sass" scoped>
.calc_block_inputContainer > input
  width: 50%
</style>
