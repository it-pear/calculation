<template>
  <Nav
    :title="16"
    :pages="this.pages"
    :change-page="changePage"
    :current-page="currentPage"
    v-if="true"
  />
  <Plate :pages="titleCalc" :currentPage="currentPage" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TPages } from "@/components/calculator/types";
import Nav from "./components/calculator/Nav.vue";
import Plate from "./components/calculator/CalcWrapper.vue";
import { ref } from "vue";

const currentPage = ref(0);
const changePage = (page: number) => {
  currentPage.value = page;
};
const Pages: TPages[] = [
  {
    name: "Объем плиты",
    title: "Калькулятор бетона для монолитной плиты",
    titleMobile: 'Бетон для плиты',
    index: 0,
  },
  {
    name: "Объем ленты",
    title: "Калькулятор бетона для ленточного фундамента",
    titleMobile: 'Бетон для ленты',
    index: 1,
  },
  { 
    name: "Объем УШП", 
    title: "Калькулятор бетона для УШП", 
    titleMobile: 'Бетон для УШП',
    index: 2 
  },
  {
    name: "Объем ростверка",
    title: "Калькулятор бетона для Свайно-ростверкового фундамента",
    titleMobile: 'Бетон для ростверка',
    index: 3,
  },
  { 
    name: "Объем свай", 
    title: "объем свай", 
    titleMobile: 'Объем свай',
    index: 4 
  },
  { 
    name: "калькулятор отмостки", 
    title: "калькулятор Отмостки ", 
    titleMobile: 'калькулятор отмостки',
    index:  5
  },
  { 
    name: "рассчет твердения бетона", 
    title: "калькулятор твердения бетона", 
    titleMobile: 'Расчет твердения',
    index:  6
  },
  { 
    name: "Расчет глубины промерзания грунта", 
    title: "расчет глубины промерзания грунта", 
    titleMobile: 'Расчет промерзания',
    index:  7
  },
  { 
    name: "глубина заложения фундамента", 
    title: "Расчёт глубины заложения фундамента", 
    titleMobile: 'Глубина заложения',
    index:  8
  },
  { 
    name: "Расчет материалов для изготовления бетона", 
    title: "расчет материалов для изготовления бетона", 
    titleMobile: 'Расчет изготовления',
    index:  9
  },
 
  // {name: "", index: -1},
];

export default defineComponent({
  data() {
    return {
      currentPage: currentPage,
      pages: Pages,
    };
  },
  components: {
    Nav: Nav,
    Plate: Plate,
  },
  computed: {
    titleCalc() {
      return this.pages[currentPage.value];
    },
  },
  methods: {
    changePage,
  },
});
</script>

<style lang="scss">
  @media (min-width: 960px) {
    .calc_title {
      margin-top: 13px !important;
    }
  }
</style>
