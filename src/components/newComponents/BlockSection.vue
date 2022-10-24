<template>
  <div class="block-section">
    <div class="column">
      <h3 class="block-section_title">
        <span>{{ title }}</span>
        <span class="block-section_tip"><span>подсказка</span> <div v-if="tip">{{ tip }}</div></span>
      </h3>
      <slot name="inputFields"/>
      <slot name="fieldItog"/>
    </div>
    <div class="block-section-image">
      <slot name="image"></slot>
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
    padding: 30px 50px 50px 50px;
    display: flex;
    margin-bottom: 40px;

    .column {
      flex: 0 0 max-content;
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
        position: relative;    
        span {
          min-width: 195px;
        }    
        .block-section_tip {
          color: #FFA92E;
          padding-left: 0;
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
      .field-section {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .field-section__title {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: #696969;
          min-width: 178px;
          width: 178px;
          b {
            color: #3C3C3C;
          }
        }
        .field {
          margin-left: 17px;
          position: relative;
          max-width: 190px;
          .inp {
            border: 1px solid #E8E8E8;
            border-radius: 4px;
            padding: 10.5px 12px 10.5px 15px;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            width: 190px;
            box-sizing: border-box;
            &::placeholder {
              color: #C5C5C5;
            }
          }
          
          .meas {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #404040;
            position: absolute;
            right: 15px;
            top: 0;
            bottom: 0;
            margin: auto;
            display: flex;
            align-items: center;
          }
        }
        &-select,
        &-select-2 {
          .field {
            max-width: 465px;
            width: 100%;
            position: relative;
            .inp {
              border: 1px solid #E8E8E8;
              border-radius: 4px;
              padding: 10.5px 12px 10.5px 15px;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              width: 100%;
              margin-left: 0;
            }
            select {
              border: 1px solid #E8E8E8;
              border-radius: 4px;
              padding: 10.5px 15px;
              box-sizing: border-box;
              font-weight: 400;
              font-size: 16px;
              line-height: 19px;
              color: #000000;
              width: 100%;
              max-width: 100%;
              -moz-appearance: none;
              -webkit-appearance: none;
              overflow: hidden;
            }
            .meas {
              background: white;
              height: calc(100% - 4px);
              padding-left: 10px;
              pointer-events: none;
            }
          }
        }
        
        &-select-2 {
          .field {
            max-width: 256px;
          }
        }
      }

      .field-section-itog {
        display: flex;
        align-items: center;
        background: #F5F5F5;
        border-radius: 2px;
        padding: 5px 10px 5px 14px;
        max-width: 426px;
        margin-top: 30px;
        .title {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #696969;
          margin-right: auto;
        }
        .inp-itog {
          background: #FFFFFF;
          border: 1px solid #E8E8E8;
          border-radius: 4px;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          color: #2B2B2B;
          padding: 8px 0;
          text-align: center;
          margin-left: 10px;
          min-width: 68px;
          height: 38px;
          box-sizing: border-box;
          position: relative;
          sup {
            position: absolute;
            font-size: 10px;
            top: 0;
            margin-left: 1px;
          }
        }
      }

    }
    .block-section-image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 100%;
    }
    
    @media (max-width: 772px) {
      border: none;
      box-shadow: none;
      background: #FFFFFF;
      padding: 20px 10px 10px 10px;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;

      .column {
        flex: 0 0 100%;
        .block-section_title {
          display: flex;
          flex-flow: row wrap;
          font-style: normal;
          font-weight: 600;
          font-size: 20px;
          line-height: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          padding-bottom: 10px;
          position: relative;    
          span {
            min-width: 195px;
          }    
          .block-section_tip {
            color: #FFA92E;
            padding-left: 0;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            text-transform: uppercase;
            max-width: calc(100% - 10px);
            width: calc(100% - 10px);
            margin-top: 15px;
            text-decoration: none;

            cursor: help;
            & > span {
              display: none;
            }
            
            & > div,
            &:hover > div {
              visibility: visible;
              transition: .2s;
              height: unset;
              width: 100%;
              text-transform: none;
              position: relative;
              max-width: 100%;
              background: #F8F8F8;
              box-shadow: 0px 4px 13px rgba(112, 111, 111, 0.1);
              border-radius: 2px;
              padding: 8px;
              border-radius: 2px;
              transform: translate(0);
              font-size: 14px;
              line-height: 130%;
              max-width: 100%;
              border: none;
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
        .field-section {
          align-items: flex-start;
          margin-bottom: 15px;
          flex-wrap: wrap;
          .field-section__title {
            flex: 0 0 100%;
            max-width: 100%;
            margin-bottom: 10px;
          }
          .field {
            margin-left: 0px;
            flex: 0 0 100%;
            max-width: 100%;
            .inp {
              padding: 11.5px 12px 11.5px 15px;
              font-size: 14px;
              line-height: 17px;
              width: 100%;
            } 
          }
          &-checkbox {
            flex-wrap: nowrap;
            flex-direction: row;
            .field-section__title {
              flex: 0 0 150px;
              max-width: 150px;
            }
            .field {
              margin-left: 0px;
              flex: 0 0 24px;
              max-width: 24px;
            }
          }
        }

        .field-section-itog {
          display: flex;
          align-items: center;
          background: #F5F5F5;
          border-radius: 2px;
          padding: 5px 10px 5px 14px;
          max-width: 426px;
          margin-top: 30px;
          .title {
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #696969;
            margin-right: auto;
          }
          .inp-itog {
            background: #FFFFFF;
            border: 1px solid #E8E8E8;
            border-radius: 4px;
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            color: #2B2B2B;
            padding: 8px 0;
            text-align: center;
            margin-left: 10px;
            min-width: 68px;
            height: 38px;
            box-sizing: border-box;
            position: relative;
            sup {
              position: absolute;
              font-size: 10px;
              top: 0;
              margin-left: 1px;
            }
          }
        }

      }
      .block-section-image {
        padding-top: 36px;
        img {
          max-width: 100%;
        }
      }
    }
  }
</style>
