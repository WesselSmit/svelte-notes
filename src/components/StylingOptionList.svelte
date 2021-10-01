<form class="styling-options-list">
  <fieldset class="styling-options-list__inner">
    {#each stylingOptions as option}
      <StylingOption {option} />
    {/each}
  </fieldset>
</form>

<script>
  import stylingOptions from '../content/styling-options'
  import StylingOption from './StylingOption.svelte'
</script>

<style lang="scss">
  .styling-options-list {
    &__inner {
      display: flex;
      flex-direction: column;
      border: none;
    }
  }
</style>
