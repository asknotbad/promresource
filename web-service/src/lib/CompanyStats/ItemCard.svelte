<script>
  export let item;
</script>

{#if item}
  <article>
    <h3>
      {item.header}
    </h3>
    <ul>
      {#each item.items as item}
        {#if item.isActive === true}
          <li>
            <b>
              {item.count}
            </b>
            {item.text}
          </li>
        {/if}
      {/each}
    </ul>
  </article>
{/if}

<style>
  article {
    padding: 30px 15px 30px 30px;
    background: #fff;
    color: #363433;
    box-shadow: 0px 5px 5px 3px rgba(152, 152, 152, 0.05);
  }
  h3 {
    font-size: 25px;
    line-height: 29px;
    margin-bottom: 25px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 16px;
    line-height: 19px;
    gap: 19px;
  }
  b {
    color: #E52B32;
  }

  @media (min-width: 992px) {
    article {
      padding: 30px;
    }
  }

</style>
