<template>
  <div class="calc_block_result">
    <div class="calc_block">
      <div class="calc_leftBlock">
        <div class="calc_row">
          <div class="calc__left">
            <h2 class="calc_block_title">
              {{ title }}
            </h2>
            <div class="calc_block_inline">
              <slot name="total"></slot>
            </div>
          </div>
          <div class="calc__right">
            <h2 class="calc_block_title">
              Поссчитать стоимость бетона для вашей конструкции
            </h2>
            <div class="calc_block_inline">
              <div class="calc_block_inputResult">
                <div class="calc_block_inputResult__title">Выбрать Вид бетона</div>  
                <select v-model="typeBeton" @change="typeBeton2" class="calc__select">
                  <option
                    v-for="option in typeBetonOptions"
                    :value="option"
                    :key="option"
                  >
                    {{option.title}}
                  </option>
                </select>
                
                <p class="placholder" v-show="!typeBeton">бетон товарный</p>
              </div>
              <div class="calc_block_inputResult">
                <div class="calc_block_inputResult__title">Выбрать Марку</div>  
                <select v-model="markaBeton" @change="markaBeton2" class="calc__select">
                  <option
                    v-for="option in typeBeton.price"
                    :value="option"
                    :key="option"
                  >
                    {{option.title}}
                  </option>
                </select>
                <p class="placholder" v-show="!markaBeton">М 300</p>
              </div>
              <div class="calc_block_inputResult">
                <div class="calc_block_inputResult__title">Выбрать Подвижность</div>  
                <select v-model="podvigBeton" @change="podvigBeton2" class="calc__select">
                  <option
                    v-for="option in podvigBetonOptions"
                    :value="option"
                    :key="option"
                  >
                    {{option.title}}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="calc_row">
          <div class="calc_result">
            <p class="calc_result__title">Результат</p>
            <ul>
              <li>
                <span>Общий объем:</span>
                <span>{{totalData.toFixed()}} м³</span> 
              </li>
              <li>
                <span>Вид бетона:</span>
                <span v-if="!typeBeton">Не выбрано</span>
                <span v-else>{{typeBeton.title}}</span>
              </li>
              <li>
                <span>Марка бетона:</span>
                <span v-if="!markaBeton">Не выбрано</span>
                <span v-else>{{markaBeton.title}}</span>
              </li>
              <li>
                <span>Подвижность:</span>
                <span v-if="!podvigBeton">Не выбрано</span>
                <span v-else>{{podvigBeton.title}}</span>
              </li>
            </ul>
            
            <p class="calc_result__title" style="margin-top: 32px;">Стоимость бетона: {{markaBeton == '' ? 0 : totalModalPrice}} руб.</p>
          </div>
          <div class="calc_warning">
            <div class="calc_blockDescription">
              <strong>ВАЖНО!</strong> <br>
              Если основание опалубкии имеет уклон, или перепады высот, требуется расчет с учетом медианных значений
              высотных отметок. Для таких расчетов советуем вызвать специалиста нашего завода на объект. Он произведет
              необходиммый объем измерений и определит требуемый объем наиболее близко к реальному значению!
            </div>
            <div class="row">
              <div class="calc_blockButtonContainer">
                <div class="calc_blockButton" @click="saveFile()">СКАЧАТЬ ФАЙЛ </div>
                <div class="calc_blockButton Orange" style="padding-left: 25px;padding-right: 25px; margin-right: 10px;" @click="modalActive()">Рассчитать стоимость</div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>

    </div>
    <div class="calc_contact">
      <slot name="form">
        <p class="title">Остались вопросы?</p>
        <div class="pdd">
          <p class="subtitle">
            Оставьте заявку и мы перезвоним вам в течении 15 минут
          </p>
          <input
            class="inp"
            type="tel"
            id="test-field"
            required
            v-model="form_input"
            placeholder="+7 (___) ___-__-__"
          >
          <button @click="onSubmit">заказать звонок</button>
          <div class="calc_contact_check">
            <input type="checkbox" value="check" checked>
            <label for="">Я согласен с политикой конфиденциальности</label>
          </div>
        </div>
        <div class="calc_contact_social">
          <p class="calc_contact_social_title">Или напишите:</p>
          <ul>
            <li>
              <a href="" target="_blank">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6329 3.34007C14.8788 1.58386 12.5459 0.616264 10.0606 0.615234C4.93934 0.615234 0.7714 4.78306 0.769341 9.90566C0.768654 11.5432 1.19643 13.1417 2.00954 14.5507L0.691406 19.3652L5.61683 18.0732C6.97398 18.8135 8.50188 19.2036 10.0568 19.2041H10.0607C15.1813 19.2041 19.3497 15.0359 19.3517 9.9131C19.3527 7.43042 18.3872 5.09617 16.6329 3.34007ZM10.0606 17.635H10.0574C8.67171 17.6344 7.31273 17.262 6.12689 16.5586L5.84502 16.3911L2.9222 17.1579L3.70235 14.3082L3.51867 14.016C2.74562 12.7865 2.33741 11.3654 2.3381 9.90623C2.3397 5.64846 5.80405 2.18445 10.0637 2.18445C12.1263 2.18513 14.0653 2.98943 15.5233 4.44912C16.9813 5.90881 17.7837 7.84904 17.783 9.91253C17.7812 14.1706 14.3171 17.635 10.0606 17.635ZM14.2965 11.8513C14.0644 11.735 12.923 11.1736 12.7101 11.096C12.4975 11.0185 12.3425 10.9799 12.1879 11.2122C12.0331 11.4445 11.5882 11.9675 11.4527 12.1224C11.3172 12.2773 11.182 12.2968 10.9498 12.1805C10.7176 12.0644 9.96959 11.8191 9.08279 11.0282C8.39271 10.4126 7.92682 9.6524 7.79132 9.42009C7.65605 9.18755 7.79018 9.07402 7.89317 8.9463C8.14448 8.63422 8.39614 8.30704 8.4735 8.1522C8.55098 7.99725 8.51218 7.86163 8.45405 7.74548C8.39614 7.62932 7.93185 6.48663 7.73845 6.02165C7.54985 5.56915 7.35862 5.63026 7.21603 5.62317C7.08076 5.61642 6.92592 5.61504 6.77108 5.61504C6.61635 5.61504 6.36481 5.67307 6.15195 5.90561C5.93921 6.13804 5.33954 6.6996 5.33954 7.84229C5.33954 8.98499 6.17141 10.0889 6.28745 10.2438C6.40349 10.3988 7.92453 12.7437 10.2533 13.7492C10.8072 13.9886 11.2395 14.1313 11.5768 14.2383C12.133 14.415 12.6389 14.39 13.039 14.3303C13.4851 14.2636 14.4124 13.7686 14.606 13.2264C14.7995 12.6841 14.7995 12.2193 14.7413 12.1224C14.6834 12.0256 14.5286 11.9675 14.2965 11.8513Z" fill="#DDDDDD"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.84765 11.6505L7.51682 16.3038C7.99015 16.3038 8.19515 16.1005 8.44098 15.8563L10.6601 13.7355L15.2585 17.103C16.1018 17.573 16.696 17.3255 16.9235 16.3272L19.9418 2.18385L19.9426 2.18302C20.2101 0.936353 19.4918 0.448854 18.6701 0.754687L0.928482 7.54718C-0.282352 8.01718 -0.264018 8.69218 0.722648 8.99801L5.25848 10.4088L15.7943 3.81635C16.2901 3.48802 16.741 3.66968 16.3701 3.99802L7.84765 11.6505Z" fill="#DDDDDD"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="/gfg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                  <path d="M19.2944 11.5778C19.8911 6.55527 19.0078 3.38443 17.4144 1.95026L17.4153 1.94943C14.8436 -0.499735 6.1586 -0.862236 3.08193 2.05943C1.70027 3.4886 1.2136 5.5861 1.16027 8.18277C1.10693 10.7803 1.0436 15.6461 5.57777 16.9661H5.58193L5.57777 18.9819C5.57777 18.9819 5.54694 19.7986 6.0686 19.9628C6.66527 20.1561 6.93527 19.7769 8.7911 17.5603C11.8944 17.8294 14.2778 17.2128 14.5486 17.1228C15.1753 16.9128 18.7211 16.4436 19.2944 11.5778ZM9.09694 16.1419C9.09694 16.1419 7.13277 18.5911 6.52193 19.2269C6.32194 19.4336 6.10277 19.4144 6.1061 19.0044C6.1061 18.7353 6.1211 15.6578 6.1211 15.6578C2.27693 14.5561 2.5036 10.4128 2.54527 8.24527C2.58693 6.07693 2.9836 4.3011 4.1536 3.10527C6.85277 0.574431 14.4669 1.14026 16.4069 2.9636C18.7786 5.0661 17.9344 11.0061 17.9394 11.2086C17.4519 15.2703 14.5786 15.5278 14.0503 15.7036C13.8244 15.7786 11.7286 16.3178 9.09694 16.1419Z" fill="#DDDDDD"/>
                  <path d="M10.1859 3.58105C9.8651 3.58105 9.8651 4.08105 10.1859 4.08522C12.6751 4.10439 14.7251 5.83939 14.7476 9.02189C14.7476 9.35772 15.2393 9.35356 15.2351 9.01772H15.2343C15.2076 5.58856 12.9693 3.60022 10.1859 3.58105Z" fill="#DDDDDD"/>
                  <path d="M13.4575 8.4942C13.45 8.82587 13.9408 8.8417 13.945 8.50586C13.9858 6.61503 12.82 5.05753 10.6292 4.89336C10.3083 4.87003 10.275 5.3742 10.595 5.39753C12.495 5.5417 13.4958 6.83836 13.4575 8.4942Z" fill="#DDDDDD"/>
                  <path d="M12.9345 10.6448C12.5228 10.4064 12.1037 10.5548 11.9303 10.7889L11.5678 11.2581C11.3837 11.4964 11.0395 11.4648 11.0395 11.4648C8.52784 10.8006 7.85617 8.17226 7.85617 8.17226C7.85617 8.17226 7.82534 7.81643 8.05534 7.62559L8.50867 7.25059C8.73534 7.07059 8.87867 6.63726 8.64784 6.21143C8.03117 5.09726 7.61701 4.71309 7.40617 4.41809C7.18451 4.14059 6.85117 4.07809 6.50451 4.26559H6.49701C5.77617 4.68726 4.98701 5.47643 5.23951 6.28893C5.67034 7.14559 6.46201 9.87643 8.98534 11.9398C10.1712 12.9156 12.0478 13.9156 12.8445 14.1464L12.852 14.1581C13.637 14.4198 14.4003 13.5998 14.8078 12.8573V12.8514C14.9887 12.4923 14.9287 12.1523 14.6645 11.9298C14.1962 11.4731 13.4895 10.9689 12.9345 10.6448Z" fill="#DDDDDD"/>
                  <path d="M10.9751 6.75372C11.7759 6.80039 12.1643 7.21872 12.2059 8.07789C12.2209 8.41372 12.7084 8.39039 12.6934 8.05456C12.6401 6.93289 12.0551 6.30789 11.0018 6.24956C10.6809 6.23039 10.6509 6.73456 10.9751 6.75372Z" fill="#DDDDDD"/>
                  </g>
                  <defs>
                  <clipPath id="clip0">
                  <rect width="20" height="20" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5958 6.85699C16.2725 6.44866 16.365 6.26699 16.5958 5.90199C16.6 5.89783 19.2692 2.20949 19.5442 0.958659L19.5458 0.957826C19.6825 0.501992 19.5458 0.166992 18.885 0.166992H16.6983C16.1417 0.166992 15.885 0.454492 15.7475 0.776159C15.7475 0.776159 14.6342 3.44116 13.0592 5.16866C12.5508 5.66783 12.3158 5.82783 12.0383 5.82783C11.9017 5.82783 11.6892 5.66783 11.6892 5.21199V0.957826C11.6892 0.411159 11.5333 0.166992 11.0725 0.166992H7.63417C7.285 0.166992 7.0775 0.421992 7.0775 0.659492C7.0775 1.17783 7.865 1.29699 7.94667 2.75533V5.91949C7.94667 6.61283 7.82083 6.74033 7.54167 6.74033C6.79833 6.74033 4.99417 4.06449 3.925 1.00199C3.70917 0.407825 3.49833 0.167825 2.9375 0.167825H0.75C0.125833 0.167825 0 0.455325 0 0.776992C0 1.34533 0.743333 4.17116 3.45667 7.90449C5.265 10.4528 7.81167 11.8337 10.1283 11.8337C11.5208 11.8337 11.6908 11.527 11.6908 10.9995C11.6908 8.56449 11.565 8.33449 12.2625 8.33449C12.5858 8.33449 13.1425 8.49449 14.4425 9.72366C15.9283 11.1812 16.1725 11.8337 17.0042 11.8337H19.1908C19.8142 11.8337 20.13 11.527 19.9483 10.922C19.5325 9.64949 16.7225 7.03199 16.5958 6.85699Z" fill="#DDDDDD"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </slot>
    </div>

  </div>
</template>

<script >
import {defineComponent, PropType} from 'vue'
import axios from 'axios'
import Inputmask from 'inputmask';

export default defineComponent({
 
  props: {
    title: String,
    simple: [String, Number],
    complex: [String, Number],
    triangle: [String, Number],
    rad: [String, Number],
    message: [Number],
    checkedNames: [Boolean], 
    modal: Boolean,
    titlePage: String,
    totalData: Number,
  },
  data() {
    return {
      form_input: '',
      typeBeton: '',
      markaBeton: '',
      podvigBeton: '',
      typeBetonOptions:[
        {
          title:'бетон товарный',
          price: [
            {title:'М 100', price:3250},
            {title:'М 150', price:3350},
            {title:'М 200', price:3450},
            {title:'М 250', price:3550},
            {title:'М 300', price:3750},
            {title:'М 350', price:3850},
            {title:'М 400', price:4000},
            {title:'М 450', price:4150},
            {title:'М 500', price:4300}
          ]
        },
        {
          title:'Керамзитобетон',
          price: [
            {title:'М 100', price:3500},
            {title:'М 150', price:3600},
            {title:'М 200', price:3700},
            {title:'М 250', price:3800},
            {title:'М 300', price:4000},
            {title:'М 350', price:4100},
            {title:'М 400', price:4250},
            {title:'М 450', price:4400},
            {title:'М 500', price:4550}
          ]
        },
        {
          title:'Фибробетон',
          price: [
            {title:'М 100', price:3650},
            {title:'М 150', price:3750},
            {title:'М 200', price:3850},
            {title:'М 250', price:3950},
            {title:'М 300', price:4150},
            {title:'М 350', price:4250},
            {title:'М 400', price:4400},
            {title:'М 450', price:4550},
            {title:'М 500', price:4700}
          ]
        },
        {
          title:'Бездобавочный беон',
          price: [
            {title:'М 100', price:3450},
            {title:'М 150', price:3550},
            {title:'М 200', price:3650},
            {title:'М 250', price:3750},
            {title:'М 300', price:3950},
            {title:'М 350', price:4050},
            {title:'М 400', price:4200},
            {title:'М 450', price:4350},
            {title:'М 500', price:4500}
          ]
        },
        {
          title:'Бетон противоморзный', 
          price: [
            {title:'М 100', price:100},
            {title:'М 150', price:200},
            {title:'М 200', price:300},
            {title:'М 250', price:300},
            {title:'М 300', price:300},
            {title:'М 350', price:300},
            {title:'М 400', price:300},
            {title:'М 450', price:300},
            {title:'М 500', price:300}
          ]
        } 
      ],
      podvigBetonOptions: [
        {title:'П 1', price:100},
        {title:'П 2', price:200},
        {title:'П 3', price:300},
        {title:'П 4', price:400},
      ],
    }
  },
  computed: {
    totalModalPrice()  {
      return (this.totalData * this.markaBeton.price).toFixed() 
    }
  },
  methods: {
    async onSubmit() {
      if(this.form_input != '' && this.form_input.length > 11) {
        axios.post(
          "https://api.telegram.org/bot2058127921:AAFAvTdf1165861EfH1TQNTQ0e36zV_j9-I/sendMessage?chat_id=448584739&text="  +
          JSON.stringify(
            "Страница отправки " + this.titlePage + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " + " " +
            "Телефон " + this.form_input 
          ) 
        ).then(res => {
          console.log('error -----------')
          this.form_input = ''
          return alert('Ваше сообщение успешно отправлено');
        });
      } else {
        return alert('Введите данные в форму');
      }
    },
    modalActive() {
      this.$emit('modalActive', this.totalModalPrice);
    },
    typeBeton2() {
      this.$emit('typeBeton2', this.typeBeton.title);
    },
    markaBeton2() {
      this.$emit('markaBeton2', this.markaBeton.title);
    },
    podvigBeton2() {
      this.$emit('podvigBeton2', this.podvigBeton.title);
    },
    saveFile() {
      this.$emit('saveFile');
    }
  },
  mounted () {
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(document.getElementById('test-field'));
  }
})
</script>

<style lang="sass">
@import "mixins"
.calc_row
  display: flex
  @media (max-width: 780px)
    display: block
.calc_warning 
  padding-left: 58px
  padding-top: 32px
  flex: 1 1 100%
  @media (max-width: 780px)
    padding-left: 0
  .row 
    display: flex
    @media (max-width: 1100px)
      display: block
      .calc_blockButtonContainer
        display: block
        .calc_blockButton.Orange
          margin-left: 0
          margin-top: 15px
  .calc_blockButton
    border: 2px solid #AFAFAF
    box-sizing: border-box
    border-radius: 2px
    background: rgba(0,0,0,0) !important
    padding-left: 27px !important
    padding-right: 27px !important
  .calc_blockButton.Orange
    background: #FFA92E !important
    border: 2px solid #FFA92E
    margin-left: 29px

.calc_result
  flex: 0 0 245px
  ul
    padding-left: 0
    li
      list-style: none
      display: flex
      justify-content: space-between
      margin-bottom: 20px
      span
        font-weight: 500
        font-size: 16px
        line-height: 19px
        color: #696969
  .calc_result__title
    font-weight: 600
    font-size: 20px
    line-height: 24px
    color: #2B2B2B
.calc_block_result
  display: flex
  align-items: stretch
  margin-bottom: 30px

  .calc_blockDescription
    font-style: normal
    font-size: 15px
    line-height: 140%

  .calc_block
    padding-right: 46px
    margin-bottom: 0
    @media (min-width: 780px)
      flex: 1 1 calc(100% - 30px)
      max-width: calc(74.3%)
    .calc_block_title
      padding-right: 60px
    .calc_leftBlock
      flex: 1 1 100%

      .calc__left,
      .calc__right
        max-width: 50%
        flex: 1 1 50%
        @media (max-width: 780px)
          display: block
          max-width: 100%
          .calc_block_inputResult
            overflow: visible !important
      .calc__right
        .calc_block_inputResult 
          @media (max-width: 552px)
            margin-top: 26px
    .calc_block_inline
      display: flex
      flex-flow: wrap row

    .calc_block_inputResult
      margin: 10px
      position: relative
      display: flex
      justify-content: space-between
      .calc_block_inputResult__title
        @media (max-width: 552px)
          position: relative
          top: -35px
      .calc__select 
        margin-left: auto
        position: relative
        z-index: 1
        text-align: right
        position: absolute
        width: 100%
        right: 4px
        left: 0
      .placholder 
        position: absolute
        right: 32px
        top: 0px
        font-weight: bold
        font-size: 16px
        line-height: 19px
        z-index: 0
        color: #2B2B2B
        @media (max-width: 552px)
          right: auto

      @media (max-width: 1100px)
        width: unset
        flex: 1 1 100%

  .calc_contact
    flex: 0 0 auto
    margin-left: 30px
    max-width: 255px
    width: 255px
    background-image: url('../assets/images/fon_form_calc.jpg')
    color: white
    text-align: center
    disply: flex
    align-items: center
    justify-content: center
    height: 430px

    .title
      font-weight: 600
      font-size: 24px
      line-height: 29px
      margin-top: 35px
    .pdd
      padding: 0 15px

      .subtitle
        font-weight: normal
        font-size: 14px
        line-height: 130%
        color: #DDDDDD
    .calc_contact_check
      margin-top: 14px
    .inp 
      margin-top: 8px
      height: 48px
      background: #FFFFFF
      border-radius: 2px
      text-align: center
      border: none
      outline: none
      font-weight: normal
      font-size: 16px
      line-height: 140%
      color: #696969;
      width: 185px
    button 
      background: #FFA92E
      border-radius: 2px
      border: none
      width: 189px
      height: 48px
      font-weight: 600;
      font-size: 14px;
      text-transform: uppercase
      margin-top: 12px
      line-height: 17px;
      color: #2B2B2B;
    .calc_contact_social_title 
      margin-top: 18px
    ul
      padding: 0
      li
        display: inline-block
        margin: 0 7.5px
        vertical-align: middle
           

.calc_blockButtonContainer
  margin: 28px 0
  display: flex

  .calc_blockButton
    @include button(#EEE)

    &.Orange
      margin-right: 22px
      background-color: #FFA92E
</style>

// <style lang="scss">
//   .calc_leftBlock {

//   }
// </style>