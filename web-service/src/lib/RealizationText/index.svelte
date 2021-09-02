<script>
  export let realizationTextData;
</script>

{#if realizationTextData}
  <section>
    <img src={realizationTextData.bg.file.url} alt={realizationTextData.bg.alt})>
    <div class="container">
      <h2>
        {realizationTextData.header}
      </h2>
      <div class="content">
        {@html realizationTextData.content}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    background-size: cover;
    background-position: center;
    padding: 60px 0;
    position: relative;
    z-index: 1;
    color: #fff;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    pointer-events: none;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 16px;
    line-height: 19px;
    gap: 19px;
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    .container {
      gap: 40px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    .container {
      gap: 60px;
    }
    h2 {
      max-width: 755px;
    }
  }

</style>
