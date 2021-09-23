<textarea
  type="text"
  class="note-item {typeClass}"
  value={note.content}
  placeholder={note.type === 'new' ? 'Start typing..' : null}
  bind:this={noteRef}
  on:focus={handleFocus}
  on:input={handleChange}
/>

<script>
  import { onMount, createEventDispatcher } from 'svelte'

  export let note
  let noteRef

  const dispatch = createEventDispatcher()
  const typeClass = note.type ? 'note-item--' + note.type : ''

  function handleFocus() {
    dispatch('focusNoteItem', note.type)
  }

  function handleChange(e) {
    note.content = e.target.value.trimEnd()
    dispatch('saveNoteItem')
    setTextAreaHeight()
  }

  function setTextAreaHeight() {
    const el = noteRef
    if (el.scrollHeight > el.clientHeight) {
      el.style.height = el.scrollHeight + 'px'
    }
  }

  onMount(setTextAreaHeight)
</script>

<style lang="scss">
  .note-item {
    padding: 0 2.5rem;
    font-size: 1rem;
    font-family: inherit;
    border: 1px solid red;
    resize: none;
    outline: none;

    &:first-child {
      padding-top: 7rem;
    }

    &:last-child {
      padding-bottom: 2.5rem;
    }
  }
</style>
