<script>
  export let fabricAddressData;
</script>

{#if fabricAddressData}
  <section>
    <div class="container">
      <h2>
        {fabricAddressData.header}
      </h2>
      <div class="address">
        {@html fabricAddressData.address}
      </div>
      <div class="map">
        {@html fabricAddressData.map}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    color: #fff;
    background: #363433;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .address {
    font-weight: 700;
    font-size: 25px;
    line-height: 35px;
  }
  .map {
    height: 180px;
  }
  .map > :global(*) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 576px) {
    .map {
      height: 250px;
    }
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
      gap: 40px;
    }
    .address {
      font-size: 30px;
    }
    .map {
      height: 350px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    .container {
      grid-template-columns: 1fr 2fr;
      row-gap: 60px;
      column-gap: 30px;
    }
    h2 {
      grid-column: span 2;
    }
    .address {
      font-size: 30px;
      grid-column: 1 / 2;
      align-self: center;
    }
    .map {
      height: 350px;
      grid-column: 2 / 3;
    }
  }
</style>
