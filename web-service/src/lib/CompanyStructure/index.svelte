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
    left: 32%;
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

  @media (min-width: 576px) {
    .photo .button {
      top: 176px;
    }
  }

  @media (min-width: 768px) {
    .container {
      gap: 48px;
    }
    .cards {
      gap: 30px;
      grid-template-columns: repeat(12, 1fr );
      width: 100%;
      overflow-x: hidden;
    }
    li:nth-of-type(1) {
      grid-column: 1 / 10;
      margin-bottom: 40px;
      position: relative;
      /* overflow: visible; */
    }
    li:nth-of-type(1)::after {
      content: '';
      display: block;
      width: 708px;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: -55px;
      background: #000;
    }
    li:nth-of-type(1) article::after {
      height: 55px;
      left: 338px;
    }
    li:nth-of-type(2) {
      grid-row: 4 / 5;
      grid-column: 1 / 5;
    }
    li:nth-of-type(2) article::after {
      height: 55px;
      left: -1px;
      top: auto;
      bottom: 100%;
      transform: none;
    }
    li:nth-of-type(3) {
      margin-top: 40px;
      grid-row: 2 / 3;
      grid-column: 1 / 5;
      padding-left: 12px;
      position: relative;
    }
    li:nth-of-type(3)::before {
      content: '';
      display: block;
      width: 1px;
      height: calc(100% + 55px);
      position: absolute;
      left: 0;
      bottom: 0;
      background: #000;
    }
    li:nth-of-type(3)::after {
      content: '';
      display: block;
      width: 1px;
      height: calc(100% + 55px);
      position: absolute;
      right: -16px;
      bottom: 0;
      background: #000;
    }
    li:nth-of-type(3) article::after{
      height: 56px;
      bottom: 100%;
      top: auto;
    }
    li:nth-of-type(4) {
      grid-row: 3 / 4;
      grid-column: 3 / 7;
      position: relative;
    }
    li:nth-of-type(4)::before {
      content: '';
      display: block;
      width: 1px;
      height: calc(100% + 55px);
      position: absolute;
      left: -118px;
      bottom: 0;
      background: #000;
    }
    li:nth-of-type(4) article::after{
      height: 56px;
      bottom: 100%;
      top: auto;
    }
    li:nth-of-type(5) {
      margin-top: 40px;
      grid-row: 2 / 3;
      grid-column: 5 / 9;
    }
    li:nth-of-type(5) article::after{
      height: 56px;
      bottom: 100%;
      top: auto;
    }
    li:nth-of-type(6) {
      grid-row: 3 / 4;
      grid-column: 7 / 11;
      position: relative;
    }
    li:nth-of-type(6)::after {
      content: '';
      display: block;
      width: 1px;
      height: calc(100% + 55px);
      position: absolute;
      right: -118px;
      bottom: 0;
      background: #000;
    }
    li:nth-of-type(6) article::after{
      height: 56px;
      bottom: 100%;
      top: auto;
    }
    li:nth-of-type(7) {
      margin-top: 40px;
      grid-row: 2 / 3;
      grid-column: 9 / 13;
      padding-right: 12px;
      position: relative;
    }
    li:nth-of-type(7)::before {
      content: '';
      display: block;
      width: 1px;
      height: calc(100% + 55px);
      position: absolute;
      left: -15px;
      bottom: 0;
      background: #000;
    }
    li:nth-of-type(7)::after {
      content: '';
      display: block;
      width: 1px;
      height: calc(100% + 55px);
      position: absolute;
      right: 0;
      bottom: 0;
      background: #000;
    }
    li:nth-of-type(7) article::after{
      height: 56px;
      bottom: 100%;
      top: auto;
    }
    li:nth-of-type(8) {
      grid-row: 4 / 5;
      grid-column: 9 / 13;
      position: relative;
    }
    li:nth-of-type(8) article::after {
      content: '';
      display: block;
      position: absolute;
      width: 1px;
      height: 55px;
      bottom: 100%;
      background: #000;
      right: -1px;
      left: auto;
      bottom: 100%;
      transform: none;
    }
    h3 {
      font-size: 20px;
      line-height: 23px;
      padding: 15px 0;
      min-height: 94px;
    }
    .button {
      top: 64px;
      right: 8px;
    }
    article.photo {
      grid-template-columns: 217px 1fr;
      padding: 0;
    }
    .photo > img {
      width: 100%;
      height: 217px;
    }
    .photo h3 {
      height: 217px;
      font-size: 20px;
      line-height: 23px;
      padding-right: 13px;
      padding-left: 20px;
      text-align: left;
    }
    .photo .button {
      top: 176px;
      left: auto;
      right: 20px;
      top: 160px;
      width: 38px;
      height: 38px;
    }
  }

  @media (min-width: 992px) {
    li:nth-of-type(1)::after {
      width: 960px;
    }
    li:nth-of-type(1) article::after {
      left: 464px;
    }
    li:nth-of-type(4)::before {
      left: -160px;
    }
    li:nth-of-type(6)::after {
      right: -160px;
    }
  }
</style>
