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
</style>
