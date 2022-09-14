<template>
  <div class="block-section-result">
    <div class="head">
      <slot name="head"></slot>
    </div>
    <div class="calculation_blockButtonMiniContainer">
      <slot name="btnSection"></slot>
    </div>
    <div class="information">
      <slot name="information"></slot>
    </div>
    <div class="result">
      <div class="total">
        <div class="title">Результат</div>
        <slot name="result"></slot>
      </div>
      <slot name="resultInfo"></slot>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  props: {
    // title: String,
    // tip: [String, undefined],
    // concrete: [null]
  },
  data() {
    return {
      
    }
  },
})
</script>

<style lang="scss">
  .block-section-result {
    background: #EEEEEE;
    border: 1px solid #E8E8E8;
    box-shadow: 5px 8px 18px rgba(98, 94, 88, 0.12);
    border-radius: 2px;
    padding-bottom: 40px;
    padding-top: 30px;
    margin-top: 60px;
    .head {
      display: flex;
      flex-wrap: nowrap;
      padding-left: 16px;
      padding-right: 16px;
      box-sizing: border-box;
      .column {
        &.col-4 {
          flex: 1 1 33.333333333%;
          max-width: 33.333333333%;
          padding: 0 14px;
        }
        .title {
          font-weight: 700;
          font-size: 20px;
          line-height: 28px;
          color: #2B2B2B;
          margin-bottom: 22px;
        }
        .field {
          background: #FFFFFF;
          border-radius: 2px;
          padding: 11.45px 15px;
          padding-right: 21px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          max-width: 100%;
          &.mb-20 {
            margin-bottom: 20px;
          }
          .text {
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #2B2B2B;
            &.opacity {
              color: #696969;
            }
          }
          .itog {
            font-weight: 700;
            font-size: 18px;
            line-height: 140%;
            color: #2B2B2B;
            position: relative;
            margin-left: auto;
            sup {
              position: absolute;
              top: -5px;
              margin-left: 1px;
              font-size: 10px;
            }
          }
        }
      }
      
    }
    .calculation_blockButtonMiniContainer {
      padding-left: 30px;
    }
    .result {
      display: flex;
      padding-left: 30px;
      margin-top: 50px;
      .total {
        max-width: 340px;
        width: 100%;
        .title {
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          color: #2B2B2B;
          margin-bottom: 25px;
        }
        .field {
          display: flex;
          align-items: center;
          margin-top: 10px;
          .text {
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #696969;
          }
          .info {
            font-weight: 700;
            font-size: 18px;
            line-height: 140%;
            color: #2B2B2B;
            margin-left: auto;
            position: relative;
            &.mt-10 {
              margin-right: 6px;
            }
            sup {
              position: absolute;
              top: -5px;
              margin-left: 1px;
              font-size: 10px;
            }
          }
        }
        .field-total {
          display: flex;
          align-items: center;
          margin-top: 34px;
          .text,
          .info {
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
            color: #2B2B2B;
          }
          .info {
            margin-left: auto;
          }
        }
      }
      .result-info {
        &.max-410 {
          max-width: 410px;
        }
        &.pl-30 {
          padding-left: 30px;
        }
        .text,
        .title {
          font-weight: 500;
          font-size: 15px;
          line-height: 140%;
          color: #2A2A2A;
        }
        .title {
          text-transform: uppercase;
        }
        .text {
          color: #696969;
          padding-right: 20px;
        }
        .calculation_blockButtonMiniContainer {
          &.mt-37 {
            margin-top: 37px;
          }
          &.pl-0 {
            padding-left: 0;
          }
        }
      }
      
    }
  }
</style>