<script>
  import { numSpace } from "$lib/helpers";
  import snarkdown from "snarkdown";

  export let items;
</script>

{#if items && items.length > 0}
  <table cellspacing=0 cellpadding=0>
    {#each items as item}
      <tr>
        <td class="name">
          <h3>
            {item.name}
          </h3>
        </td>
        <td class="price">
          От {numSpace(item.price)} {item.currency.symbol} ({item.measurement.name.toLowerCase()})
        </td>
        <td class="description">
          {#if item.description}
            {@html snarkdown(item.description)}
          {/if}
        </td>
      </tr>
    {/each}
  </table>
{/if}

<style>
  table {
    width: 100%;
    border-collapse: collapse;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
  }
  tr {
    border: 1px solid #363433;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    row-gap: 15px;
    padding: 15px;
  }
  h3 {
    color: #424242;
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
  }
  .price {
    font-size: 16px;
    line-height: 19px;
    color: #2C14B2;
    font-weight: 700;
  }
  .description {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 16px;
    line-height: 20px;
    row-gap: 20px;
  }

  @media (min-width: 768px) {
    table {
      row-gap: 15px;
      display: table;
    }
    tr {
      display: table-row;
    }
    td {
      padding: 15px;
      vertical-align: top;
    }
    .name {
      width: 35%;
    }
    .price {
      white-space: nowrap;
    }
  }

</style>
