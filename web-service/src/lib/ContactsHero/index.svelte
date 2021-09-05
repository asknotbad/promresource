<script>
  export let contactsHeroData;
</script>

{#if contactsHeroData}
  <section>
    <div class="container">
      <img src={contactsHeroData.bg.file.url} alt={contactsHeroData.bg.alt}>
      <div class="overlay" style="background: {contactsHeroData.bg.overlay};"></div>
      <h2>
        {contactsHeroData.header}
      </h2>
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    padding: 105px 0;
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
    z-index: -2;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  h2 {
    font-size: 40px;
    line-height: 70px;
  }

  @media (min-width: 768px) {
    section {
      padding: 182px 0;
    }
    h2 {
      font-size: 60px;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 182px 0 235px 0;
    }
  }
</style>
