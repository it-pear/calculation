<template>
  <div class="page-calc-freezing">
    <BlockSection
      title="Расчет"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section field-section-select">
          <div class="field-section__title">Страна:</div>
          <div class="field">
            <select v-model="country">
              <option
                v-for="option in countryOptions"
                :value="option"
                :key="option"
              >
                {{ option.text }}
              </option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
        <div class="field-section field-section-select">
          <div class="field-section__title">Регион:</div>
          <div class="field">
            <select v-model="region">
              <option
                v-for="option in country.region"
                :value="option"
                :key="option"
              >
                {{ option.text }}
              </option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
        <div class="field-section field-section-select">
          <div class="field-section__title">Город:</div>
          <div class="field">
            <select v-model="city" @change="result">
              <option
                v-for="option in region.city"
                :value="option"
                :key="option"
              >
                {{ option.text }}
              </option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
        <div class="field-section field-section-select">
          <div class="field-section__title">Тип сооружения:</div>
          <div class="field">
            <select v-model="building" @change="result">
              <option
                v-for="option in options"
                :value="option"
                :key="option"
              >
                {{ option.text }}
              </option>
            </select>
            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/freezing-image.svg" />
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

    <BlockSectionResult :gorisontalResult="true">
      <template v-slot:head>
        <div class="column column-fields-00100 col-50">
          <div class="title">Общий расчет глубины промерзания грунта</div>
          <div class="field mb-20">
            <div class="text">Страна:</div>
            <div class="itog">{{country.text}}</div>
          </div>
          <div class="field mb-20">
            <div class="text">Регион:</div>
            <div class="itog">{{region.text}}</div>
          </div>
          <div class="field mb-20">
            <div class="text">Город:</div>
            <div class="itog">{{city.text}}</div>
          </div>
          <div class="field mb-20">
            <div class="text">Тип сооружения:</div>
            <div class="itog">{{building.text}}</div>
          </div>
        </div>
      </template>
      
      <template v-slot:btnSection>
        <button class="calculation_blockButton Orange mt-10">
          Рассчитать стоимость
        </button>
      </template>

      <template v-slot:information>
        <div class="sec-1">
          <div class="title">Результат расчетной глубины промерзания для города Москва:</div>
          <table cols="6">
            <thead>
              <tr>
                <th rowspan="2" colspan="1">Вид грунта (который промерзает)</th>
                <th colspan="5"><span class="opacity">Глубина промерзания грунта при суточной температуре воздуха в помещении —</span> df, м</th>
              </tr>
              <tr>
                <th>0⁰C</th>
                <th>5⁰C</th>
                <th>10⁰C</th>
                <th>15⁰C</th>
                <th>20⁰C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Глина и суглинок</td>

                <td class="td-mobile">0⁰C</td>
                <td class="td-mobile">5⁰C</td>
                <td class="td-mobile">10⁰C</td>
                <td class="td-mobile">15⁰C</td>
                <td class="td-mobile">20⁰C</td>

                <td
                  v-for="item in depth[0].ClayLoam"
                  :key="item"
                >
                  {{item.value}}
                </td>
              </tr>

              <tr>
                <td>Супесь, песок пылеватый и мелкий</td>

                <td class="td-mobile">0⁰C</td>
                <td class="td-mobile">5⁰C</td>
                <td class="td-mobile">10⁰C</td>
                <td class="td-mobile">15⁰C</td>
                <td class="td-mobile">20⁰C</td>

                <td
                  v-for="item in depth[0].SandyLoam"
                  :key="item"
                >
                  {{item.value}}
                </td>
              </tr>

              <tr>
                <td>Песок средней крупности, крупной или гравелистый</td>

                <td class="td-mobile">0⁰C</td>
                <td class="td-mobile">5⁰C</td>
                <td class="td-mobile">10⁰C</td>
                <td class="td-mobile">15⁰C</td>
                <td class="td-mobile">20⁰C</td>

                <td
                  v-for="item in depth[0].Sand"
                  :key="item"
                >
                  {{item.value}}
                </td>
              </tr>

              <tr>
                <td>Крупнообломочные грунты</td>
                
                <td class="td-mobile">0⁰C</td>
                <td class="td-mobile">5⁰C</td>
                <td class="td-mobile">10⁰C</td>
                <td class="td-mobile">15⁰C</td>
                <td class="td-mobile">20⁰C</td>

                <td
                  v-for="item in depth[0].CoarseClasticSoils"
                  :key="item"
                >
                  {{item.value}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="sec-2">
          <div class="title">Результат нормативная глубины промерзания для города Москва:</div>
          <table>
            <thead>
              <tr>
                <th>Вид грунта (который промерзает)</th>
                <th><span class="opacity">Промерзания — </span>dn, м</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Глина и суглинок</td>
                <td>{{freezing[0].value}}</td>
              </tr>
              <tr>
                <td>Супесь, песок пылеватый и мелкий</td>
                <td>{{freezing[1].value}}</td>
              </tr>
              <tr>
                <td>Песок средней крупности,  или гравелистый</td>
                <td>{{freezing[2].value}}</td>
              </tr>
              <tr>
                <td>Крупнообломочные грунты</td>
                <td>{{freezing[3].value}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-slot:result>
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
      <template v-slot:resultInfo>
        <div class="result-info">
          <div class="title">
            ВАЖНО! 
          </div>
          <div class="text">
            Если основание опалубкии имеет уклон, или перепады высот, требуется расчет с учетом медианных значений высотных отметок. Для таких расчетов советуем вызвать специалиста нашего завода на объект. Он произведет необходиммый объем измерений и определит требуемый объем наиболее близко к реальному значению!
          </div>
        </div>
        <div class="calculation_blockButtonMiniContainer pl-0 mt-37 mb-visible">
          <button class="calculation_blockButton m-40">
            сохранить ФАЙЛ
          </button>
          <button class="calculation_blockButton Orange">
            Оформить заказ
          </button>
        </div>
      </template>
    </BlockSectionResult>
    <div class="calc_block_result_sidebar gorisontal">
      <FormQuetions :titlePage="titlePage" />
      <QrCode />
    </div>
    <HelpBetter />
    <readme 
      text="Чтобы построенное здание было надежным, долговечным и безопасным, важно правильно рассчитать глубину заложения фундамента. Она зависит от разных факторов, в том числе климата, геологии и гидрологии местности, а также от особенностей возводимого строения. Бесплатный онлайн калькулятор глубины фундамента позволяет рассчитать, на сколько метров необходимо заглублять основание строения, чтобы оно гарантированно выдержало не только само здание, но и воздействие окружающей среды. Калькулятор работает по актуальным строительным нормам и правилам, таким как «Основания зданий и сооружений» и «Строительная климатология». Поэтому результатам расчета можно доверять. В базе калькулятора представлены все субъекты Российской Федерации, а также крупные города в регионах. Итоги расчетов калькулятора глубины заглубления основания основываются на нормативном и расчетном показателях глубины промерзания грунта, уровня залегания грунтовых вод и средней температуры воздуха. Расчеты актуальны для ленточных и монолитных фундаментов одно- и двухэтажных домов, бань, хозяйственных построек, независимо от используемого строительного материала. "
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

import countryData from '../../data/CountryFreezing.js'

export default defineComponent({
  data() {
    return {
      modal: '',
      country: {
        text: 'Российская Федерация',
        value: 1,
        region: [
          {
            text: 'Республика Адыгея',
            value: 1,
            city: [
              {
                text: 'Майкоп',
                value: 1
              },
              {
                text: 'Городок',
                value: 2
              },
            ]
          },
          {
            text: 'Амурская область',
            value: 2,
            city: [
              {
                text: 'Архара',
                value: 1
              },
              {
                text: 'Белогорск',
                value: 2
              },
              {
                text: 'Благовещенск',
                value: 3
              },
              {
                text: 'Бомнак',
                value: 4
              },
            ]
          },
        ]
      },
      region: {
        "text": "Республика Адыгея", 
        "value": 1, 
        "city": [
          {
            "text": "Майкоп",
            "value": 1
          },
          {
            "text": "Городок",
            "value": 2
          }
        ]
      },
      city: {
        text: 'Майкоп',
        value: 1
      },
      options: [],
      data: '',
      depth: '',
      freezing: '',
      building: {
        text: 'Здание, устраиваемое по грунту, без подвала, с полами',
        value: 0
      },
    };
  },
  components: {
    BlockSection,
    BlockSectionResult,
    HelpBetter,
    readme,
    FormQuetions,
    QrCode
    // "readme": readme,
    // "modal": modal,
    // HelpBetter
  },
  methods: {
    result() {
      let buildingData = this.building.value
      let regionData = this.region.value
      let cityData = this.city.value

      this.data[buildingData].filter((item) => {
        if (item.region === regionData && item.city === cityData) {
          this.depth = item.depth
          this.freezing = item.freezing
        }
      })
    }
  },
  created() {
    this.countryOptions = countryData.countryOptions
    this.options = countryData.options
    this.data = countryData.optionsDepthFreezing
    this.result()
  }
});
</script>

<style lang="scss">
  .page-calc-freezing {
    .help-better {
      margin-top: 63px;
    }
    .calc_readme {
      margin-top: 63px;
    }
  }
</style> 