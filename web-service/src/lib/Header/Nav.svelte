<script>
	import { page } from '$app/stores';

  export let navIsOpen;
  export let links;
</script>

<nav class:open={navIsOpen === true}>
  {#if links && links.length > 0}
    <ul>
      {#each links as link}
        <li>
          <a class:active={$page.path === link.url} href={link.url} sveltekit:prefetch>
            {link.text}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>

<style>
  nav {
    grid-column: span 4;
    width: 100%;
    transition: .25s ease-in-out;
    max-height: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-align: center;
    font-size: 16px;
    line-height: 19px;
  }
  nav.open {
    padding: 40px 0;
    max-height: none;
  }
  ul {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    justify-content: center;
  }

  @media (min-width: 576px) {
    nav {
      grid-column: span 6;
    }
  }

  @media (min-width: 768px) {
    ul {
      display: flex;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1200px) {
    nav {
      grid-column: 2 / 3;
    }
    ul {
      justify-content: space-between;
      row-gap: 30px;
    }
  }

</style>
