<script>
  import FaqItem from './FaqItem.svelte';
  import Button from '$lib/Button/index.svelte';

  export let faqData;

  let message;
  let originalText = faqData.button.text;
  let button = faqData.button;

  let sendData = async () => {
    if (button.disabled === false) {
      button.disabled = true;
      button.text = "Отправка..."

      const sendMailUrl = `/api/email`;
      const sendMailRes = await fetch(sendMailUrl, {
        method: 'POST',
        body: JSON.stringify({
          to: faqData.recipient,
          subject: 'Вопрос с сайта ООО "Промресурс"',
          text: `
Здравствуйте!\n
Вам отправлено сообщение из формы "${faqData.formHeader}"\n
Текст сообщения: ${message}
          `,
          html: `
            <h2>Здравствуйте!</h2>
            <p>Вам отправлено сообщение из формы <b>"${faqData.formHeader}"</b> </p>
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
        button.text = "Сообщение отправлено!";
        setTimeout(() => {
          message = null;
          button.text = originalText;
          button.disabled = false;
        }, 2000);
      };
    };
  };
</script>

{#if faqData}
  <section>
    <div class="container">
      <h2>
        {faqData.header}
      </h2>
      {#each faqData.items as item}
        {#if item.isActive === true}
          <FaqItem bind:item />
        {/if}
      {/each}
      <h3>
        {faqData.formHeader}
      </h3>
      <textarea bind:value={message}></textarea>
      <div class="button">
        <Button bind:button={button} on:click={sendData} noDefaultAction />
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    color: #fff;
    background: #363433;
    padding: 60px 0;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  h2 {
    margin-bottom: 10px;
  }
  h3 {
    font-size: 25px;
    line-height: 39px;
    margin-bottom: 10px;
  }
  textarea {
    background: #FFFFFF;
    border-radius: 10px;
    border: none;
    padding: 15px;
    width: 100%;
    height: 350px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      margin-bottom: 20px;
    }
    textarea {
      height: 233px;
    }
    .button {
      width: 229px;
      margin-right: auto;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h2 {
      margin-bottom: 40px;
    }
  }
</style>
