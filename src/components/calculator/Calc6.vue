<template>
  <div class="page-calc-materials">
    <BlockSection
      title="Размеры"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <!-- <div class="field-section">
          <div class="field-section__title">Периметр дома, <b>М:</b></div>
          <div class="field">
            <input
              type="number"
              placeholder="Периметр"
              class="inp"
              v-model="perimeter"
            />
            <span class="meas">м</span>
          </div>
        </div> -->
        <div class="field-section">
          <div class="field-section__title">Ширина отмостки, <b>М:</b></div>
          <div class="field">
            <input
              type="number"
              placeholder="Ширина"
              class="inp"
              v-model="width"
            />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Внешние углы <b>ШТ:</b></div>
          <div class="field">
            <input type="number"
              placeholder="Углы"
              class="inp"
              v-model="external"
            />
            <span class="meas">шт</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Внутренние углы <b>ШТ:</b></div>
          <div class="field">
            <input
              type="number"
              placeholder="Углы"
              class="inp"
              v-model="internal"
            />
            <span class="meas">шт</span>
          </div>
        </div>

        <div
          class="field-section field-section-mini"
          v-for="item in sides"
          :key="item"
        >
          <div class="field-section__title">{{item.title}}</div>
          <div class="field">
            <input
              type="number"
              placeholder="Длина"
              class="inp"
              v-model="item.value"
            />
            <span class="meas">м</span>
          </div>
        </div>

        <div
          class="field-section"
        >
          <div 
            class="calc_block_addField" 
            style="margin-bottom: 0; display: flex; align-items: center; cursor: pointer;"
            @click="addSide"
          >
            <img src="./../assets/icons/add_field.png" alt="">
            <span style="transform: translateY(0)">Добавить секцию</span>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Площадь отмостки:</div>
          <div class="inp-itog">{{result}} м<sup>2</sup></div>
          <!-- <div class="inp-itog">1 шт</div> -->
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/house.jpg" />
      </template>
    </BlockSection>

    <BlockSection
      title="Толщина слоя, выбрать материал"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section">
          <div class="field-section__title">Брусчатка P, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Брусчатка" v-model="paving" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Бетон B, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Бетон" v-model="concrete" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Утеплитель U, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Утеплитель" v-model="insulation" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Щебень G, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Щебень" v-model="rubble" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
        <div class="field-section">
          <div class="field-section__title">Песок S, <b>М:</b></div>
          <div class="field">
            <input type="number" placeholder="Песок" v-model="sand" class="inp" />
            <span class="meas">м</span>
          </div>
        </div>
      </template>

      <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Общий объем материалов: </div>
          <div class="inp-itog">{{pcirsResult}} м<sup>3</sup></div>
        </div>
      </template>

      <template v-slot:image>
        <img src="/images/material.jpg" />
      </template>
    </BlockSection>

    <BlockSection
      title="Выбрать дополнительные материалы"
      titlePage="БЕТОН ДЛЯ ПЛИТ"
      tip="Расчитать объем сложных монолитных плит удобней всего, разделив общий объем на сектора. Таким образом..."
    >
      <template v-slot:inputFields>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Геотекстиль:</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" v-model="checKgeotextile" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Арматурная сетка:</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" v-model="checKreinforcing" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Бордюр</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" v-model="checKborder" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Опалубка</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" v-model="checKformwork" />
              <span></span>
            </label>
          </div>
        </div>
        <div class="field-section field-section-checkbox">
          <div class="field-section__title">Гидроизоляция</div>
          <div class="field">
            <label class="custom-checkbox">
              <input type="checkbox" v-model="checKwaterproofing" />
              <span>Выступ (20мм)</span>
            </label>
          </div>
        </div>
      </template>

      <!-- <template v-slot:fieldItog>
        <div class="field-section-itog">
          <div class="title">Общий объем материалов:</div>
          <div class="inp-itog">0 м<sup>3</sup></div>
        </div>
      </template> -->
      Выбрать дополнительные материалы
      <template v-slot:image>
        <img src="/images/raschet.jpg" />
      </template>
    </BlockSection>

    <div class="calculation_blockButtonContainer">
      <div class="zagolovok">Результат</div>
      <!-- <button
        class="calculation_blockButton Orange m-40"
      >
        ПОКАЗАТЬ РЕЗУЛЬТАТ
      </button>
      <button class="calculation_blockButton">скачать результа</button> -->
    </div>

    <BlockSectionResult @saveFile="saveFile" @modalActive="modalActive">
      <template v-slot:head>
        <div class="column col-4">
          <div class="title">Общий  рассчет отмостки</div>
          <div class="field mb-20">
            <div class="text">общий размер отмостки:</div>
            <div class="itog">{{result}} м<sup>2</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text">Общее количество углов:</div>
            <div class="itog">{{external + internal}} шт</div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Периметр дома:</div>
            <div class="itog">{{perimeter || 0}} м<sup></sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Ширина отмостки:</div>
            <div class="itog">{{width || 0}} м<sup></sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Внешние углы А:</div>
            <div class="itog">{{external || 0}} шт</div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Внутренние углы а:</div>
            <div class="itog">{{internal || 0}} шт</div>
          </div>
        </div>

        <div class="column col-4">
          <div class="title">Рассчет материалов отмостки</div>
          <div class="field mb-20">
            <div class="text">общий объем материалов:</div>
            <div class="itog">{{pcirsResult}} м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем брусчатки Р:</div>
            <div class="itog">{{resultPaving}} м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем бетона В:</div>
            <div class="itog">{{resultConcrete}} м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем утеплителя U:</div>
            <div class="itog">{{resultInsulation}} м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем щебеня G:</div>
            <div class="itog">{{resultRubble}} м<sup>3</sup></div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">Объем песка S:</div>
            <div class="itog">{{resultSand}} м<sup>3</sup></div>
          </div>
        </div>

        <div class="column col-4">
          <div class="title">Рассчет материалов отмостки</div>
          <!-- <div class="field mb-20">
            <div class="text">Рассчет материалов отмостки</div>
            <div class="itog">0 м<sup>3</sup></div>
          </div> -->
          <div class="field mb-20">
            <div class="text opacity">площадь геотекстиля:</div>
            <div class="itog" v-if="checKgeotextile">{{result}} м<sup>2</sup></div>
            <div class="itog" v-if="!checKgeotextile">не выбрано</div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">площадь арм.сетки:</div>
            <div class="itog" v-if="checKreinforcing">{{result}} м<sup>2</sup></div>
            <div class="itog" v-if="!checKreinforcing">не выбрано</div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">длина бордюра:</div>
            <div class="itog" v-if="checKborder">{{border}} м.п.</div>
            <div class="itog" v-if="!checKborder">не выбрано</div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">длина опалубки:</div>
            <div class="itog" v-if="checKformwork">{{perimeter}} м.п.</div>
            <div class="itog" v-if="!checKformwork">не выбрано</div>
          </div>
          <div class="field mb-20">
            <div class="text opacity">площадь гидроизоляции:</div>
            <div class="itog" v-if="checKwaterproofing">{{waterproofing}} м<sup>2</sup></div>
            <div class="itog" v-if="!checKwaterproofing">не выбрано</div>
          </div>
        </div>
      </template>
      <template v-slot:btnSection>
        <!-- <button class="calculation_blockButton Orange mt-10">
          Рассчитать стоимость
        </button> -->
      </template>
      <template v-slot:result>
        <div class="field">
          <div class="text">Общая площадь отмостки:</div>
          <div class="info mt-10">
            {{result || 0}} м<sup>3</sup>
          </div>
        </div>
        <div class="field">
          <div class="text">Количество углов:</div>
          <div class="info">
            {{external + internal}} шт
          </div>
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
            <button class="calculation_blockButton m-40" @click="saveFile()">
              скачать результаты
            </button>
            <button class="calculation_blockButton Orange" @click="modalActive()">
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
      title="Онлайн калькулятор расчета отмоски"
      text="Бесплатный онлайн калькулятор поможет рассчитать отмостку вокруг вашего дома. С его помощью вы узнаете точное количество материалов, которые понадобятся для строительства. Все результаты расчетов можно скачать на ваш компьютер или смартфон. Калькулятор отмостки вычислит, какой объем материалов понадобится для строительства сложной прямоугольной конструкции, учитывая внутренние и внешние углы по периметру. Также в результатах вычислений вы увидите, сколько потребуется брусчатки, утеплителя, гидроизоляционного материала, геотекстиля, опалубки, бордюра, арматурной сетки, щебня, песка и бетона. Показатели рассчитываются, исходя из периметра, площади и объема. Обратите внимание на рекомендуемые размеры отмостки - ее ширина должна составлять от 80 до 120 см, а на участках со сложными геологическими условиями, как карсты - от 150 до 300 см."
    />
    <modal
      :modal="modal"
      @modalDisable="modalDisable"
      titlePage="КАЛЬКУЛЯТОР ОТМОСТКИ"
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

export default defineComponent({
  data() {
    return {
      modal: false,
      width: 1,
      external: 4,
      internal: 0,

      paving: 0.06,
      concrete: 0.1,
      insulation: 0.05,
      rubble: 0.3,
      sand: 0.2,

      letters: [
        'A', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
      ],
      sides: [
        {
          title: 'Длина стороны A:',
          value: ''
        },
        {
          title: 'Длина стороны B:',
          value: ''
        },
        {
          title: 'Длина стороны C:',
          value: ''
        },
        {
          title: 'Длина стороны D:',
          value: ''
        },
      ],
      
      checKgeotextile: false,
      checKreinforcing: false,
      checKborder: false,
      checKformwork: false,
      checKwaterproofing: false
    };
  },
  methods: {
    addSide() {
      let letter = this.letters[this.sides.length]
      console.log(letter)
      let newElem = {
        title: `Длина стороны ${letter}:`,
        value: ''
      }
      this.sides.push(newElem)
    },
    modalDisable() {
      this.modal = false
    },
    modalActive() {
      this.modal = true
    },
    saveFile() {
      let state = {
        head1: 'общий размер отмостки:',
        head2: 'Общее количество углов:',
        head3: 'Периметр дома:',
        head4: 'Ширина отмостки:',
        head5: 'Внешние углы А:',
        head6: 'Внутренние углы а:',
        head7: 'общий объем материалов:',
        head8: 'Объем брусчатки Р:',
        head9: 'Объем бетона В:',
        head10: 'Объем утеплителя U:',
        head11: 'Объем щебеня G:',
        head12: 'Объем песка S:',
        head13: 'площадь геотекстиля:',
        head14: 'площадь арм.сетки:',
        head15: 'длина бордюра:',
        head16: 'длина опалубки:',
        head17: 'площадь гидроизоляции:',

        title1: this.result,
        title2: this.external + this.internal,
        title3: this.perimeter || 0,
        title4: this.width || 0,
        title5: this.external || 0,
        title6: this.internal || 0,
        title7: this.pcirsResult,
        title8: this.resultPaving,
        title9: this.resultConcrete,
        title10: this.resultInsulation,
        title11: this.resultRubble,
        title12: this.resultSand,
        title13: this.result,
        title14: this.result,
        title15: this.border,
        title16: this.perimeter,
        title17: this.waterproofing,
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
  computed: {
    perimeter() {
      let result1 = 0
      this.sides.forEach((element) => {
        result1 += element.value * this.width
      })
      return result1
    },
    result() {
      if (this.external < 4) {
        return 'null'
      } else {
        // return this.perimeter * this.width + (this.width * this.width * 2 * 2) - (this.external - 4) + this.internal
        let result1 = 0
        let result2 = (this.width * this.width) * this.external - (this.width * this.width) * this.internal
        this.sides.forEach((element) => {
          result1 += element.value * this.width
        })
        return result1 + result2
      }
    },
    resultPaving() {
      return (this.result * this.paving).toFixed(2)
    },
    resultConcrete() {
      return (this.result * this.concrete).toFixed(2)
    },
    resultInsulation() {
      return (this.result * this.insulation).toFixed(2)
    },
    resultRubble() {
      return (this.result * this.rubble).toFixed(2)
    },
    resultSand() {
      return (this.result * this.sand).toFixed(2)
    },
    pcirsResult() {
      return (Number(this.resultPaving) + Number(this.resultConcrete) + Number(this.resultInsulation) + Number(this.resultRubble) + Number(this.resultSand)).toFixed(2)
    },
    border() {
      return this.perimeter + (this.width * 8) + ((this.external - 4) * 2) + (this.internal* 2)
    },
    waterproofing() {
      return (this.perimeter / 100 * 73).toFixed(2)
    },
    formwork() {
      return ''
    }
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
  .field-section-mini {
    @media (min-width: 772px) {
      .field, input {
        max-width: 107px !important;
      }
      
    }
  }
</style>