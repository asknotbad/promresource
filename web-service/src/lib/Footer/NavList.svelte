<script>
  export let navList;
</script>

{#if navList}
  <ul class="nav-list">
    {#if navList.links && navList.links.length > 0}
      {#each navList.links as link}
        {#if link.isActive === true}
          <li>
            <a href={link.url}>
              {link.text}
            </a>
          </li>
        {/if}
      {/each}
    {/if}
  </ul>
{/if}

<style>
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    font-size: 16px;
    line-height: 19px;
    align-content: start;
  }

  @media (min-width: 576px) {
    .nav-list:nth-of-type(3) {
      grid-column: 1 / 3;
    }
  }

  @media (min-width: 768px) {
    .nav-list:not(:nth-of-type(3)) {
      white-space: nowrap;
      align-items: start;
      grid-row: 1 / 4;
    }
    .nav-list:nth-of-type(3) {
      grid-row: 4 / 6;
      grid-column: 2 / 4;
    }
  }

  @media (min-width: 992px) {
    .nav-list {
      grid-row: 1 / 3;
    }
    .nav-list:nth-of-type(3) {
      grid-row: 1 / 3;
      grid-column: 4 / 5;
    }
  }

  @media (min-width: 1200px) {
    .nav-list {
      grid-row: 1 / 2;
    }
    .nav-list:nth-of-type(3) {
      grid-row: 1 / 2;
      grid-column: 4 / 5;
    }
  }
</style>
