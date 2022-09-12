<template>
  <div class="block-section">
    <h3 class="block-section_title">
      {{ title }}
      <span class="block-section_tip">подсказка <div v-if="tip">{{ tip }}</div></span>
    </h3>
    <div class="column">
      <slot name="inputFields"/>
    </div>
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
    .fields {
      .field-section {
        display: flex;
        align-items: center;
        .field-section__title {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #696969;
          max-width: 178px;
          width: 100%;
          b {
            color: #3C3C3C;
          }
        }
        .field {
          margin-left: 50px;
          .inp {
            border: 1px solid #E8E8E8;
            border-radius: 4px;
            padding: 10.5px 12px 10.5px 15px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
          }
          .meas {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #404040;
          }
        }
      }
    }
  }
</style>
