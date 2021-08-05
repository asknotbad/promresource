<script>
  export let navIsOpen;
  export let links;
</script>

<nav class:open={navIsOpen}>
  NAV
</nav>

<style>
  nav {
    grid-column: span 4;
  }
</style>
