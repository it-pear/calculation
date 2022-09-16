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
            <select name="" id="">
              <option value="">Марка</option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
        <div class="field-section field-section-select-2">
          <div class="field-section__title">Укажите данные:</div>
          <div class="field">
            <select name="" id="">
              <option value="">Данные</option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Размер отмостки:</div>
          <div class="inp-itog" style="padding: 8.5px 10px;">М150/В10</div>
          <div class="inp-itog">М400</div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/meshalka.jpg" />
      </template>
    </BlockSection>

    <div class="calculation_blockButtonContainer">
      <button
        class="calculation_blockButton Orange m-40"
      >
        ПОКАЗАТЬ РЕЗУЛЬТАТ
      </button>
      <button class="calculation_blockButton">СКАЧАТЬ ФАЙЛ</button>
    </div>

    <div class="row-section-sidebar">
      <BlockSectionResult :gorisontalResult2="true">
        <template v-slot:head>
          <div class="column col-50">
            <div class="title">Общий расчет материалов для изготовлния бетона</div>
            <div class="field mb-20">
              <div class="text">Марка бетона</div>
              <div class="itog">М150/В10</div>
            </div>
            <div class="field mb-20">
              <div class="text">Данные бетона:</div>
              <div class="itog">М400</div>
            </div>
          </div>
        </template>

        <template v-slot:btnSection>
          <button class="calculation_blockButton Orange mt-10">
            Рассчитать стоимость
          </button>
        </template>
        <template v-slot:result>
          <div class="fields-sections">
            <div class="col-50">
              <div class="field">
                <div class="text">Пропорзия (Ц-Щ-П-В)</div>
                <div class="info mt-10">1-4.8-2.5-0.85</div>
              </div>
              <div class="field" style="margin-top: 16px;">
                <div class="text">Масса цемента:</div>
                <div class="info">253кг</div>
              </div>
              <div class="field">
                <div class="text">Масса щебня:</div>
                <div class="info">1210кг</div>
              </div>
              <div class="field">
                <div class="text">Масса песка:</div>
                <div class="info">626кг</div>
              </div>
              <div class="field">
                <div class="text">Масса воды:</div>
                <div class="info">215кг</div>
              </div>
            </div>
            <div class="col-50">
              <div class="field">
                <div class="text">Объем цемента:</div>
                <div class="info">0.19 м3</div>
              </div>
              <div class="field">
                <div class="text">Масса щебня:</div>
                <div class="info">0.82 м3</div>
              </div>
              <div class="field">
                <div class="text">Масса песка:</div>
                <div class="info">0.42 м3</div>
              </div>
              <div class="field">
                <div class="text">Масса воды:</div>
                <div class="info">0.21 м3 или 215 л</div>
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
              <button class="calculation_blockButton m-40">
                сохранить ФАЙЛ
              </button>
              <button class="calculation_blockButton Orange">
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
    <readme />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import BlockSection from "../newComponents/BlockSection.vue";
import BlockSectionResult from "../newComponents/BlockSectionResult.vue";
import readme from "./readme.vue";
import FormQuetions from '../newComponents/FormQuetions.vue';
import QrCode from '../newComponents/QrCode.vue';

export default defineComponent({
  data() {
    return {
      modal: false,
    };
  },
  components: {
    BlockSection,
    BlockSectionResult,
    HelpBetter,
    readme,
    FormQuetions,
    QrCode
  },
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
        }
        .inp-itog {
          &:first-child {
            margin-left: 0 !important;
          }
        }
      }
    }
  }
</style>