<script>
  import Button from '$lib/Button/index.svelte';
  import iconFile from './icon-add-file.svg';
  export let sendPhotoData;

  let sendData = async () => {

  };
</script>

{#if sendPhotoData}
  <section>
    <img class="bg" src={sendPhotoData.bg.file.url} alt={sendPhotoData.bg.alt}>
    <div class="container">
      <h2>
        {sendPhotoData.header}
      </h2>
      <form on:submit|preventDefault={sendData}>
        <input type="tel" placeholder="Ваш номер телефона">
        <input type="text" placeholder="Ваше имя">
        <label>
          <input type="file" class="visuallyhidden">
          <div class="placeholder">
            <div class="icon">
              <img src={iconFile} alt="">
            </div>
            <div class="text">
              Прикрепить фото или видео
            </div>
          </div>
        </label>
        <Button bind:button={sendPhotoData.button} noDefaultAction />
      </form>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    position: relative;
    z-index: 1;
    color: #fff;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
    object-position: center;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  h2 {
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  input {
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    height: 55px;
    padding: 0 20px;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
  }
  label {
    cursor: pointer;
  }
  .placeholder {
    display: grid;
    grid-template-columns: 22px 1fr;
    padding: 0 20px;
    width: 100%;
    height: 55px;
    background: #FFFFFF;
    color: #363433;
    border: 1px solid #F4F4F4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    gap: 5px;
    align-items: center;
  }
  .text {
    opacity: .6;
  }
  .icon {
    width: 22px;
    height: 22px;
  }
  .icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
    }
    input,
    .placeholder {
      padding: 0 42px;
    }
  }

  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      align-items: center;
    }
  }

  @media (min-width: 1200px) {
    h2 {
      margin-right: 120px;
    }
    form {
      margin-right: 150px;
    }
  }
</style>
