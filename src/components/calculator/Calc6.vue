<template>
  <BlockSection
    title="Размеры"
    titlePage="БЕТОН ДЛЯ ПЛИТ"
    tip="sdfsfsdfsdfsdfs"
  >
    <template v-slot:inputFields>
      <div class="fields">
        <div class="field-section">
          <div class="field-section__title">Периметр дома, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Периметр" class="inp">
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Ширина отмостки, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Ширина" class="inp">
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Внешние углы A, <b>ШТ:</b></div>
          <div class="field">
            <input type="number" placeholder="Углы" class="inp">
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Внутренние углы a, <b>ШТ:</b></div>
          <div class="field">
            <input type="number" placeholder="Углы" class="inp">
            <span class="meas">м</span>
          </div>
        </div>
      </div>
      
    </template>
  </BlockSection>
</template>

<script>
import {defineComponent} from 'vue'
import HelpBetter from "../newComponents/HelpBetter.vue";
import BlockSection from "../newComponents/BlockSection.vue";
import readme from "./readme.vue";
import modal from "./modal.vue";

export default defineComponent({
  data() {
    return {
      modal: false
    }
  },
  components: {
    BlockSection
    // "readme": readme,
    // "modal": modal,
    // HelpBetter
  }
})
</script>

<style lang="scss">

</style>