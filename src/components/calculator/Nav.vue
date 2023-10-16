<template>
  <div class="nav">
    <div class="navContainer">
      <div 
        class="navButton"
        v-for="page in pages"
        :class="[currentPage === page.index ? 'active' : '']"
        :key="page.index"
        v-on:click="changePage.call(null, page.index)"
        :style="`background-image: url(/images/navImages/${page.index + 1}.png)`"
      >
        <div class="text text-desctop">{{ page.name }}</div>
        <div class="text text-mobile">{{ page.titleMobile }}</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import {defineComponent, PropType, Ref, ref} from "vue";
import {TPages} from "../calculator/types";

const check = (index: number, current: number): boolean => {
  console.log(index, current)
  return true
}


export default defineComponent({
  methods: {},
  props: {
    pages: Array as PropType<TPages[]>,
    changePage: Function || String,
    currentPage: Number as PropType<Number>
  }
})


</script>
<style lang="scss">
.nav {
  @media (min-width: 1150px) {
    width: calc(100% + 20px);
    left: -10px;
    position: relative;
  }
  .navContainer {
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    .navButton  {
      background: #EEEEEE;
      box-shadow: 0px 4px 13px rgba(112, 111, 111, 0.1);
      border-radius: 2px;
      height: 206px;
      margin: 0px 10px 20px 10px;
      flex: 1 1 15%;
      background-size: cover !important;
      background-position: center !important;
      .text {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        // text-transform: uppercase;
        color: #7A7A7A;
        padding: 16px 5px 0 5px;
        &-mobile {
          display: none;
        }
      }
      

      &.active {
        background: #FFA92E;
        .text {
          color: #2B2B2B;
        }
      }
    }
  }
  @media (max-width: 772px) {
    .navContainer {
      padding-top: 16px;
      
      .navButton  {
        height: 37px;
        flex: unset;
        width: calc(50% - 10px);
        margin: 5px;
        background: #EEEEEE !important;
        .text {
          text-transform: capitalize;
          font-weight: 500;
          font-size: 13px;
          line-height: 16px;
          color: #7A7A7A;
          padding: 10.5px 5px 0 5px;
          &-desctop {
            display: none;
          }
          &-mobile {
            display: inherit;
          }
        }

        &.active {
          background: #FFA92E !important;
        }
      }
    }
  }
}
@import "mixins"
// .nav
//   margin-bottom: 60px
//   @media (max-width: 900px)
//     margin-bottom: 0
//     padding-left: 10px
//     box-sizing: content-box;
//     .navButton
//       font-size: 13px
//   @media (max-width: 552px)
//     .navButton
//       font-size: 12px
//   &Container
//     justify-content: space-between
//     display: flex
//     flex-flow: row wrap
//     //align-items: stretch
//     @media (max-width: 900px)
//       //justify-content: start
//       margin: -5px

//   &Button
//     @include button(#EEEEEE)
//     margin: 47px 10px
//     flex: 1 1 15%
//     @media (max-width: 900px)
//       flex: unset
//       width: calc(50% - 10px)
//       margin: 5px

//     &.active
//       background-color: #FFA92E

    

</style>
