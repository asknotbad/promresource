<script>
  import Purchasing from './Purchasing.svelte';
  import Sales from './Sales.svelte';
  import BookkeepingHr from './BookkeepingHr.svelte';
  import PurchaseLp from './PurchaseLp.svelte';

  export let employeesData;
</script>

{#if employeesData}
  {#if employeesData.purchasing && employeesData.purchasing.isActive === true}
    <Purchasing bind:data={employeesData.purchasing} />
  {/if}
  {#if employeesData.sales && employeesData.sales.isActive === true}
    <Sales bind:data={employeesData.sales} />
  {/if}
  {#if employeesData.bookkeeping && employeesData.bookkeeping.isActive === true && employeesData.hr && employeesData.hr.isActive === true}
    <BookkeepingHr bind:bkData={employeesData.bookkeeping} bind:hrData={employeesData.hr} />
  {/if}
  {#if employeesData.purchase && employeesData.purchase.isActive === true && employeesData.laborProtection && employeesData.laborProtection.isActive === true}
    <PurchaseLp bind:purchaseData={employeesData.purchase} bind:lpData={employeesData.laborProtection} />
  {/if}

{/if}

<style>

</style>
