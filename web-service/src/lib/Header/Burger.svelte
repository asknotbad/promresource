<script>
  export let navIsOpen = false;

  function toggleNav() {
    navIsOpen = !navIsOpen;
  }
</script>

<div class="burger">
  <button class:open={navIsOpen} on:click|preventDefault={toggleNav}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </button>
</div>

<style>
  .burger {
    display: flex;
    grid-column: span 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  button {
    display: block;
    position: relative;
    width: 49px;
    height: 49px;
    border: none;
    background: none;
    padding: 0;
    transition: .25s ease-in-out;
  }
  span {
    display: block;
    height: 7px;
    width: 100%;
    background: #fff;
    position: absolute;
    right: 0;
    transition: .25s ease-in-out;
  }
  span:nth-child(even) {
    width: 75%;
  }
  span:nth-child(1) {
    top: 0;
  }
  span:nth-child(2) {
    top: 25%;
    transform: translate(0, 25%);
  }
  span:nth-child(3) {
    bottom: 25%;
    transform: translate(0, -25%);
  }
  span:nth-child(4) {
    bottom: 0;
  }
  .open {
    transform: rotate(360deg);
  }
  .open span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
  .open span:nth-child(2) {
    width: 100%;
    height: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  .open span:nth-child(3) {
    width: 100%;
    height: 0;
    bottom: 50%;
    transform: translate(0, -50%);
  }
  .open span:nth-child(4) {
    width: 100%;
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
  }
</style>
