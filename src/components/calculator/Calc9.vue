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
            <select v-model="city">
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
            <select v-model="building">
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
        <div class="field-section field-section-select">
          <div class="field-section__title">Глубина залегания подземных вод, М:</div>
          <div class="field">
            <input type="number" placeholder="Возраст" class="inp"  v-model="depth" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section field-section-select">
          <div class="field-section__title">Грунты под подошвой фундамента:</div>
          <div class="field">
            <select v-model="soils">
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
        <img src="/images/ground_floor_fix.jpg" />
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
            <div class="itog">Российская Федерация</div>
          </div>
          <div class="field mb-20">
            <div class="text">Регион:</div>
            <div class="itog">Московская обл</div>
          </div>
          <div class="field mb-20">
            <div class="text">Город:</div>
            <div class="itog">Москва</div>
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
            <div class="itog">{{depth}}м</div>
          </div>
          <div class="field field-limitation mb-20">
            <div class="text">Грунты под подошвой фундамента:</div>
            <div class="itog">{{soils.text}}</div>
          </div>
        </div>
      </template>
      
      <template v-slot:btnSection>
        <button class="calculation_blockButton Orange mt-10">
          Рассчитать стоимость
        </button>
      </template>

      <template v-slot:information>
        <div class="sec-2 sec-3">
          <div class="title">Глубина заложения фундамента для города Москва</div>
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
                <td>Не менее 0,56</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Не менее 0,5</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Не менее 0,45</td>
              </tr>
              <tr>
                <td>15</td>
                <td>Не менее 0,39</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Не менее 0,34</td>
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
      text="Бесплатный онлайн калькулятор рассчитает глубину промерзания грунта, основываясь на информации, изложенной в строительных нормах и правилах «Строительная климатология». Требуется только корректно указать регион России и город, а также тип сооружения. Результаты вычисления включают нормативную и расчетную глубину промерзания грунта на выбранной территории. Эта информация поможет определить глубину заложения фундамента."
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
      country: '',
      region: '',
      city: '',
      building: {
        text: 'Здание, устраиваемое по грунту, без подвала, с полами',
        value: 1
      },
      depth: 5,
      soils: {
        text: 'Суглинки, глины, а также крупнообломочные грунты с глинистым заполнителем при показателе текучести грунта или заполнителя при IL меньше 0,25',
        value: 1
      },
      options: [
        {
          text: 'Суглинки, глины, а также крупнообломочные грунты с глинистым заполнителем при показателе текучести грунта или заполнителя при IL меньше 0,25',
          value: 1
        },
        {
          text: 'Суглинки, глины, а также крупнообломочные грунты с глинистым заполнителем при показателе текучести грунта или заполнителя при IL >= 0,25',
          value: 2
        },
        {
          text: 'Супеси с показателем текучести при IL меньше 0',
          value: 3
        },
        {
          text: 'Супеси с показателем текучести при IL >= 0',
          value: 4
        },
        {
          text: 'Пески мелкие и пылеватые',
          value: 5
        },
        {
          text: 'Скальные, крупнообломочные с песчаным заполнителем, пески гравелистые, крупные и средней крупности',
          value: 6
        },
      ],
      options2: [
        {
          text: 'Здание, устраиваемое по грунту, без подвала, с полами',
          value: 1
        },
        {
          text: 'Здание, устраиваемое на лагах по грунту, без подвала, с полами',
          value: 2
        },
        {
          text: 'Здание с утепленным цокольным перекрытием, без подвала, с полами',
          value: 3
        },
        {
          text: 'Здание с подвалом или техническим подпольем',
          value: 4
        },
        {
          text: 'Неотапливаемое сооружение',
          value: 5
        },
      ],
      countryOptions: [
        {
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
        }
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
    // "readme": readme,
    // "modal": modal,
    // HelpBetter
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