<script>
  import Button from '$lib/Button/index.svelte';

  export let askQuetionData;

  let phone;
  let name;
  let message;
  let originalText = askQuetionData.button.text;

  let sendData = async () => {
    if (askQuetionData.button.disabled === false) {
      askQuetionData.button.disabled = true;
      askQuetionData.button.text = "Отправка..."

      const sendMailUrl = `/api/email`;
      const sendMailRes = await fetch(sendMailUrl, {
        method: 'POST',
        body: JSON.stringify({
          to: askQuetionData.recipient,
          subject: 'Вопрос с айта ООО "Промресурс"',
          text: `
Здравствуйте!\n
Вам отправлено сообщение из формы "${askQuetionData.header}"\n
Имя отправителя: ${name}\n
Номер телефона отправителя: ${phone}\n
Текст сообщения: ${message}
          `,
          html: `
            <h2>Здравствуйте!</h2>
            <p>Вам отправлено сообщение из формы <b>"${askQuetionData.header}"</b></p>
            <p>Имя отправителя: ${name}</p>
            <p>Номер телефона отправителя: ${phone}</p>
            <hr>
            <p>Текст сообщения:</p>
            <p>
              <b><i>${message ? message.replace(/\n/gi, '<br>') : 'Пустое сообщение'}</i></b>
            </p>
          `,
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
      });

      if (sendMailRes.ok) {
        askQuetionData.button.text = "Сообщение отправлено!";
        setTimeout(() => {
          askQuetionData.button.text = originalText;
          askQuetionData.button.disabled = false;
        }, 2000);
      };
    };
  };
</script>

{#if askQuetionData}
<section>
  {askQuetionData.button.disabled}
  <div class="container">
    <h2>
      {askQuetionData.header}
    </h2>
    <form on:submit|preventDefault={sendData}>
      <input bind:value={phone} type="tel" placeholder="Ваш номер телефона" required>
      <input bind:value={name} type="text" placeholder="Ваше имя" required>
      <textarea bind:value={message} placeholder="Ваш вопрос" required></textarea>
      <Button bind:button={askQuetionData.button} on:click={sendData} />
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
