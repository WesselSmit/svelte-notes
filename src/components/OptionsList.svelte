<form class="options-list">
  <fieldset class="options-list__group">
    <ul class="options-list__list">
      {#each items as item }
        <li class="options-list__item">
          <input type="radio" id={`${name}-${item}`} {name} value={item} checked={item === textType}>
          <label for={`${name}-${item}`}>{ item }</label>
        </li>
      {/each}
    </ul>
  </fieldset>
</form>

<script>
  export let name
  export let items = []
  export let textType
</script>

<style lang="scss">
  .options-list {
    &__group {
      border: none;
    }

    &__group,
    &__list {
      margin: 0;
      padding: 0;
    }

    &__item {
      list-style: none;
    }
  }
</style>
