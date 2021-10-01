<main class="app">
  <Sidebar />
  <NoteList />
</main>

<script>
  import Sidebar from '../components/Sidebar.svelte'
  import NoteList from '../components/NoteList.svelte'
</script>

<style lang="scss">
  .app {
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>

