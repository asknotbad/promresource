<script>
    import Button from '$lib/Button/index.svelte';

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

        <Button bind:button={sendPhotoData.button} />
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

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
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
