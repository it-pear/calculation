<template>
  <div class="page-calc-depth">
    <BlockSection
      title="Расчет"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section field-section-select">
          <div class="field-section__title">Страна:</div>
          <div class="field">
            <select v-model="country" disabled>
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
              class="inp"
              placeholder="Выберите регион"
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
        <div class="field-section field-section-select">
          <div class="field-section__title">Глубина залегания подземных вод, М:</div>
          <div class="field">
            <input type="number" placeholder="Возраст" class="inp" v-model="depthInp" @change="result" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section field-section-select">
          <div class="field-section__title">Грунты под подошвой фундамента:</div>
          <div class="field">
            <select v-model="soils" @change="result">
              <option
                v-for="option in options2"
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
        <a 
          href="#result" 
          class="calc_blockButtonContainer w-100 mb-0 lg-none"
          v-if="inputCityValue"
        >
          <div class="calc_blockButton Orange w-100 mr-0" style="color: white;">Результаты</div>
        </a>
      </template>

      <template v-slot:image>
        <img src="/images/ground_floor_fix.jpg" />
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
        <div class="column column-fields-00100 col-50">
          <div class="title"><span style="visibility: hidden;">a</span></div>
          <div class="field mb-20">
            <div class="text">Глубина залегания подземных вод:</div>
            <div class="itog">{{depthInp}}м</div>
          </div>
          <div class="field field-limitation mb-20">
            <div class="text">Грунты под подошвой фундамента:</div>
            <div class="itog">{{soils.text}}</div>
          </div>
        </div>
      </template>
      
      <template v-slot:btnSection>
        <!-- <button class="calculation_blockButton Orange mt-10">
          Рассчитать стоимость
        </button> -->
      </template>

      <template v-slot:information>
        <div class="sec-2 sec-3" id="result">
          <div class="title">Глубина заложения фундамента для города {{city.text}}</div>
          <table>
            <thead>
              <tr>
                <th>Среднесуточная температура воздуха в помещении, ⁰C</th>
                <th><span class="opacity">Глубина заложения — </span>dn, м</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td v-if="noneData">
                  <span>Не зависит от df</span> 
                </td>
                <td v-else-if="depthInpActive">
                  <span v-show="noneData">Не менее</span> 
                  {{this.depthTable[0].value / 2}}
                </td>
                <td v-else>
                  <span v-show="!noneData">Не менее</span>
                  {{this.depthTable[0].value}}
                </td>
              </tr>
              
              <tr>
                <td>5</td>
                <td v-if="noneData">
                  <span>Не зависит от df</span> 
                </td>
                <td v-else-if="depthInpActive">
                  <span v-show="noneData">Не менее</span>
                  {{this.depthTable[1].value / 2}}
                </td>
                <td v-else>
                  <span v-show="!noneData">Не менее</span>
                  {{this.depthTable[1].value}}
                </td>
              </tr>

              <tr>
                <td>10</td>
                <td v-if="noneData">
                  <span>Не зависит от df</span> 
                </td>
                <td v-else-if="depthInpActive">
                  <span v-show="noneData">Не менее</span> 
                  {{this.depthTable[2].value / 2}}
                </td>
                <td v-else>
                  <span v-show="!noneData">Не менее</span> 
                  {{this.depthTable[2].value}}
                </td>
              </tr>

              <tr>
                <td>15</td>
                <td v-if="noneData">
                  <span>Не зависит от df</span> 
                </td>
                <td v-else-if="depthInpActive">
                  <span v-show="noneData">Не менее</span> 
                  {{this.depthTable[3].value / 2}}
                </td>
                <td v-else>
                  <span v-show="!noneData">Не менее</span> 
                  {{this.depthTable[3].value}}
                </td>
              </tr>

              <tr>
                <td>20</td>
                <td v-if="noneData">
                  <span>Не зависит от df</span> 
                </td>
                <td v-else-if="depthInpActive">
                  <span v-show="noneData">Не менее</span> 
                  {{this.depthTable[4].value / 2}}
                </td>
                <td v-else>
                  <span v-show="!noneData">Не менее</span> 
                  {{this.depthTable[4].value}}
                </td>
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
      title="Онлайн калькулятор расчета глубины заложения фундамента"
      text="Чтобы построенное здание было надежным, долговечным и безопасным, важно правильно рассчитать глубину заложения фундамента. Она зависит от разных факторов, в том числе климата, геологии и гидрологии местности, а также от особенностей возводимого строения. Бесплатный онлайн калькулятор глубины фундамента позволяет рассчитать, на сколько метров необходимо заглублять основание строения, чтобы оно гарантированно выдержало не только само здание, но и воздействие окружающей среды. Калькулятор работает по актуальным строительным нормам и правилам, таким как «Основания зданий и сооружений» и «Строительная климатология». Поэтому результатам расчета можно доверять. В базе калькулятора представлены все субъекты Российской Федерации, а также крупные города в регионах. Итоги расчетов калькулятора глубины заглубления основания основываются на нормативном и расчетном показателях глубины промерзания грунта, уровня залегания грунтовых вод и средней температуры воздуха. Расчеты актуальны для ленточных и монолитных фундаментов одно- и двухэтажных домов, бань, хозяйственных построек, независимо от используемого строительного материала."
    />
    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      titlePage="РАСЧЁТ ГЛУБИНЫ ЗАЛОЖЕНИЯ ФУНДАМЕНТА"
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
      modal: false,
      country: '',
      region: '',
      city: '',
      building: '',
      depthInp: 1,
      depthInpActive: false,
      noneData: false,
      depth: '',
      countryOptions: [],
      soils: '',
      data: '',
      depthTable: '', 
      options: [],
      options2: [],
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

      let val = this.soils.value
      let val2 = this.depthInp

      if (val === 0) this.depthTable = this.depth[0].ClayLoam
      if (val === 1) this.depthTable = this.depth[0].ClayLoam
      if (val === 2) this.depthTable = this.depth[0].CoarseClasticSoils
      if (val === 3) this.depthTable = this.depth[0].CoarseClasticSoils
      if (val === 4) this.depthTable = this.depth[0].CoarseClasticSoils
      if (val === 5) this.depthTable = this.depth[0].CoarseClasticSoils

      if (val2 > 2 && val === 0) {
        this.depthInpActive = true
      } else {
        this.depthInpActive = false
      }

      if (val2 > 2 && val === 2) {
        this.noneData = true
      }
      if (val2 < 3 && val === 2) {
        this.noneData = false
      }

      if (val2 > 3 && val === 4) {
        this.noneData = true
      } else {
        this.noneData = false
      }

      if (val === 5) {
        this.noneData = true
      } else {
        this.noneData = false
      }

    },
    modalDisable() {
      this.modal = false
    },
    modalActive() {
      this.modal = true
    },
    saveFile() {
      let state = {
        head1: `Глубина заложения фундамента для города ${this.city.text} 0⁰C: ${this.noneData ? 'Не зависит от df' : ''} `,
        head2: `Глубина заложения фундамента для города ${this.city.text} 5⁰C: ${this.noneData ? 'Не зависит от df' : ''} `,
        head3: `Глубина заложения фундамента для города ${this.city.text} 10⁰C: ${this.noneData ? 'Не зависит от df' : ''} `,
        head4: `Глубина заложения фундамента для города ${this.city.text} 15⁰C: ${this.noneData ? 'Не зависит от df' : ''} `,
        head5: `Глубина заложения фундамента для города ${this.city.text} 20⁰C: ${this.noneData ? 'Не зависит от df' : ''} `,
        
        title1: this.depthInpActive ? this.depthTable[0].value / 2 : this.depthTable[0].value,
        title2: this.depthInpActive ? this.depthTable[1].value / 2 : this.depthTable[1].value,
        title3: this.depthInpActive ? this.depthTable[2].value / 2 : this.depthTable[2].value,
        title4: this.depthInpActive ? this.depthTable[3].value / 2 : this.depthTable[3].value,
        title5: this.depthInpActive ? this.depthTable[4].value / 2 : this.depthTable[4].value,

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
    this.soils = countryData.options2[0]

    this.options = countryData.options
    this.options2 = countryData.options2
    this.data = countryData.optionsDepthFreezing
    this.result()
  }
});
</script>

<style lang="scss">
  .page-calc-depth {
    .help-better {
      margin-top: 63px;
    }
    .calc_readme {
      margin-top: 63px;
    }
    .block-section-result {
      .result-gorisontal {
        @media (min-width: 772px) {
          margin-top: 0;
          .result-info {
            display: none;
          }
        }
      }
    }
    @media (max-width: 772px) {
      .block-section-result {
          .head .column.col-50 {
          &:last-child {
            padding-top: 0;
            .title {
              display: none;
            }
          }
        }
        .information {
          padding-top: 0;
        }
      }
    }
    
  }
</style> 