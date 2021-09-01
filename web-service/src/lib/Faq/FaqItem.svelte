<script>
  import arrow from './arrow-faq.svg';

  export let item;
  export let isOpen = false;

  function toggleOpen() {
    isOpen = !isOpen;
  };
</script>

{#if item}
  <article class:open={isOpen}>
    <h3>
      {item.q}
      <button class:open={isOpen} on:click={toggleOpen}>
        <img src={arrow} alt="">
      </button>
    </h3>
    <div class="answer" class:open={isOpen}>
      {@html item.a}
    </div>
  </article>
{/if}

<style>
  article {
    color: #343434;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 30px 20px;
  }
  h3 {
    font-size: 22px;
    line-height: 25px;
    display: grid;
    grid-template-columns: 1fr 22px;
    gap: 10px;
    align-content: start;
  }
  button {
    width: 22px;
    height: 22px;
    border: none;
    margin: 0;
    padding: 0;
    background: none;
    cursor: pointer;
    transition: .25s ease-in-out;
    transform: translateY(4px);
  }
  button.open {
    transform: rotate(180deg) translateY(-16px);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
  .answer {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
    font-size: 16px;
    line-height: 22px;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transition: .25s ease-in-out;
  }
  .answer.open {
    max-height: 200vh;
    opacity: 1;
    pointer-events: all;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 25px;
      line-height: 39px;
    }
  }

  @media (min-width: 992px) {
    article {
      padding: 50px 70px;
    }
    h3 {
      font-size: 25px;
      line-height: 39px;
    }
    .answer.open {
      margin-top: 30px;
    }
  }
</style>
