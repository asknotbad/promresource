<script>
  import { modalData } from '$lib/stores';
  import Button from '$lib/Button/index.svelte';

  let name;
  let phone;
  let button = {
    text: "Отправить данные",
    link: null,
    color: "blue",
    size: "big",
    action: null,
    disabled: false,
    isExternalLink: false,
    isActive: true
  };
  let originalText = button.text;

  let sendData = async () => {
    if (button.disabled === false) {
      button.disabled = true;
      button.text = "Отправка..."

      const sendMailUrl = `/api/email`;
      const sendMailRes = await fetch(sendMailUrl, {
        method: 'POST',
        body: JSON.stringify({
          to: $modalData.button.modalFormRecipient,
          subject: 'Запрос на подписку WhatsApp с сайта ООО "Промресурс"',
          text: `
Здравствуйте!\n
Вам отправлено сообщение из формы "Связвться с нами" (открыто в "${$modalData.header} / ${$modalData.button.text}")\n
Имя отправителя: ${name}\n
Номер телефона отправителя: ${phone}
          `,
          html: `
            <h2>Здравствуйте!</h2>
            <p>Вам отправлено сообщение из формы <b>"Связвться с нами"</b> (открыто в "${$modalData.header} / ${$modalData.button.text}")</p>
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
          name = null;
          email = null;
          phone = null;
          message = null;
          button.text = originalText;
          button.disabled = false;
        }, 2000);
      };
    };
  };
</script>

{#if $modalData}
  <div class="wrapper">
    <h2>
      Подписаться на оповещения в WhatsApp
    </h2>
    <form on:submit={sendData}>
      <input bind:value={name} type="text" placeholder="Ваше имя" required>
      <input bind:value={phone} type="tel" placeholder="Ваш номер телефона" required>
      <Button bind:button on:click={sendData} noDefaultAction />
    </form>
  </div>
{/if}

<style>
  h2 {
    margin-bottom: 30px;
    font-size: 25px;
    line-height: 32px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  input {
    height: 70px;
    padding: 0 30px;
    width: 100%;
    border: 1px solid rgba(44, 20, 178, 0.5);
    box-shadow: 0px 4px 4px 3px rgba(38, 38, 38, 0.05);
    border-radius: 5px;
    font-size: 16px;
    line-height: 19px;
    font-family: 'Roboto', sans-serif;
    background: #FFFFFF;
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 35px;
      line-height: 45px;
      margin-bottom: 30px;
    }
    form {
      gap: 25px;
    }
  }

  @media (min-width: 992px) {
    h2 {
      margin-bottom: 56px;
    }
  }
</style>
