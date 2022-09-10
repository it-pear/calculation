<template>
  <div class="block-section">
    <h3 class="block-section_title">
      {{ title }}
      <span class="block-section_tip">подсказка <div v-if="tip">{{ tip }}</div></span>
    </h3>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    title: String,
    tip: [String, undefined],
    concrete: [null]
  },
  data() {
    return {
      
    }
  },
})
</script>

<style lang="scss">
  .block-section {
    border: 1px solid #E8E8E8;
    box-shadow: 5px 8px 18px rgba(98, 94, 88, 0.12);
    background: #FFFFFF;
    padding: 50px;
    .block-section_title {
      display: flex;
      flex-flow: row nowrap;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      flex-wrap: nowrap;
      align-items: flex-end;
      padding-bottom: 10px;
        
      .block-section_tip {
        color: #FFA92E;
        padding-left: 112px;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        text-decoration-line: underline;
        text-transform: uppercase;
        cursor: help;
        & > div {
          visibility: hidden;
          height: 0;
          width: 0;
          color: #696969;
        }
        &:hover {
          position: relative;
          & > div {
            visibility: visible;
            transition: .2s;
            height: unset;
            width: max-content;
            text-transform: none;
            position: absolute;
            max-width: 372px;
            background: #F8F8F8;
            bottom: 100%;
            box-shadow: 0 4px 13px rgba(112, 111, 111, 0.1);
            padding: 10px 16px;
            border-radius: 2px;
            transform: translate(20px, -10px);
            font-size: 14px;
            line-height: 130%;
          }
        }
      }

      .block-section_tip {
        .calc_block_tip {
          cursor: help;
        }

        .calc_block_tip > div {
          visibility: hidden;
          height: 0;
          width: 0;
          color: #696969;
        }


        .calc_block_tip:hover {
          position: relative;
          & > div {
            visibility: visible;
            transition: .2s;
            height: unset;
            width: max-content;
            text-transform: none;
            position: absolute;
            max-width: 372px;
            background: #F8F8F8;
            bottom: 100%;
            box-shadow: 0 4px 13px rgba(112, 111, 111, 0.1);
            padding: 10px 16px;
            border-radius: 2px;
            transform: translate(20px, -10px);
            font-size: 14px;
            line-height: 130%;
          }
        } 
      }
    }
  }
</style>
