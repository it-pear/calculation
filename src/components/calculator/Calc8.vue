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
            <select v-model="country" ref="countrySelect" disabled>
              <option
                v-for="option in countryOptions"
                :value="option"
                :key="option"
              >
                {{ option.text }}
              </option>
            </select>
            <!-- <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span> -->
          </div>
        </div>
        <div class="field-section field-section-select">
          <div class="field-section__title">Регион:</div>
          <div class="field field-search">
            <input 
              v-model="inputValue"
              @input="filterOptions"
              @focus="showAllOptions"
              @blur="updateRegion"
              placeholder="Выберите регион"
              class="inp"
            >
            <ul v-if="filteredOptions.length">
              <li 
                v-for="option in filteredOptions" 
                :key="option.text"
                @click="selectOption(option)"
              >
                {{ option.text }}
              </li>
            </ul>

            <span class="meas">
              <img src="/images/arrow-select.svg" alt="">
            </span>
          </div>
        </div>
        <div class="field-section field-section-select">
          <div class="field-section__title">Город:</div>
          <div class="field field-search">
            <input 
              v-model="inputCityValue"
              @input="filterCities"
              @focus="showAllCities"
              @blur="updateCity"
              class="inp"
              placeholder="Выберите город"
            >
            <ul v-if="filteredCities.length">
              <li 
                v-for="city in filteredCities" 
                :key="city.text"
                @click="selectCity(city)"
              >
                {{ city.text }}
              </li>
            </ul>
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
      <div class="zagolovok">Результат</div>
    </div>

    <BlockSectionResult :gorisontalResult="true" @saveFile="saveFile" @modalActive="modalActive">
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
        <!-- <button class="calculation_blockButton Orange mt-10">
          Рассчитать стоимость
        </button> -->
      </template>

      <template v-slot:information>
        <div class="sec-1">
          <div class="title">Результат расчетной глубины промерзания для города {{city.text}}:</div>
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
          <div class="title">Результат нормативная глубины промерзания для города {{city.text}}:</div>
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
            <button class="calculation_blockButton m-40" @click="saveFile()">
              скачать результаты
            </button>
            <button class="calculation_blockButton Orange" @click="modalActive()">
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
          <button class="calculation_blockButton m-40" @click="saveFile()">
            скачать результаты
          </button>
          <button class="calculation_blockButton Orange" @click="modalActive()">
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
      title="Онлайн калькулятор расчета глубины промерзания грунта"
      text="Бесплатный онлайн калькулятор рассчитает глубину промерзания грунта, основываясь на информации, изложенной в строительных нормах и правилах «Строительная климатология». Требуется только корректно указать регион России и город, а также тип сооружения. Результаты вычисления включают нормативную и расчетную глубину промерзания грунта на выбранной территории. Эта информация поможет определить глубину заложения фундамента."
    />
    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      titlePage="РАСЧЕТ ГЛУБИНЫ ПРОМЕРЗАНИЯ ГРУНТА"
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
import modal from "./modal.vue";
import axios from 'axios'

import countryData from '../../data/CountryFreezing.js'

export default defineComponent({
  data() {
    return {
      country: '',
      region: [],
      modal: false,
      city: {
        text: 'Майкоп',
        value: 1
      },
      options: [],
      data: '',
      depth: '',
      freezing: '',
      building: '',
      inputValue: '',
      filteredOptions: [],
      inputCityValue: '',
      filteredCities: [],
    };
  },

  components: {
    BlockSection,
    BlockSectionResult,
    HelpBetter,
    readme,
    FormQuetions,
    QrCode,
    modal
    // "readme": readme,
    // "modal": modal,
    // HelpBetter
  },
  methods: {
    showAllOptions() {
      this.filteredOptions = this.country.region;
    },
    filterOptions() {
      if (!this.inputValue) {
        this.showAllOptions();
        return;
      }
      this.filteredOptions = this.country.region.filter(option =>
        option.text.toLowerCase().includes(this.inputValue.toLowerCase())
      );
    },
    selectOption(option) {
      this.inputValue = option.text;
      this.region = option;
      this.filteredOptions = [];
      this.city = ''
      this.inputCityValue = ''
    },
    updateRegion() {
      setTimeout(() => {
        this.filteredOptions = [];
      }, 150);
    },

    showAllCities() {
      this.filteredCities = this.region.city;
    },
    filterCities() {
      if (!this.inputCityValue) {
        this.showAllCities();
        return;
      }
      this.filteredCities = this.region.city.filter(city =>
        city.text.toLowerCase().includes(this.inputCityValue.toLowerCase())
      );
    },
    selectCity(city) {
      this.inputCityValue = city.text;
      this.city = city;
      this.filteredCities = [];
      this.result();
    },
    updateCity() {
      setTimeout(() => {
        this.filteredCities = [];
      }, 150);
    },

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
    },
    modalDisable() {
      this.modal = false
    },
    modalActive() {
      this.modal = true
    },
    saveFile() {
      let state = {
        head1: `Расчетная глубина промерзания для города ${this.city.text} Глина и суглинок 0⁰C: `,
        head2: `Расчетная глубина промерзания для города ${this.city.text} Супесь, песок пылеватый и мелкий 0⁰C: `,
        head3: `Расчетная глубина промерзания для города ${this.city.text} Песок средней крупности, крупной или гравелистый 0⁰C: `,
        head4: `Расчетная глубина промерзания для города ${this.city.text} Крупнообломочные грунты 0⁰C: `,

        head5: `Расчетная глубина промерзания для города ${this.city.text} Глина и суглинок 5⁰C: `,
        head6: `Расчетная глубина промерзания для города ${this.city.text} Супесь, песок пылеватый и мелкий 5⁰C: `,
        head7: `Расчетная глубина промерзания для города ${this.city.text} Песок средней крупности, крупной или гравелистый 5⁰C: `,
        head8: `Расчетная глубина промерзания для города ${this.city.text} Крупнообломочные грунты 5⁰C: `,
        
        head9: `Расчетная глубина промерзания для города ${this.city.text} Глина и суглинок 10⁰C: `,
        head10: `Расчетная глубина промерзания для города ${this.city.text} Супесь, песок пылеватый и мелкий 10⁰C: `,
        head11: `Расчетная глубина промерзания для города ${this.city.text} Песок средней крупности, крупной или гравелистый 10⁰C: `,
        head12: `Расчетная глубина промерзания для города ${this.city.text} Крупнообломочные грунты 10⁰C: `,
        
        head13: `Расчетная глубина промерзания для города ${this.city.text} Глина и суглинок 15⁰C: `,
        head14: `Расчетная глубина промерзания для города ${this.city.text} Супесь, песок пылеватый и мелкий 15⁰C: `,
        head15: `Расчетная глубина промерзания для города ${this.city.text} Песок средней крупности, крупной или гравелистый 15⁰C: `,
        head16: `Расчетная глубина промерзания для города ${this.city.text} Крупнообломочные грунты 15⁰C: `,
        
        head17: `Расчетная глубина промерзания для города ${this.city.text} Глина и суглинок 20⁰C: `,
        head18: `Расчетная глубина промерзания для города ${this.city.text} Супесь, песок пылеватый и мелкий 20⁰C: `,
        head19: `Расчетная глубина промерзания для города ${this.city.text} Песок средней крупности, крупной или гравелистый 20⁰C: `,
        head20: `Расчетная глубина промерзания для города ${this.city.text} Крупнообломочные грунты 20⁰C: `,
        
        title1: this.depth[0].ClayLoam[0].value,
        title2: this.depth[0].SandyLoam[0].value,
        title3: this.depth[0].ClayLoam[0].value,
        title4: this.depth[0].CoarseClasticSoils[0].value,

        title5: this.depth[0].ClayLoam[1].value,
        title6: this.depth[0].SandyLoam[1].value,
        title7: this.depth[0].ClayLoam[1].value,
        title8: this.depth[0].CoarseClasticSoils[1].value,

        title9: this.depth[0].ClayLoam[2].value,
        title10: this.depth[0].SandyLoam[2].value,
        title11: this.depth[0].ClayLoam[2].value,
        title12: this.depth[0].CoarseClasticSoils[2].value,

        title13: this.depth[0].ClayLoam[3].value,
        title14: this.depth[0].SandyLoam[3].value,
        title15: this.depth[0].ClayLoam[3].value,
        title16: this.depth[0].CoarseClasticSoils[3].value,

        title17: this.depth[0].ClayLoam[4].value,
        title18: this.depth[0].SandyLoam[4].value,
        title19: this.depth[0].ClayLoam[4].value,
        title20: this.depth[0].CoarseClasticSoils[4].value,
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
  created() {
    this.countryOptions = countryData.countryOptions
    this.country = countryData.countryOptions[0]
    this.region = countryData.countryOptions[0].region[1]
    this.city = countryData.countryOptions[0].region[1].city[2]
    this.building = countryData.options[0]

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