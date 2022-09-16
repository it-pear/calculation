<template>
  <div class="calc_contact">
    <slot name="form">
      <p class="title">Остались вопросы?</p>
      <div class="pdd">
        <p class="subtitle">
          Оставьте заявку и мы перезвоним вам в течении 15 минут
        </p>
        <input
          class="inp field-mask"
          type="tel"
          required
          v-model="form_input"
          placeholder="+7 (___) ___-__-__"
        >
        <button @click="onSubmit">заказать звонок</button>
        <div class="calc_contact_check">
          <input type="checkbox" value="check" checked>
          <label for="">Я согласен с <a href="">политикой конфиденциальности</a></label>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import axios from 'axios'
import Inputmask from 'inputmask';

export default defineComponent({
  data() {
    return {
      form_input: ''
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
    }
  },
  mounted () {
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(document.querySelector('.field-mask'));
  }
})
</script>

<style lang="sass">

.calc_contact
  max-width: 100%
  width: 100%
  background-image: url('../assets/images/fon_form_calc.jpg')
  background-position-y: 0px
  background-size: contain
  background-position-x: 100% 
  color: white
  text-align: center
  height: 317px
  padding-top: 1px
  display: block

  .title
    font-weight: 600
    font-size: 24px
    line-height: 29px
    margin-top: 21px
    margin-bottom: 12px
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
    font-weight: 600
    font-size: 14px
    text-transform: uppercase
    margin-top: 12px
    line-height: 17px
    color: #2B2B2B
  .calc_contact_check
    label 
      a
        color: white
        @media (max-width: 772px)
          color: #696969
  .calc_contact_social_title 
    margin-top: 18px
  ul
    padding: 0
    li
      display: inline-block
      margin: 0 7.5px
      vertical-align: middle

  @media (max-width: 772px)
    background: linear-gradient(90deg, #F5F5F5 0%, #F8F8F8 84.37%)
    border-radius: 2px  
    position: relative
    height: auto
    padding-bottom: 46px
    *
      position: relative
    &:before
      content: ''
      width: 100%
      height: 100%
      position: absolute
      left: 0
      top: 0
      background-image: url('/images/phone.png')
      background-position-y: 0px
      background-size: 194px 243px
      background-position-x: 100% 
      background-position-y: 100% 
      background-repeat: no-repeat
      z-index: 0
    .title
      font-weight: 900
      font-size: 20px
      line-height: 24px
      color: #2B2B2B
      margin-top: 45px
    .pdd
      padding: 0 15px
      .subtitle
        font-weight: 400
        font-size: 17px
        line-height: 130%
        color: #696969
        margin-top: 14px
    .inp,
    button
      width: 230px
      margin-left: 10px
      margin-right: 10px
    button
      margin-top: 15px
    .calc_contact_check
      display: flex
      align-item: center
      justify-content: center
      margin-top: 18px
      input
        margin: 0
      label
        font-weight: 400
        font-size: 11px
        line-height: 13px
        color: #696969
        margin-left: 6px
</style>