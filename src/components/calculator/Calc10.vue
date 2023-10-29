<template>
  <div class="page-calc-meshalka">
    <BlockSection
      title="Укажите данные:"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section field-section-select-2">
          <div class="field-section__title">Марка бетона:</div>
          <div class="field">
            <select name="" id="" v-model="typeBetonModel">
              <option
                v-for="option in typeBetonOptions"
                :value="option"
                :key="option"
              >
                {{option.title}}
              </option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
        <div class="field-section field-section-select-2">
          <div class="field-section__title">Марка цемента:</div>
          <div class="field">
            <select name="" id="" v-model="dataBetonModel"> 
              <option
                v-for="option in typeBetonModel.data"
                :value="option"
                :key="option"
              >
                {{option.title}}
              </option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Данные бетона:</div>
          <div class="inp-itog" style="padding: 8.5px 10px;">{{typeBetonModel.title}}</div>
          <div class="inp-itog">{{dataBetonModel.title}}</div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/meshalka.jpg" />
      </template>
    </BlockSection>

    <div class="calculation_blockButtonContainer">
      <div class="zagolovok">Результат</div>
    </div>

    <div class="row-section-sidebar">
      <BlockSectionResult :gorisontalResult2="true" @saveFile="saveFile" @modalActive="modalActive">
        <template v-slot:head>
          <div class="column col-50">
            <div class="title">Общий расчет материалов для изготовлния бетона</div>
            <div class="field mb-20">
              <div class="text">Марка бетона</div>
              <div class="itog">{{typeBetonModel.title}}</div>
            </div>
            <div class="field mb-20">
              <div class="text">Марка цемента:</div>
              <div class="itog">{{dataBetonModel.title}}</div>
            </div>
          </div>
        </template>

        <template v-slot:btnSection>
          <!-- <button class="calculation_blockButton Orange mt-10">
            Рассчитать стоимость
          </button> -->
        </template>
        <template v-slot:result>
          <div class="fields-sections">
            <div class="col-50">
              <div class="field"> 
                <div class="text">Пропорзия (Ц-Щ-П-В)</div>
                <div class="info mt-10">{{dataBetonModel.proportion}}</div>
              </div>
              <div class="field" style="margin-top: 16px;">
                <div class="text">Масса цемента:</div>
                <div class="info">{{dataBetonModel.mcement}}кг</div>
              </div>
              <div class="field">
                <div class="text">Масса щебня:</div>
                <div class="info">{{dataBetonModel.mrubble}}кг</div>
              </div>
              <div class="field">
                <div class="text">Масса песка:</div>
                <div class="info">{{dataBetonModel.msand}}кг</div>
              </div>
              <div class="field">
                <div class="text">Масса воды:</div>
                <div class="info">{{dataBetonModel.mwater}}кг</div>
              </div>
            </div>
            <div class="col-50">
              <div class="field">
                <div class="text">Объем цемента:</div>
                <div class="info">{{dataBetonModel.ocement}} м3</div>
              </div>
              <div class="field">
                <div class="text">Объем щебня:</div>
                <div class="info">{{dataBetonModel.orubble}} м3</div>
              </div>
              <div class="field">
                <div class="text">Объем песка:</div>
                <div class="info">{{dataBetonModel.osand}} м3</div>
              </div>
              <div class="field">
                <div class="text">Объем воды:</div>
                <div class="info">{{dataBetonModel.owater}} м3 или {{dataBetonModel.mwater}} л</div>
              </div>
              <div class="field-total">
                <div class="text">Стоимость рассчета:</div>
                <div class="info">0 руб.</div>
              </div>
            </div>
          </div>
          
        </template>
        <template v-slot:resultInfo>
          <div class="result-info pl-30 max-410">
            <div class="title">
              ВАЖНО! 
            </div>
            <div class="text">
              Если основание опалубкии имеет уклон, или перепады высот, требуется расчет с учетом медианных значений высотных отметок. Для таких расчетов советуем вызвать специалиста нашего завода на объект. Он произведет необходиммый объем измерений и определит требуемый объем наиболее близко к реальному значению!
            </div>
          </div>
          <div class="field-total">
            <div class="text">Стоимость рассчета:</div>
            <div class="info">0 руб.</div>
            <div class="calculation_blockButtonMiniContainer pl-0 mt-37 lg-visible">
              <button class="calculation_blockButton m-40" @click="saveFile()">
                скачать результаты
              </button>
              <button class="calculation_blockButton Orange" @click="modalActive()">
                Оформить заказ
              </button>
            </div>
          </div>
        </template>
      </BlockSectionResult>
      <div class="calc_block_result_sidebar">
        <FormQuetions :titlePage="titlePage" />
        <QrCode />
      </div>
    </div>

    <HelpBetter />
    <readme
      title="Онлайн калькулятор расчета материалов для изготовления бетона"
      text="Бесплатный онлайн калькулятор цемента поможет посчитать, какое количество вяжущего понадобится для изготовления 1 кубометра бетонной смеси выбранной марки. Инструмент вычисления покажет применяемые пропорции для указанной марки бетона и марки используемого цемента. Калькулятор также подскажет, сколько потребуется щебня, песка и воды, а также укажет объем каждого компонента."
    />
    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      titlePage="РАСЧЕТ МАТЕРИАЛОВ ДЛЯ ИЗГОТОВЛЕНИЯ БЕТОНА"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import BlockSection from "../newComponents/BlockSection.vue";
import BlockSectionResult from "../newComponents/BlockSectionResult.vue";
import readme from "./readme.vue";
import axios from 'axios'
import FormQuetions from '../newComponents/FormQuetions.vue';
import QrCode from '../newComponents/QrCode.vue';
import modal from "./modal.vue";

export default defineComponent({
  data() {
    return {
      modal: false,
      typeBetonModel:
      {
        id: 1,
        title:'М100 | В7,5',
        data: [
          {
            title: 'M400',
            proportion: '1 : 5.9 : 3.3 : 1.05',
            mcement: 205,
            mrubble: 1210,
            msand: 667,
            mwater: 215,
            ocement: 0.16,
            orubble: 0.82,
            osand: 0.44,
            owater: 0.21,
          },
          {
            title: 'M500',
            proportion: '1 : 6.5 : 3.7 : 1.16',
            mcement: 185,
            mrubble: 1210,
            msand: 684,
            mwater: 215,
            ocement: 0.14,
            orubble: 0.82,
            osand: 0.46,
            owater: 0.21,
          }
        ]        
      },
      dataBetonModel: {
        title: 'M400',
        proportion: '1 : 5.9 : 3.3 : 1.05',
        mcement: 205,
        mrubble: 1210,
        msand: 667,
        mwater: 215,
        ocement: 0.16,
        orubble: 0.82,
        osand: 0.44,
        owater: 0.21,
      },
      typeBetonOptions: [
        {
          id: 1,
          title:'М100 | В7,5',
          data: [
            {
              title: 'M400',
              proportion: '1 : 5.9 : 3.3 : 1.05',
              mcement: 205,
              mrubble: 1210,
              msand: 667,
              mwater: 215,
              ocement: 0.16,
              orubble: 0.82,
              osand: 0.44,
              owater: 0.21,
            },
            {
              title: 'M500',
              proportion: '1 : 6.5 : 3.7 : 1.16',
              mcement: 185,
              mrubble: 1210,
              msand: 684,
              mwater: 215,
              ocement: 0.14,
              orubble: 0.82,
              osand: 0.46,
              owater: 0.21,
            }
          ]      
        },
        {
          id: 2,
          title:'М150 | В12,5',
          data: [
            {
              title: 'M400',
              proportion: '1 : 4.8 : 2.5 : 0.85',
              mcement: 253,
              mrubble: 1210,
              msand: 626,
              mwater: 215,
              ocement: 0.19,
              orubble: 0.82,
              osand: 0.42,
              owater: 0.21,
            },
            {
              title: 'M500',
              proportion: '1 : 5.4 : 2.9 : 0.96',
              mcement: 224,
              mrubble: 1210,
              msand: 651,
              mwater: 215,
              ocement: 0.17,
              orubble: 0.82,
              osand: 0.43,
              owater: 0.21,
            }
          ]      
        },
        {
          id: 3,
          title:'М200 | В15',
          data: [
            {
              title: 'M400',
              proportion: '1 : 4.0 : 1.9 : 0.71',
              mcement: 303,
              mrubble: 1210,
              msand: 584,
              mwater: 215,
              ocement: 0.23,
              orubble: 0.82,
              osand: 0.39,
              owater: 0.21,
            },
            {
              title: 'M500',
              proportion: '1 : 4.6 : 2.3 : 0.81',
              mcement: 265,
              mrubble: 1210,
              msand: 616,
              mwater: 215,
              ocement: 0.20,
              orubble: 0.82,
              osand: 0.41,
              owater: 0.21,
            }
          ]     
        },
        {
          id: 4,
          title:'М250 | В20',
          data: [
            {
              title: 'M400',
              proportion: '1 : 3.4 : 1.5 : 0.61',
              mcement: 352,
              mrubble: 1210,
              msand: 542,
              mwater: 215,
              ocement: 0.27,
              orubble: 0.82,
              osand: 0.36,
              owater: 0.21,
            },
            {
              title: 'M500',
              proportion: '1 : 4.0 : 1.9 : 0.71',
              mcement: 303,
              mrubble: 1210,
              msand: 584,
              mwater: 215,
              ocement: 0.23,
              orubble: 0.82,
              osand: 0.39,
              owater: 0.21,
            }
          ]     
        },
        {
          id: 5,
          title:'М300 | В22,5',
          data: [
            {
              title: 'M400',
              proportion: '1 : 3.0 : 1.3 : 0.54',
              mcement: 398,
              mrubble: 1210,
              msand: 503,
              mwater: 215,
              ocement: 0.31,
              orubble: 0.82,
              osand: 0.34,
              owater: 0.21,
            },
            {
              title: 'M500',
              proportion: '1 : 3.5 : 1.6 : 0.63',
              mcement: 341,
              mrubble: 1210,
              msand: 551,
              mwater: 215,
              ocement: 0.26,
              orubble: 0.82,
              osand: 0.37,
              owater: 0.21,
            }
          ]     
        },
        {
          id: 6,
          title:'М350 | В25',
          data: [
            {
              title: 'M400',
              proportion: '1 : 2.7 : 1 : 0.49',
              mcement: 448,
              mrubble: 1210,
              msand: 447,
              mwater: 220,
              ocement: 0.34,
              orubble: 0.82,
              osand: 0.30,
              owater: 0.22,
            },
            {
              title: 'M500',
              proportion: '1 : 3.2 : 1.3 : 0.56',
              mcement: 384,
              mrubble: 1210,
              msand: 515,
              mwater: 215,
              ocement: 0.30,
              orubble: 0.82,
              osand: 0.34,
              owater: 0.21,
            }
          ]    
        },
        {
          id: 7,
          title:'М400 | В30',
          data: [
            {
              title: 'M400',
              proportion: '1 : 2.4 : 0.8 : 0.45',
              mcement: 500,
              mrubble: 1210,
              msand: 390,
              mwater: 225,
              ocement: 0.38,
              orubble: 0.82,
              osand: 0.26,
              owater: 0.23,
            },
            {
              title: 'M500',
              proportion: '1 : 2.9 : 1.1 : 0.51',
              mcement: 422,
              mrubble: 1210,
              msand: 477,
              mwater: 217,
              ocement: 0.32,
              orubble: 0.82,
              osand: 0.32,
              owater: 0.22,
            }
          ]      
        },
        {
          id: 8,
          title:'М450 | B35',
          data: [
            {
              title: 'M400',
              proportion: '1 : 2.2 : 1 : 0.4',
              mcement: 492,
              mrubble: 1073,
              msand: 513,
              mwater: 215,
              ocement: 0.38,
              orubble: 0.72,
              osand: 0.34,
              owater: 0.21,
            },
            {
              title: 'M500',
              proportion: '1 : 2.5 : 1.4 : 0.5',
              mcement: 421,
              mrubble: 1073,
              msand: 570,
              mwater: 215,
              ocement: 0.32,
              orubble: 0.72,
              osand: 0.38,
              owater: 0.21,
            }
          ]     
        },
        {
          id: 9,
          title:'М500 | В40',
          data: [
            {
              title: 'M400',
              proportion: '1 : 2 : 0.9 : 0.4',
              mcement: 536,
              mrubble: 1063,
              msand: 488,
              mwater: 215,
              ocement: 0.41,
              orubble: 0.72,
              osand: 0.33,
              owater: 0.21,
            },
            {
              title: 'M500',
              proportion: '1 : 2.3 : 1.2 : 0.5',
              mcement: 457,
              mrubble: 1063,
              msand: 551,
              mwater: 215,
              ocement: 0.35,
              orubble: 0.72,
              osand: 0.37,
              owater: 0.21,
            }
          ]     
        }
      ],
    }
  },
  methods: {
    
    modalDisable() {
      this.modal = false
    },
    modalActive() {
      this.modal = true
    },
    saveFile() {
      let state = {
        head1: 'Пропорзия (Ц-Щ-П-В) ',
        head2: 'Масса цемента: ',
        head3: 'Масса щебня: ',
        head4: 'Масса песка: ',
        head5: 'Масса воды: ',
        head6: 'Объем цемента: ',
        head7: 'Объем щебня: ',
        head8: 'Объем песка: ',
        head9: 'Объем воды: ',

        title1: this.dataBetonModel.proportion,
        title2: this.dataBetonModel.mcement,
        title3: this.dataBetonModel.mrubble,
        title4: this.dataBetonModel.msand,
        title5: this.dataBetonModel.mwater,
        title6: this.dataBetonModel.ocement,
        title7: this.dataBetonModel.orubble,
        title8: this.dataBetonModel.osand,
        title9: this.dataBetonModel.owater,

      };
      axios({
        method: 'post',
        url: '/sendmail2.php',
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
  components: {
    BlockSection,
    BlockSectionResult,
    HelpBetter,
    readme,
    FormQuetions,
    QrCode,
    modal
  }
});
</script>

<style lang="scss">
  .page-calc-meshalka {
    .help-better {
      margin-top: 63px;
    }
    .calc_readme {
      margin-top: 63px;
    }
    .block-section-result  {
      .result {
        margin-top: 0;
      }
    }
    .block-section .column .field-section-itog {
      @media (max-width: 772px) {
        flex-wrap: wrap !important;
        .title {
          margin-bottom: 10px !important;
          flex: 0 0 100%;
        }
        .field-section-itog {
          .inp-itog {
            &:first-child {
              margin-left: 0 !important;
            }
          }
        }
        
      }
    }
  }
</style>