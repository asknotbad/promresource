<script>
  import { modalData, activeModal } from '$lib/stores';
  import { onMount } from 'svelte';

  export let button;
  export let isOpen;
  export let noDefaultAction = false;
  export let dataForModal = null;

  let buttonElement;

  function openModal() {
    if (dataForModal) {
      if (button.action === 'modalContactUs') {
        activeModal.set(null);
        modalData.set(null);
        modalData.set(dataForModal);
        activeModal.set('contactUs');
      } else if (button.action === 'modalWhatsAppSubsribe') {
        activeModal.set(null);
        modalData.set(null);
        modalData.set(dataForModal);
        activeModal.set('whatsAppSubsribe');
      } else if (button.action === 'modalPhoneSubsribe') {
        activeModal.set(null);
        modalData.set(null);
        modalData.set(dataForModal);
        activeModal.set('phoneSubsribe');
      } else if (button.action === 'modalDeliveryRequest') {
        activeModal.set(null);
        modalData.set(null);
        modalData.set(dataForModal);
        activeModal.set('deliveryRequest');
      };
    };
  };

  onMount(() => {
    if (buttonElement && noDefaultAction === false) {
      buttonElement.addEventListener('click', openModal);
    };
  });
</script>

{#if button.link && button.link !== ''}
  <a href={button.link} class="{button.size} {button.color}" disabled="{button.disabled === true ? true : false}">
    {button.text}
  </a>
{:else}
  <button bind:this={buttonElement} on:click|preventDefault class="{button.size} {button.color}" disabled="{button.disabled === true ? true : false}" class:open={isOpen}>
    {button.text}
  </button>
{/if}

<style>
  a,
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 46px;
    width: 100%;
    color: #fff;
    margin: 0;
    padding: 0 15px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 4px 4px 3px rgba(38, 38, 38, 0.05);
    transition: .25s ease-in-out;
  }
  .blue {
    border: 1px solid #2C14B2;
    background: #2C14B2;
  }
  .blue.open {
    background: #fff;
    color: #2C14B2;
  }
  .red {
    border: 1px solid #E62B32;
    background: #E62B32;
  }
  .big {
    height: 70px;
    font-size: 18px;
    line-height: 21px;
    padding: 0 30px;
  }

  @media (min-width: 768px) {
    .big {
      font-size: 20px;
      line-height: 23px;
    }
  }

</style>
