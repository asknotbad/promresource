<script>
  import Modal from './Modal.svelte';
  import ModalPartnership from './ModalPartnership.svelte';
  import ModalVacanciesContact from './ModalVacanciesContact.svelte';
  import ModalContactUs from './ModalContactUs.svelte';
  import ModalWhatsAppSubsribe from './ModalWhatsAppSubsribe.svelte';
  import ModalPhoneSubscribe from './ModalPhoneSubscribe.svelte';
  import ModalDeliveryRequest from './ModalDeliveryRequest.svelte';
  import ModalSaleSubscribe from './ModalSaleSubscribe.svelte';
  // import ModalText from './ModalText.svelte';
  import ModalImg from './ModalImg.svelte';

  import { activeModal, modalData } from '$lib/stores';

  const onModalClose = () => {
    activeModal.set(null);
    modalData.set(null);
  };

</script>

{#if $activeModal === 'partnership'}
  <Modal on:close={() => onModalClose()}>
    <ModalPartnership />
  </Modal>
{:else if $activeModal === 'vacanciesContact'}
  <Modal on:close={() => onModalClose()}>
    <ModalVacanciesContact />
  </Modal>
{:else if $activeModal === 'contactUs'}
  <Modal on:close={() => onModalClose()}>
    <ModalContactUs />
  </Modal>
{:else if $activeModal === 'whatsAppSubsribe'}
  <Modal on:close={() => onModalClose()}>
    <ModalWhatsAppSubsribe />
  </Modal>
{:else if $activeModal === 'phoneSubsribe'}
  <Modal on:close={() => onModalClose()}>
    <ModalPhoneSubscribe />
  </Modal>
{:else if $activeModal === 'deliveryRequest'}
  <Modal on:close={() => onModalClose()}>
    <ModalDeliveryRequest />
  </Modal>
{:else if $activeModal === 'saleSubsribe'}
  <Modal on:close={() => onModalClose()}>
    <ModalSaleSubscribe />
  </Modal>
<!-- {:else if $activeModal === 'text'}
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
