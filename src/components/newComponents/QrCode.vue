<template>
  <div class="qr-code">
    <div class="subtitle">Здесь можеть быть<br>
ваша <br>
РЕКЛАМА</div>
    <!-- <img src="/images/Qr.jpg" alt=""> -->
  </div>
</template>

<style lang="scss">
  .qr-code {
    text-align: center;
    background: url('../assets/images/fon_form_calc-2.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 288px;
    .subtitle {
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      color: #7A7A7A;
      margin-bottom: 9px;
      max-width: 217px;
      text-align: center;
    }
    img {
      width: 100%;
    }
  }
</style>