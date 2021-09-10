<script>
  import Button from '$lib/Button/index.svelte';

  export let vacanciesSubscribeData;

  let email;
  let originalText = vacanciesSubscribeData.button.text;

  let sendData = async () => {
    if (vacanciesSubscribeData.button.disabled === false) {
      vacanciesSubscribeData.button.disabled = true;
      vacanciesSubscribeData.button.text = "Отправка..."

      const sendMailUrl = `/api/email`;
      const sendMailRes = await fetch(sendMailUrl, {
        method: 'POST',
        body: JSON.stringify({
          to: vacanciesSubscribeData.recipient,
          subject: 'Заявка на подписку с сайта ООО "Промресурс"',
          text: `
Здравствуйте!\n
Вам отправлено сообщение из формы "${vacanciesSubscribeData.header}"\n
Email отправителя: ${email}
          `,
          html: `
            <h2>Здравствуйте!</h2>
            <p>Вам отправлено сообщение из формы <b>"${vacanciesSubscribeData.header}"</b></p>
            <p>Email отправителя: ${email}</p>
          `,
        }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
      });

      if (sendMailRes.ok) {
        vacanciesSubscribeData.button.text = "Заявка отправлена!";
        setTimeout(() => {
          vacanciesSubscribeData.button.text = originalText;
          vacanciesSubscribeData.button.disabled = false;
        }, 2000);
      };
    };
  };
</script>

{#if vacanciesSubscribeData}
  <section>
    <img src={vacanciesSubscribeData.bg.file.url} alt={vacanciesSubscribeData.bg.alt}>
    <div class="container">
      <h2>
        {vacanciesSubscribeData.header}
      </h2>
      <form on:submit={sendData}>
        <input bind:value={email} type="email" placeholder="Ваш email" required>
        <Button bind:button={vacanciesSubscribeData.button} on:click={sendData} />
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
  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  h2 {
    margin-bottom: 30px;
  }
  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  input {
    width: 100%;
    height: 55px;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    color: #363433;
    padding: 0 20px;
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    box-sizing: border-box;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
  }
  form > :global(*) {
    min-height: 55px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      margin-bottom: 40px;
    }
    form {
      gap: 30px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    form {
      grid-template-columns: 367px min-content;
    }
    form > :global(button),
    form > :global(a) {
      min-width: 406px;
      padding: 0 30px;
      white-space: nowrap;
    }
  }
</style>
