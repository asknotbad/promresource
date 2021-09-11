<script>
  import Button from '$lib/Button/index.svelte';

  export let getPriceData;

  let name;
  let phone;
  let originalText = getPriceData.button.text;
  let button = getPriceData.button;

  let sendData = async () => {
    if (button.disabled === false) {
      button.disabled = true;
      button.text = "Отправка..."

      const sendMailUrl = `/api/email`;
      const sendMailRes = await fetch(sendMailUrl, {
        method: 'POST',
        body: JSON.stringify({
          to: getPriceData.recipient,
          subject: 'Запрос подписки на прайс по номеру телефона с сайта ООО "Промресурс"',
          text: `
Здравствуйте!\n
Вам отправлено сообщение из формы "${getPriceData.header}"\n
Имя отправителя: ${name}\n
Номер телефона отправителя: ${phone}
          `,
          html: `
            <h2>Здравствуйте!</h2>
            <p>Вам отправлено сообщение из формы <b>"${getPriceData.header}"</b> </p>
            <p>Имя отправителя: ${name}</p>
            <p>Номер телефона отправителя: ${phone}</p>
          `,
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
      });

      if (sendMailRes.ok) {
        button.text = "Сообщение отправлено!";
        setTimeout(() => {
          phone = null;
          name = null;
          button.text = originalText;
          button.disabled = false;
        }, 2000);
      };
    };
  };
</script>

{#if getPriceData}
<section>
  <img class="bg" src={getPriceData.bg.file.url} alt={getPriceData.bg.alt}>
  <div class="container">
    <h2>
      {getPriceData.header}
    </h2>
    <form on:submit|preventDefault={sendData}>
      <input bind:value={phone} type="tel" placeholder="Ваш номер телефона">
      <input bind:value={name} type="text" placeholder="Ваше имя">
      <Button bind:button on:click={sendData} noDefaultAction />
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
    input {
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
    form {
      margin-right: 100px;
    }
  }
</style>
