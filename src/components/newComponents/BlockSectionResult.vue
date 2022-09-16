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
    <div
      class="result" 
      :class="{'result-gorisontal': gorisontalResult, 'result-gorisontal2': gorisontalResult2}"
    >
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
    gorisontalResult: Boolean,
    gorisontalResult2: Boolean,
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
        &.col-50 {
          flex: 1 1 50%;
          max-width: 50%;
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
            white-space: nowrap;
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
            text-align: right;
            sup {
              position: absolute;
              top: -5px;
              margin-left: 1px;
              font-size: 10px;
            }
          }
        }
        .field-limitation {
          @media (min-width: 772px) {
            .text {
              min-width: 167px;
              width: 100%;
              white-space: pre-wrap;
            }
          }
        }
      }
    }
    .calculation_blockButtonMiniContainer {
      padding-left: 30px;
    }

    .information {
      padding-top: 40px;
      display: flex;
      flex-wrap: nowrap;
      padding-left: 30px;
      padding-right: 39px;
      table {
        background: #FFFFFF;
        border-radius: 10px;
        color: #000000;
        width: 100%;
        .opacity {
          color: #696969;
        }
        thead,
        tbody {
          tr {
            th,
            td {
              padding: 14px 20px;
              font-weight: 500;
              border-right: 1px solid #E8E8E8;
              border-bottom: 1px solid #E8E8E8;
              text-align: center;
              &:last-child {
                border-right: none;
              }
            }
          }
        }
        thead {
          tr {
            th {
              font-weight: 600;
            }
            &:first-child {
              th {
                &:first-child {
                  text-align: left;
                }
              }
            }
          }
        }
        tbody {
          tr {
            td {
              &:first-child {
                color: #696969;
                text-align: left;
                padding-right: 0px;
              }
              &.td-mobile {
                @media (min-width: 772px) {
                  display: none;
                }
              }
            }
            &:last-child {
              td {
                border-bottom: none;
              }
            }
          }
        }
      }

      .sec-1 {
        flex: 1 1 673px;
        max-width: 673px;
        padding-right: 53px;
        table {
          min-height: 365px;
          thead {
            tr {
              &:first-child {
                th {
                  &:first-child {
                    width: 38.55%;
                  }
                }
              }
            }
          }
        }

      }
      .sec-2 {
        flex: 1 1 377px;
        max-width: 377px;
        table {
          min-height: 365px;
        }
      }
      .sec-2.sec-3 {
        flex: 1 1 487px;
        max-width: 487px;
        tbody {
          tr {
            td {
              text-align: center;
            }
          }
        }
      }
      .title {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #2B2B2B;
        margin-bottom: 30px;
        padding-right: 30px;
        max-width: 523px;
      }
    }

    .result {
      display: flex;
      padding-left: 30px;
      margin-top: 50px;
      .total {
        max-width: 340px;
        width: 100%;
        .fields-sections {
          .col-50 {

          }
        }
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
            display: flex;
            flex-wrap: nowrap;
            white-space: nowrap;
          }
        }
      }
      .total-gorisontal {
        max-width: 100%;
        flex: 0 0 100%;
        .fields-sections {
          .col-50 {

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
    .result-gorisontal {
      @media (min-width: 772px) {
        flex-direction: column-reverse;
        margin-top: 20px;
        .total {
          max-width: 789px;
          width: 100%; 
          padding-top: 5px;
          .title {
            display: none;
          }
          .field {
            margin-top: 10px;
          }
          .field-total {
            margin-top: 20px;
          }
        }
        .result-info {
          max-width: 633px;
        }
        .mb-visible {
          display: none;
        }
      }
    }
    .result-gorisontal2 {
      @media (min-width: 772px) {
        flex-wrap: wrap;
        .total {
          flex: 0 0 100%;
          max-width: 100%;
          .title {
            margin-bottom: 15px;
          }
          .fields-sections {
            display: flex;
            .col-50 {
              flex: 1 1 50%;
              max-width: 50%;
              &:first-child {
                padding-right: 25px;
              }
              &:last-child {
                padding-left: 25px;
                padding-top: 41px;
                padding-right: 50px;
              }
              .field-total {
                display: none;
              }
            }
          }
        }
        .result-info {
          padding-top: 23px;
          &.max-410 {
            max-width: 518px;
          }
          &.pl-30 {
            padding-left: 0;
          }
        }
        .field-total {
          flex: 0 0 100%;
          display: flex;
          align-items: center;
          padding-top: 25px;
          .text,
          .info {
            font-weight: 600;
            font-size: 20px;
            line-height: 140%;
            color: #2B2B2B;
          }
          .info {
            margin-left: 62px;
          }
        }
      }
    }


    @media(max-width: 772px) {
      box-shadow: 5px 8px 18px rgba(98, 94, 88, 0.12);
      padding-bottom: 31px;
      padding-top: 15px;
      margin-top: 45px;
      .head {
        flex-wrap: wrap;
        padding-left: 10px;
        padding-right: 10px;
        .column {
          &.col-4,
          &.col-50 {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0;
            padding-top: 15px;
          }
          .title {
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            color: #2B2B2B;
            margin-bottom: 20px;
          }
          .field {
            background: #FFFFFF;
            border-radius: 2px;
            padding: 11.45px 15px;
            padding-right: 21px;
            max-width: 100%;
            &.mb-20 {
              margin-bottom: 15px;
            }
          }
        }
        .column-fields-00100 {
          .field {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            .itog,
            .text {
              flex: 0 0 100%;
              text-align: left;
            }
            .itog {
              line-height: 22px;
              margin-left: 0;
              margin-top: 8px
            }
          }
        }
      }
      .calculation_blockButtonMiniContainer {
        padding-left: 10px;
        padding-top: 4px;
        justify-content: center;
      }


      .information {
        padding-top: 30px;
        flex-wrap: wrap;
        padding-left: 10px;
        padding-right: 10px;

        .sec-1 {
          flex: 1 1 100%;
          max-width: 100%;
          padding-right: 0;
          table {
            min-height: auto;
            thead,
            tbody {
              tr {
                th,
                td {
                  padding: 7.5px 5.5px;
                  border-right: none;
                  border-bottom: none;
                  box-sizing: border-box;
                }
              }
            }
            thead {
              tr {
                display: flex;
                flex-wrap: wrap;
                flex: 0 0 100%;
                max-width: 100%;
                &:first-child {
                  border-bottom: 1px solid #E8E8E8;
                }
                th {
                  flex: 0 0 100%;
                  max-width: 100%;
                  width: 100%;
                  &:first-child {
                    text-align: center;
                    order: 2;
                  }
                }
                &:first-child {
                  th {
                    &:last-child {
                      border-bottom: none;
                      padding-bottom: 0;
                    }
                  }
                }
                &:last-child {
                  display: none;
                }
              }
            }
            tbody {
              tr {
                display: flex;
                flex-wrap: wrap;
                flex: 0 0 100%;
                max-width: 100%;
                border-bottom: 1px solid #E8E8E8;
                &:last-child {
                  border-bottom: none;
                }
                td {
                  flex: 0 0 20%;
                  width: 20%;
                  font-weight: 700;
                  color: #000000;
                  &:first-child {
                    text-align: center;
                    flex: 0 0 100%;
                    max-width: 100%;
                    font-weight: 500;
                    color: #696969;
                  }
                }
              }
            }
          }

        }
        .sec-2 {
          flex: 1 1 100%;
          max-width: 100%;
          padding-top: 30px;
          table {
            min-height: auto; 
            tbody,
            thead {
              tr {
                td,
                th {
                  padding: 14px 10px;
                }
              }
            }
          }
        }
      }


      .result {
        display: flex;
        flex-wrap: wrap;
        padding-left: 10px;
        padding-right: 10px;
        margin-top: 29px;
        .total {
          max-width: 100%;
          width: 100%;
          .title {
            margin-bottom: 20px;
          }
          .field {
            margin-top: 10px;
          }
          .field-total {
            margin-top: 20px;
          }
        }
        .result-info {
          padding-top: 15px;
          &.max-410 {
            max-width: 100%;
          }
          &.pl-30 {
            padding-left: 0;
          }
          .text {
            padding-right: 0;
          }
          .calculation_blockButtonMiniContainer {
            align-items: center;
            flex-direction: column;
            padding-top: 29px;
            &.mt-37 {
              margin-top: 0;
            }
            .m-40 {
              margin-right: 0;
            }
            &.pl-0 {
              padding-left: 0;
            }
            .Orange {
              margin-top: 18px;
            }
          }
        }
      }
      .result-gorisontal {
        margin-top: 10px;
        .total {
          .title {
            display: none;
          }
        }
        .calculation_blockButtonMiniContainer {
          width: 100%;
          padding-top: 30px;
        }
        .result-info {
          padding-top: 25px;
        }
        .lg-visible {
          display: none;
        }
      }    
      .result-gorisontal2 {
        & > .field-total {
          padding-top: 25px;
          width: 100%;
          .text,
          .info {
            display: none !important;
          }
          .calculation_blockButtonMiniContainer {
            padding-left: 0;
            padding-top: 0;
          }
        }  
        .result-info {
          
        }
      }

    }
  }
</style>