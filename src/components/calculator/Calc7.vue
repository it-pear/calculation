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
            <div class="info">{{result}}</div>
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
      coeffInfo: [
        {
          procent: 15,
          coeff: 9
        },
        {
          procent: 15,
          coeff: 8.7
        },
        {
          procent: 15.4,
          coeff: 9
        },
        {
          procent: 16,
          coeff: 9.2
        },
        {
          procent: 16.6,
          coeff: 9.5
        },
        {
          procent: 17,
          coeff: 9.8
        },
        {
          procent: 17,
          coeff: 10
        },
        {
          procent: 18,
          coeff: 10.2
        },
        {
          procent: 18,
          coeff: 10.5
        },
        {
          procent: 18.7,
          coeff: 10.7
        },
        {
          procent: 19,
          coeff: 11
        },
        {
          procent: 19,
          coeff: 11.2
        },
        {
          procent: 19.3,
          coeff: 11.3
        },
        {
          procent: 20,
          coeff: 11.4
        },
        {
          procent: 20,
          coeff: 11.5
        },
        {
          procent: 20,
          coeff: 11.5
        },
        { // 15
          procent: 20,
          coeff: 11.5
        },
        {
          procent: 20.5,
          coeff: 11.7
        },
        { // 17
          procent: 21,
          coeff: 11.8
        },
        {
          procent: 21,
          coeff: 11.9
        },
        {
          procent: 22,
          coeff: 12
        },
        {
          procent: 23,
          coeff: 12.8
        },
        {
          procent: 24,
          coeff: 12.8
        },
        { // 22
          procent: 25,
          coeff: 13.4
        },
        {
          procent: 26,
          coeff: 14
        },
        {
          procent: 27,
          coeff: 14.6
        },
        {
          procent: 28,
          coeff: 15.2
        },
        {
          procent: 29,
          coeff: 15.9
        },
        { // 27
          procent: 30,
          coeff: 16.4
        },
        {
          procent: 31,
          coeff: 17.1
        },
        {
          procent: 32,
          coeff: 17.6
        },
        {
          procent: 32,
          coeff: 18.3
        },
        {
          procent: 33,
          coeff: 18.6
        },
        { // 32
          procent: 34,
          coeff: 18.9
        },
        {
          procent: 34,
          coeff: 19.3
        },
        {
          procent: 35,
          coeff: 19.7
        },
        {
          procent: 36,
          coeff: 20.1
        },
        {
          procent: 36,
          coeff: 20.5
        },
        {
          procent: 37,
          coeff: 20.5
        },
        { // 37
          procent: 37,
          coeff: 20.8
        },
        {
          procent: 38,
          coeff: 21.2
        },
        {
          procent: 39,
          coeff: 21.6
        },
        { // 40
          procent: 39,
          coeff: 21.9
        },
        {
          procent: 40,
          coeff: 22.2
        },
        {
          procent: 41,
          coeff: 22.6
        },
        {
          procent: 41,
          coeff: 23
        },
        { // 44
          procent: 42,
          coeff: 23.4
        },
        { // 45
          procent: 42,
          coeff: 23.7
        },
        {
          procent: 43,
          coeff: 24.1
        },
        {
          procent: 44,
          coeff: 24.5
        },
        {
          procent: 45,
          coeff: 24.9
        },
        {
          procent: 45,
          coeff: 25.1
        },
        {
          procent: 46,
          coeff: 25.5
        },
        {
          procent: 47,
          coeff: 26.1
        },
        {
          procent: 48,
          coeff: 26.6
        },
        {
          procent: 49,
          coeff: 27
        },
        {
          procent: 50,
          coeff: 27.5
        },
        {
          procent: 50,
          coeff: 28
        },
        { // 56
          procent: 51,
          coeff: 28.4
        },
        {
          procent: 52,
          coeff: 29
        },
        {
          procent: 53,
          coeff: 28
        },
        {
          procent: 54,
          coeff: 29.9
        },
        {
          procent: 54,
          coeff: 30.4
        },
        { // 61
          procent: 55,
          coeff: 30.9
        },
        {
          procent: 56,
          coeff: 31.4
        },
        {
          procent: 57,
          coeff: 31.9
        },
        {
          procent: 58,
          coeff: 33.4
        },
        {
          procent: 59,
          coeff: 34.8
        },
        {
          procent: 59.5,
          coeff: 35.3
        },
        {
          procent: 60,
          coeff: 35.3
        },
        {
          procent: 61,
          coeff: 37.3
        },
      ]
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
      if (this.time < 0 || this.temp > 70 || this.temp < 0) {
        return 'null'
      } else if (this.time === 1) {
        return this.coeffInfo[this.temp].procent
      } else if (this.time === 2) { 
        return this.coeffInfo[this.temp].procent + this.coeffInfo[this.temp].coeff
      } else {
        let i = this.coeffInfo[this.temp].procent - this.coeffInfo[this.temp].coeff
        let arr = []
        while (i <= 150) {
          let result = i / 100 * 33.333
          i += this.coeffInfo[this.temp].procent + result
          arr.push(i)
        }
        return console.log(arr)
      }
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