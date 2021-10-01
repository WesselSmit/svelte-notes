<label
  for={option}
  class="styling-option"
>
  <input
    type="radio"
    name="styling-options"
    value={option}
    id={id}
    class="styling-option__input"
    bind:this={stylingOptionref}
  >
  { option }
</label>

<script>
  export let option
  let stylingOptionref


  const id = 'styling-option-' + option
</script>

<style lang="scss">
  .styling-option {
    display: block;

    &__input {

    }
  }
</style>
