<main class="app">
  <Sidebar />
  <NoteBlockList />
</main>

<script>
  import Sidebar from '../components/Sidebar.svelte'
  import NoteBlockList from '../components/NoteBlockList.svelte'
</script>

<style lang="scss">
  .app {
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>

