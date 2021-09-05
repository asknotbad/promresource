<script>
  export let vacanciesPhotosData;
</script>

{#if vacanciesPhotosData}
  <section>
    <div class="container">
      <h2>
        {vacanciesPhotosData.header}
      </h2>
      <div class="photos">
        {#each vacanciesPhotosData.photos as photo}
          {#if photo.isActive === true}
            <div class="photo">
              <img src={photo.file.url} alt={photo.alt}>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
  }
  h2 {
    margin-bottom: 30px;
  }
  .photos {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
  img {
    width: 100%;
  }

  @media (min-width: 576px) {
    .photos {
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
    }
    .photo:nth-of-type(5n - 4) {
      grid-column: span 2;
    }
    img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (min-width: 768px) {
    section {
      padding: 80px 0;
    }
    h2 {
      margin-bottom: 40px;
    }
    .photos {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      column-gap: 30px;
    }
    .photo:nth-of-type(5n - 4),
    .photo:nth-of-type(5n - 3) {
      grid-column: span 3;
    }
    .photo:nth-of-type(5n - 2),
    .photo:nth-of-type(5n - 1),
    .photo:nth-of-type(5n) {
      grid-column: span 2;
    }
  }

  @media (min-width: 992px) {
    section {
      padding: 100px 0;
    }
    h2 {
      margin-bottom: 60px;
    }
    .photos {
      row-gap: 25px;
    }
  }
</style>
