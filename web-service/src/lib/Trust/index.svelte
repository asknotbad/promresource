<script>
  import ItemCard from './ItemCard.svelte';

  export let trustData;

  let activeItem = null;

  function setActiveItem(i) {
    activeItem = i;
  };

  function checkActiveItem() {
    if (trustData && trustData.items && activeItem === null) {
      trustData.items.forEach((item, i) => {
        if (item.isActive === true && activeItem === null) {
          return activeItem = i;
        };
      });
    };
  };

  checkActiveItem();
</script>

{#if trustData}
  <section>
    <div class="container">
      <h2>
        {trustData.header}
      </h2>
      <ul>
        {#each trustData.items as item, i}
          {#if item.isActive === true}
            <li>
              <button on:click={() => setActiveItem(i)} class:active={activeItem === i}>
                {item.header}
              </button>
            </li>
          {/if}
        {/each}
      </ul>
      {#each trustData.items as item, i}
        {#if item.isActive === true && activeItem === i}
          <ItemCard bind:item />
        {/if}
      {/each}
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    overflow-x: hidden;
    z-index: 1;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    width: 100%;
  }
  button {
    width: 100%;
    cursor: pointer;
    margin: 0;
    padding: 9px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    height: 40px;
    border: 1px solid #E52B32;
    background: #fff;
    color: #E52B32;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
  button.active {
    background: #E52B32;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
    }
    li {
      width: auto;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
  }

</style>
