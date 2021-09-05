<script>
  import arrow from './arrow.svg';

  export let item;

  let isOpen = false;

  function toggleState() {
    isOpen = !isOpen;
  }
</script>

{#if item}
  <article class:open={isOpen}>
    <h3>
      {item.header}
      <button on:click={toggleState} class:open={isOpen}>
        <img src={arrow} alt="">
      </button>
    </h3>
    <ul class:open={isOpen}>
      {#each item.items as item}
        {#if item.isActive === true}
          <li>
            <h4>
              {item.header}
            </h4>
            <div class="content">
              {@html item.content}
            </div>
          </li>
        {/if}
      {/each}
    </ul>
  </article>
{/if}

<style>
  article {
    filter: drop-shadow(-1px -2px 17px rgba(0, 0, 0, 0.02)) drop-shadow(6px 10px 15px rgba(0, 0, 0, 0.02));
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 30px 20px;
  }
  h3 {
    font-size: 22px;
    line-height: 31px;
    display: grid;
    grid-template-columns: 1fr min-content;
    gap: 10px;
  }
  button {
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transform: translateY(4px);
    transition: .25s ease-in-out;
  }
  button.open {
    transform: translateY(4px) rotate(180deg);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  ul {
    overflow: hidden;
    font-size: 16px;
    line-height: 22px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-height: 0;
    transition: .25s ease-in-out;
  }
  ul.open {
    max-height: none;
    margin-top: 20px;
  }
  li {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  h4 {
    font-size: 18px;
    line-height: 35px;
  }
</style>
