<template>
  <div class="page-calc-hardening">
    <BlockSection
      title="Характеристика"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section">
          <div class="field-section__title">Возраст бетона, дней:</div>
          <div class="field">
            <input type="number" placeholder="Возраст" v-model="time" class="inp" />
            <span class="meas">дн</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Температура, градусов:</div>
          <div class="field">
            <input type="number" placeholder="Температура" v-model="temp" class="inp" />
            <span class="meas">гр</span>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Твердение бетона:</div>
          <div class="inp-itog">{{time}} дн</div>
          <div class="inp-itog">{{temp}} гр</div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/old-beton.jpg" />
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
      <BlockSectionResult>
        <template v-slot:head>
          <div class="column col-50">
            <div class="title">Общая  характеристика твердения бетона</div>
            <div class="field mb-20">
              <div class="text">Возраст бетона:</div>
              <div class="itog">{{time}} дн</div>
            </div>
            <div class="field mb-20">
              <div class="text">Температура бетона:</div>
              <div class="itog">{{temp}} гр</div>
            </div>
          </div>
        </template>

        <template v-slot:btnSection>
          <button class="calculation_blockButton Orange mt-10">
            Рассчитать стоимость
          </button>
        </template>
        <template v-slot:result>
          <div class="field">
            <div class="text">По прошествию {{time}} дней, при температуре {{temp}} градусов, процент прочности бетона будет равен:</div>
            <div class="info mt-10">81%</div>
          </div>
          <div class="field-total">
            <div class="text">Стоимость твердения бетона:</div>
            <div class="info">0 руб.</div>
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
            <div class="calculation_blockButtonMiniContainer pl-0 mt-37">
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
    <readme
      text="Процесс, при котором бетонный раствор набирает прочность, называется твердением. Он продолжается с заливки смеси и до полного ее затвердевания. 28 дней - это тот период, за который бетонный раствор становится монолитом. Однако на срок набора прочности влияет температура, в зависимости от показателя столбика термометра продолжительность твердения может уменьшаться или увеличиваться. Так, если температура окружающей среды падает ниже +5 градусов, то процесс гидратации значительно замедляется, а при температуре ниже 0 - прекращается. При высокой температуре скорость твердения наоборот увеличивается. Бесплатный онлайн калькулятор скорости застывания бетона подскажет вам, сколько времени понадобится конструкции для набора прочности при текущей среднесуточной температуре. "
    />
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
      time: 5,
      temp: 30,
      coeff: {
        1: 15,
        2: 15,
        3: 15.4,
        4: 16,
        5: 16.6,
        6: 17,
        7: 17,
        8: 18,
        9: 18,
        10: 18.7,
        11: 19,
        12: 19,
        13: 19.3,
        14: 20,
        15: 20,
        16: 20,
        17: 20,
        18: 20.5,
        19: 21,
        20: 21,
        21: 22,
        22: 23,
        23: 24,
        24: 25,
        25: 26,
        26: 27,
        27: 28,
        28: 29,
        29: 30,
        30: 31,
        31: 32,
        32: 32,
        33: 33,
        34: 34,
        35: 34,
        36: 35,
        37: 36,
        38: 36,
        39: 37,
        40: 37,
        41: 38,
        42: 39,
        43: 39,
        44: 40,
        45: 41,
        46: 41,
        47: 42,
        48: 42,
        49: 43,
        50: 44,
        51: 45,
        52: 45,
        53: 46,
        54: 47,
        55: 48,
        56: 49,
        57: 50,
        58: 50,
        59: 51,
        60: 52,
        61: 53,
        62: 54,
        63: 54,
        64: 55,
        65: 56,
        66: 57,
        67: 58,
        68: 59,
        69: 59.5,
        70: 60,
      }
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
  computed: {
    result() {
      if (this.time < 0 || this.temp > 70) {
        return 'Невозможно произвести расчет, данные неправильные'
      } else {
        return this.time 
      }
      // return 'asdasd'
    },
  }
});
</script>

<style lang="scss">
  .page-calc-hardening {
    .help-better {
      margin-top: 63px;
    }
    .block-section-result .information {
      display: none;
    }
    .calc_readme {
      margin-top: 63px;
    }
    .block-section-result .result .total .field-total {
      @media (min-width: 772px) {
        margin-top: 96px;
      }
    }
  }
</style>