<script>
  import { createEventDispatcher } from 'svelte';
  export let file;

  const dispatch = createEventDispatcher();

  async function deleteFile() {
    const deleteRes = await fetch(`/api/upload/files/${file.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
    });
    if (deleteRes.ok) {
      dispatch('deleteFile', {
        id: file.id,
      });
    } else {
      const r = await deleteRes.json();
      console.log('Delete error:', r);
    };
  };
</script>

{#if file}
  <div class="wrapper">
    <a href={file.url} target="_blank">
      {file.name}
    </a>
    <button on:click|preventDefault={deleteFile}>
      Удалить файл
    </button>
  </div>
{/if}

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr min-content;
    gap: 30px;
    align-items: start;
    color: #fff;
    background: rgba(0,0,0,.1);
    padding: 10px 16px;
    border-radius: 5px;
    transition: .25s ease-in-out;
    font-family: 'Montserrat', sans-serif;
  }
  .wrapper:hover {
    background: rgba(0,0,0,.2);
  }
  a {
    font-weight: 500;
    color: inherit;
    align-self: center;
    text-decoration: none;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #E54525;
    color: #fff;
    border: 1px solid #E54525;
    white-space: nowrap;
    margin: 0;
    padding: 10px 15px;
    transition: .25s ease-in-out;
    cursor: pointer;
    font-weight: 500;
  }
  button:hover {
    background: #fff;
    color: #E54525;
  }
</style>
