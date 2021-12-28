<script>
  import { numSpace } from "$lib/helpers";
  import snarkdown from "snarkdown";

  export let items;
</script>

{#if items && items.length > 0}
  <table cellspacing=0 cellpadding=0>
    <thead>
      <tr>
        <th>
          Вид металлолома
        </th>
        <th>
          Стоимость
        </th>
        <th>
          % засора
        </th>
        <th>
          Примечания
        </th>
      </tr>
    </thead>
    {#each items as item}
      <tr>
        <td class="name">
          {item.name}
        </td>
        <td class="price">
          От {numSpace(item.price)} {item.currency.symbol} ({item.measurement.name.toLowerCase()})
        </td>
        <td class="percentage">
          <span class="span">% засора:</span> {item.cloggingPercentage}
        </td>
        <td class="description">
          {@html snarkdown(item.description)}
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
  thead {
    display: none;
  }
  tr {
    border: 1px solid #000;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 30px;
    row-gap: 15px;
    padding: 15px;
  }
  .name {
    font-size: 18px;
    font-weight: 500;
  }
  .price {
    color: #E62B32;
    font-size: 24px;
    font-weight: 700;
  }
  .percentage {
    font-size: 14px;
    font-weight: 500;
  }
  .description {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 14px;
    row-gap: 14px;
  }
</style>
