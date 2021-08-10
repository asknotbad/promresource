<script>
  export let button;
</script>

{#if button.link && button.link !== ''}
  <a href={button.link} class="{button.size} {button.color}" disabled={button.disabled}>
    {button.text}
  </a>
{:else}
  <button on:click|preventDefault>
    {button.text}
  </button>
{/if}

<style>
  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 46px;
    width: 100%;
    color: #fff;
    margin: 0;
    padding: 0 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 3px rgba(38, 38, 38, 0.05);
  }
  .blue {
    border: 1px solid #2C14B2;
    background: #2C14B2;
  }
  .red {
    border: 1px solid #E62B32;
    background: #E62B32;
  }
  .big {
    height: 70px;
    font-size: 18px;
    line-height: 21px;
    padding: 0 30px;
  }
</style>
