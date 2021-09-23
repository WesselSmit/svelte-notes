<input
  type="text"
  class="note-item {typeClass}"
  value={note.content}
  on:focus={handleFocus}
  on:input={handleChange}
>

<script>
  import { createEventDispatcher } from 'svelte'

  export let note

  const dispatch = createEventDispatcher()

  const typeClass = note.type ? 'note-item--' + note.type : ''

  function handleFocus() {
    console.log(note.type)
    dispatch('focusNoteItem', note.type)
  }

  function handleChange(e) {
    note.content = e.target.value

    dispatch('saveNoteItem')
  }
</script>

<style lang="scss">
  .note-item {
    padding: 0 2.5rem;
    font-size: 1rem;
    border: none;
    outline: none;

    &:first-child {
      padding-top: 7rem;
    }

    &:last-child {
      padding-bottom: 2.5rem;
    }
  }
</style>
