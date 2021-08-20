<script>
  import { fly } from 'svelte/transition';
  import buttonImg from './button.svg';

  export let companyStructureData;

  let visibleContent = null;

  function toggleContent(i) {
    if (visibleContent === i) {
      visibleContent = null;
    } else {
      visibleContent = i
    };
  };
</script>

{#if companyStructureData}
  <section>
    <div class="container">
      <h2>
        {companyStructureData.header}
      </h2>
      <ul class="cards">
        {#each companyStructureData.items as item, i}
          {#if item.isActive === true}
            <li>
              <article class:photo={item.photo && item.photo.file}>
                {#if item.photo && item.photo.file}
                  <img class="photo" src={item.photo.file.url} alt={item.photo.alt}>
                {/if}
                <div class="announce">
                  <h3>
                    {#if item.announce && item.announce !== ''}
                      {@html item.announce}
                    {:else}
                      {item.header}
                    {/if}
                  </h3>
                  {#if item.content && item.content !== ''}
                    <div class="button">
                      <button on:click|preventDefault={() => toggleContent(i)}>
                        <img src={buttonImg} alt="">
                      </button>
                    </div>
                    {/if}
                  </div>
                  {#if visibleContent === i}
                    <div class="content" in:fly="{{ y: -20, duration: 250 }}" out:fly="{{ y: -20, duration: 250 }}">
                      {@html item.content}
                    </div>
                  {/if}
              </article>
            </li>
          {/if}
        {/each}
      </ul>
    </div>
  </section>
{/if}

<style>
  section {
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    padding-bottom: 60px;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    position: relative;
    z-index: 1;
    overflow-y: hidden;
  }
  article {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #363433;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
  li:not(:last-of-type) article::after {
    content: '';
    display: block;
    width: 1px;
    height: 22px;
    background: #000;
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: -1;
  }
  article.photo {
    grid-template-columns: 5fr 7fr;
    padding: 0;
  }
  .photo > img {
    object-fit: cover;
    object-position: center;
    margin: 0;
    padding: 0;
  }
  .announce {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    padding: 15px;
    min-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  h3 :global(span) {
    color: #2C14B2;
  }
  .photo h3 {
    height: 111px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    padding-right: 8px;
    padding-left: 8px;
    text-align: left;
  }
  .button {
    position: absolute;
    right: 10px;
    top: 30px;
    width: 23px;
    height: 23px;
  }
  .photo .button {
    right: auto;
    left: 90px;
    top: 88px;
  }
  button {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
  }
  button img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .content {
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    background: #000;
    background: #363433;
    border: 1px solid #363433;
    padding: 15px 10px;
  }
  .photo .content {
    grid-column: span 2;
  }
</style>
