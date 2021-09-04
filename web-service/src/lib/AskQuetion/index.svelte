<script>
  import Button from '$lib/Button/index.svelte';

  export let askQuetionData;

  let sendData = async () => {

  };
</script>

{#if askQuetionData}
<section>
  <div class="container">
    <h2>
      {askQuetionData.header}
    </h2>
    <form on:submit|preventDefault={sendData}>
      <input type="tel" placeholder="Ваш номер телефона">
      <input type="text" placeholder="Ваше имя">
      <textarea placeholder="Ваш вопрос"></textarea>
      <Button bind:button={askQuetionData.button} />
    </form>
  </div>
</section>
{/if}

<style>
  section {
    padding: 60px 0;
    position: relative;
    z-index: 1;
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

  textarea {
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    height: 150px;
    padding: 20px;
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
    input {
      padding: 0 40px;
    }
    textarea {
      padding: 20px 40px;
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
    form {
      margin-right: 100px;
    }
  }
</style>
