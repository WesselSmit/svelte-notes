<aside class="sidebar">
  <header class="sidebar__header">
    <h1 class="sidebar__title">Svelte Notes</h1>
    <p class="sidebar__subtitle">One place for all your notes</p>
  </header>

  <OptionsList
    name='textTypes'
    items={options}
    {textType}
  />
</aside>

<script>
  import OptionsList from './OptionsList.svelte'

  export let textType

  const options = ['heading', 'body', 'bold']
</script>

<style lang="scss">
  .sidebar {
    width: 300px;
    height: 100vh;
    padding: 1rem;
    background-color: #222;
    color: whitesmoke;

    &__header {
      height: 2rem;
      margin-bottom: 5rem;
    }

    &__title {
      margin-top: 0;
      margin-bottom: .25rem;
    }

    &__subtitle {
      margin-top: 0;
    }
  }
</style>
