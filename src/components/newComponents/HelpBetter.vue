<template>
  <div class="help-better">
    <div class="help-better-content">
      <div class="title">
        Помогите нам стать лучше
      </div>
      <div class="text">
        Если вы нашли ошибку в работе калькулятора, или вам неудобно
        пользоваться нашим калькулятором, пишите! 
      </div>
      <div class="row">
        <div class="left">
          <input
            class="inp"
            type="tel"
            id="test-field"
            required
            v-model="form_input"
            placeholder="+7 (___) ___-__-__"
          >
          <button @click="onSubmit" class="help-better__button">отправить</button>
        </div>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="help-better__textarea"
          placeholder="Ваше сообщение"
        ></textarea>
      </div>
      <div class="calc_contact_check">
        <input type="checkbox" value="check" checked>
        <label for="">Я согласен с политикой конфиденциальности</label>
      </div>
    </div>
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
    im.mask(document.getElementById('test-field'));
  }
})
</script>

<style lang="scss">
  .help-better {
    padding: 24px 15px 40px 60px;
    background: #FFFFFF;
    box-shadow: 0px 4px 36px rgba(70, 70, 70, 0.15);
    border-radius: 5px;
    background-image: url(/images/Help-Better.jpg);
    background-size: 576px 313px;
    background-repeat: no-repeat;
    background-position-x: 106.5%;
    background-position-y: -20px;
    margin-top: 93px;
    @media (max-width: 772px) {
      display: none;
    }
    .help-better-content {
      max-width: 506px;
      .title {
        font-weight: 900;
        font-size: 30px;
        line-height: 36px;
        color: #2B2B2B;
      }
      .text {
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        color: #696969;
        margin-top: 10px;
      }
      .row {
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding-top: 12px;
        .left {
          display: flex;
          flex-direction: column;
        }
        .help-better__textarea {
          min-height: 108px;
          font-weight: 400;
          font-size: 16px;
          line-height: 140%;
          color: #696969;
          text-align: left;
          font-family: Lato;
          padding: 13px;
          margin-left: 18px;
          width: 100%;
        }
      }
      
      .inp,
      .help-better__textarea {
        height: 48px;
        background: #FFFFFF;
        border-radius: 2px;
        text-align: center;
        border: none;
        outline: none;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        color: #696969;
        width: 185px;
        border: 1px solid #C5C5C5;
        border-radius: 2px;
      }
        
      .help-better__button {
        background: #FFA92E;
        border-radius: 2px;
        border: none;
        width: 191px;
        height: 48px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-transform: uppercase;
        color: #2B2B2B;
        margin-top: 12px;
      }

      .calc_contact_check {
        margin-top: 16px;
        display: flex;
        align-items: center;
        input {
          margin: 0;
        }
        label {
          font-size: 13px;
          line-height: 16px;
          color: #696969;
          margin-left: 9px;
        }
      }
    }
    
  }
</style>