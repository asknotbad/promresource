<script>
  import Modal from './Modal.svelte';
  import ModalPartnership from './ModalPartnership.svelte';
  // import ModalRegister from './ModalRegister.svelte';
  // import ModalText from './ModalText.svelte';
  import ModalImg from './ModalImg.svelte';

  import { activeModal, modalData, prevModalData } from '$lib/stores';

  const onModalClose = () => {
    activeModal.set(null);
    prevModalData.set(null);
    modalData.set(null);
  };

</script>

{#if $activeModal === 'partnership'}
  <Modal on:close={() => onModalClose()}>
    <ModalPartnership />
  </Modal>
<!-- {:else if $activeModal === 'register'}
  <Modal on:close={() => onModalClose()}>
    <ModalRegister />
  </Modal>
{:else if $activeModal === 'text'}
  <Modal on:close={() => onModalClose()}>
    <ModalText on:close={() => onModalClose()}>
      {#if $modalHeader && $modalHeader !== ''}
        <h2>
          {@html $modalHeader}
        </h2>
      {/if}
      {@html $modalData}
    </ModalText>
  </Modal> -->
{:else if $activeModal === 'img'}
  <Modal on:close={() => onModalClose()}>
    <ModalImg />
  </Modal>
{/if}
