<template>
  <BlockSection
    title="Размеры"
    titlePage="БЕТОН ДЛЯ ПЛИТ"
    tip="sdfsfsdfsdfsdfs"
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
    tip="sdfsfsdfsdfsdfs"
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
    tip="sdfsfsdfsdfsdfs"
  >
    <template v-slot:inputFields>
      <div class="field-section">
        <div class="field-section__title">Геотекстиль:</div>
        <div class="field">
          <label class="custom-checkbox">
            <input type="checkbox" value="value-1" />
            <span></span>
          </label>
        </div>
      </div>
      <div class="field-section">
        <div class="field-section__title">Арматурная сетка:</div>
        <div class="field">
          <label class="custom-checkbox">
            <input type="checkbox" value="value-1" />
            <span></span>
          </label>
        </div>
      </div>
      <div class="field-section">
        <div class="field-section__title">Бордюр</div>
        <div class="field">
          <label class="custom-checkbox">
            <input type="checkbox" value="value-1" />
            <span></span>
          </label>
        </div>
      </div>
      <div class="field-section">
        <div class="field-section__title">Опалубка</div>
        <div class="field">
          <label class="custom-checkbox">
            <input type="checkbox" value="value-1" />
            <span></span>
          </label>
        </div>
      </div>
      <div class="field-section">
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
</template>

<script>
import { defineComponent } from "vue";
import HelpBetter from "../newComponents/HelpBetter.vue";
import BlockSection from "../newComponents/BlockSection.vue";
import readme from "./readme.vue";
import modal from "./modal.vue";

export default defineComponent({
  data() {
    return {
      modal: false,
    };
  },
  components: {
    BlockSection,
    // "readme": readme,
    // "modal": modal,
    // HelpBetter
  },
});
</script>

<style lang="scss">
</style>