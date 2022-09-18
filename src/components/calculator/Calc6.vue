<template>
  <div class="page-calc-materials">
    <BlockSection
      title="Размеры"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section">
          <div class="field-section__title">Периметр дома, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Периметр" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Ширина отмостки, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Ширина" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Внешние углы A, <b>ШТ:</b></div>
          <div class="field">
            <input type="number" placeholder="Углы" class="inp" />
            <span class="meas">шт</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Внутренние углы a, <b>ШТ:</b></div>
          <div class="field">
            <input type="number" placeholder="Углы" class="inp" />
            <span class="meas">шт</span>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Размер отмостки:</div>
          <div class="inp-itog">0 м<sup>3</sup></div>
          <div class="inp-itog">0 шт</div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/house.jpg" />
      </template>
    </BlockSection>

    <BlockSection
      title="Материалы"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section">
          <div class="field-section__title">Брусчатка P, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Брусчатка" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Бетон B, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Бетон" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Утеплитель U, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Утеплитель" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Щебень G, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Щебень" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Песок S, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Песок" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Общий размер материалов:</div>
          <div class="inp-itog">0 м<sup>3</sup></div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/material.jpg" />
      </template>
    </BlockSection>

    <BlockSection
      title="Материалы"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Геотекстиль:</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" value="value-1" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Арматурная сетка:</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" value="value-1" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Бордюр</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" value="value-1" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Опалубка</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" value="value-1" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Гидроизоляция</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" value="value-1" />
              <span></span>
            </label>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Общий размер материалов:</div>
          <div class="inp-itog">0 м<sup>3</sup></div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/raschet.jpg" />
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

    <BlockSectionResult>
      <template v-slot:head>
        <div class="column col-4">
          <div class="title">Общий  рассчет отмостки</div>
          <div class="field mb-20">
            <div class="text">Общий размер отмостки:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text">Общее количество углов:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Периметр дома:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Ширина отмостки:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Внешние углы А:</div>
            <div class="itog">0 шт</div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Внешние углы а:</div>
            <div class="itog">0 шт</div>
          </div>
        </div>

        <div class="column col-4">
          <div class="title">Общий  рассчет отмостки</div>
          <div class="field mb-20">
            <div class="text">Общий рассчет материалов:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем брусчатки Р:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем бетона В:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем утеплителя U:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем щебеня G:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем песка S:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
        </div>

        <div class="column col-4">
          <div class="title">Общий размер материалов:</div>
          <div class="field mb-20">
            <div class="text">Общий рассчет материалов:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем брусчатки Р:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем бетона В:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем утеплителя U:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем щебеня G:</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем песка S:</div>
            <div class="itog">0 м<sup>3</sup></div>
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
          <div class="text">Размер отмостки:</div>
          <div class="info mt-10">0 м<sup>3</sup></div>
        </div>
        <div class="field">
          <div class="text">Количество углов:</div>
          <div class="info">0 шт</div>
        </div>
        <div class="field">
          <div class="text">Рассчет материалов:</div>
          <div class="info mt-10">0 м<sup>3</sup></div>
        </div>
        <div class="field">
          <div class="text">Рассчет материалов:</div>
          <div class="info mt-10">0 м<sup>3</sup></div>
        </div>
        <div class="field-total">
          <div class="text">Размер отмостки:</div>
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
    <div class="calc_block_result_sidebar gorisontal">
      <FormQuetions :titlePage="titlePage" />
      <QrCode />
    </div>
    <HelpBetter />
    <readme
      text="Бесплатный онлайн калькулятор поможет рассчитать отмостку вокруг вашего дома. С его помощью вы узнаете точное количество материалов, которые понадобятся для строительства. Все результаты расчетов можно скачать на ваш компьютер или смартфон. Калькулятор отмостки вычислит, какой объем материалов понадобится для строительства сложной прямоугольной конструкции, учитывая внутренние и внешние углы по периметру. Также в результатах вычислений вы увидите, сколько потребуется брусчатки, утеплителя, гидроизоляционного материала, геотекстиля, опалубки, бордюра, арматурной сетки, щебня, песка и бетона. Показатели рассчитываются, исходя из периметра, площади и объема. Обратите внимание на рекомендуемые размеры отмостки - ее ширина должна составлять от 80 до 120 см, а на участках со сложными геологическими условиями, как карсты - от 150 до 300 см."
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
});
</script>

<style lang="scss">
  .page-calc-materials {
    .block-section-result .information {
      display: none;
    }
    .help-better {
      margin-top: 63px;
    }
    .calc_readme {
      margin-top: 63px;
    }
  }
</style>