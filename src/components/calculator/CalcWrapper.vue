<template>
  <div class="calс">
    <h1 class="calc_title">{{ pages.title }}</h1>
    <div class="calc_container">
      <p1 v-if="currentPage === 0"></p1>
      <p2 v-if="currentPage === 1"></p2>
      <p3 v-if="currentPage === 2"></p3>
      <p4 v-if="currentPage === 3"></p4>
      <p5 v-if="currentPage === 4"></p5>
      <p6 v-if="currentPage === 5"></p6>
      <p7 v-if="currentPage === 6"></p7>
      <p8 v-if="currentPage === 7"></p8>
      <p9 v-if="currentPage === 8"></p9>
      <p10 v-if="currentPage === 9"></p10>
    </div>
    
  </div>

</template>

<script lang="ts">

import {defineComponent, PropType} from 'vue'
import page1 from './Calc1.vue'
import page2 from './Calc2.vue'
import page3 from './Calc3.vue'
import page4 from './Calc4.vue'
import page5 from './Calc5.vue'
import page6 from './Calc6.vue'
import page7 from './Calc7.vue'
import page8 from './Calc8.vue'
import page9 from './Calc9.vue'
import page10 from './Calc10.vue'
import {TPages} from "./types";

export default defineComponent({
  props: {
    pages: Object as PropType<TPages>,
    currentPage: Number
  },
  components: {
    "p1": page1,
    "p2": page2,
    "p3": page3,
    "p4": page4,
    "p5": page5,
    "p6": page6,
    "p7": page7,
    "p8": page8,
    "p9": page9,
    "p10": page10,
  },
  template: {}
})
</script>

<style lang="sass">
@import "stylesCalc"
.calc
  &_title
    font-style: normal
    font-weight: 900
    font-size: 30px
    line-height: 36px
    text-transform: uppercase
    margin-bottom: 30px
    @media (max-width: 960px)
      padding: 0px 10px
  &_block
    padding: 26px 5px 26px 46px
    border: 1px solid #E8E8E8
    box-sizing: border-box
    box-shadow: 5px 8px 18px rgba(98, 94, 88, 0.12)
    border-radius: 2px

</style>
