<template>
  <BlockSection
    title="Размеры"
    titlePage="БЕТОН ДЛЯ ПЛИТ"
    tip="sdfsfsdfsdfsdfs"
  >

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