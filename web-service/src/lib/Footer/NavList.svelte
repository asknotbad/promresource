<script>
  export let navList;
</script>

{#if navList}
  <ul>
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
  }
</style>
