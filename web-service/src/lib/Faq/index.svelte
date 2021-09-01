<script>
  import FaqItem from './FaqItem.svelte';
  import Button from '$lib/Button/index.svelte';

  export let faqData;
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
      <textarea></textarea>
      <div class="button">
        <Button bind:button={faqData.button} on:click />
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

</style>
