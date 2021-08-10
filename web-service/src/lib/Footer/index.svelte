<script>
  import Logo from './Logo.svelte';
  import NavList from './NavList.svelte';
  import Contacts from './Contacts.svelte';

  export let footerData;
</script>

<footer>
  {#if footerData}
    <div class="container">
      <Logo bind:logo={footerData.logo} />
      {#each footerData.navLists as navList}
        <NavList bind:navList />
      {/each}
      <Contacts bind:contacts={footerData.contacts} />
    </div>
  {/if}
</footer>

<style>
  footer {
    position: sticky;
    top: 100%;
    color: #fff;
    background: #363433;
    padding: 40px 15px 50px 15px;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
</style>
