<script>
  export let navIsOpen;
  export let contacts;
</script>

<div class="contacts" class:open={navIsOpen}>
  CONTACTS
</div>

<style>
  .contacts {
    grid-column: span 4;
  }
</style>
