<script>
import ItemCard from "$lib/Advantages/ItemCard.svelte";

  export let futurePlansData;
</script>

{#if futurePlansData}
  <section>
    {#if futurePlansData.bg}
      <img src={futurePlansData.bg.file.url} alt={futurePlansData.bg.alt} class="bg">
      <div class="overlay" style="background: {futurePlansData.bg.overlay};"></div>
    {/if}
    <div class="container">
      <h2>
        {futurePlansData.header}
      </h2>
      {#if futurePlansData.items.length > 0}
        <ul>
          {#each futurePlansData.items as item}
            {#if item.isActive === true}
              <li>
                <article>
                  <h3>
                    {item.header}
                  </h3>
                  <div class="content">
                    {@html item.content}
                  </div>
                </article>
              </li>
            {/if}
          {/each}
        </ul>
      {/if}
      <div class="text">
        {@html futurePlansData.bottomText}
      </div>
    </div>
  </section>
{/if}

<style>
  section {
    padding: 60px 0;
    z-index: 1;
    position: relative;
  }
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    pointer-events: none;
    object-fit: cover;
    object-position: center;
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 1;
  }
  h2 {
    color: #fff;
    margin-bottom: 30px;
  }
  ul {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
  article {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px 3px rgba(255, 255, 255, 0.07);
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
    font-size: 16px;
    line-height: 22px;
    color: #424242;
  }
  h3 {
    font-size: 30px;
    line-height: 35px;
    color: #E52B32;
  }
  .text {
    position: relative;
    font-weight: 700;
    font-size: 20px;
    line-height: 133.69%;
    text-align: center;
    color: #E52B32;
    background: #fff;
    padding: 36px 20px;
    box-shadow: 0px 4px 4px 3px rgba(54, 52, 51, 0.07);
    margin-left: 20px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 26px;
  }
  .text::after {
    content: '';
    display: block;
    border: 2px solid #E52B32;
    width: 100%;
    height: calc(100% + 5px);
    position: absolute;
    left: -20px;
    top: 10px;
    z-index: -1;
  }
</style>
