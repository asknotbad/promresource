<script>
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import cross from './cross.svg';

	const dispatch = createEventDispatcher();
	const close = () => {
    dispatch('close');
  };

	let modal;


	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}

		if (e.key === 'Tab') {
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable = Array.from(nodes).filter(n => n.tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			tabbable[index].focus();
			e.preventDefault();
		}
	};
</script>

<svelte:window on:keydown={handle_keydown}/>
<svelte:head>
  <style>
    body {
      overflow: hidden;
    }
  </style>
</svelte:head>

<div class="modal-container" transition:fade>
  <div class="modal">
    <div class="modal__bg" on:click={close}>
    </div>
    <div class="modal__content" role="dialog" aria-modal="true" bind:this={modal}>
      <slot></slot>
      <button class="modal__close" on:click={close}>
        <img src={cross} alt="">
      </button>
    </div>
  </div>
</div>

<style>
  * {
    box-sizing: border-box;
  }
  .modal-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
  }
  .modal {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal__bg {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.6);
  }
  .modal__content {
    z-index: 1;
    min-width: 80px;
    min-height: 80px;
    max-width: calc(100% - 30px);
    max-height: calc(100% - 30px);
    position: relative;
    background: #FFFFFF;
    padding: 70px;
    padding-bottom: 60px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .modal__content::-webkit-scrollbar {
    display: none;
  }
  .modal__close {
    position: absolute;
    right: 23px;
    top: 22px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: none;
    cursor: pointer;
    border: none;
    padding: 0;
    font-family: var(--font-heading);
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0,0,0,.15);
    transition: .25s ease-in-out;
  }
  .modal__close:hover {
    color: rgba(0,0,0,.75);
  }
  button:not(:disabled):active {
    background: none;
  }
</style>
