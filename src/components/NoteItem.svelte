<textarea
  type="text"
  class="note-item {typeClass}"
  {index}
  value={note.content}
  placeholder={note.type === 'new' ? 'Start typing..' : null}
  bind:this={noteRef}
  on:focus={handleFocus}
  on:keydown={handleKey}
/>

<script>
  import { onMount, createEventDispatcher } from 'svelte'

  export let note
  export let index
  export let isOnlyNote
  let noteRef

  const dispatch = createEventDispatcher()
  const typeClass = note.type ? 'note-item--' + note.type : ''

  function handleFocus() {
    dispatch('updateTextType', note.type)
  }

  function handleKey(e) {
    if (e.key === 'Enter') {
      if (e.target.value.trim() === "") {
        e.preventDefault()
      } else {
        dispatch('newNote', index)
        noteRef.blur()
      }
    } else {
      note.content = e.target.value
      dispatch('saveNotes')
      setTextAreaHeight()

      if (note.type === 'new' && note.content.trim() !== "") {
        note.type = 'body'
        dispatch('updateTextType', note.type)
      }
    }
  }

  function setTextAreaHeight() {
    const el = noteRef
    if (el.scrollHeight > el.clientHeight) {
      el.style.height = el.scrollHeight + 'px'
    }
  }

  onMount(() => {
    setTextAreaHeight()
    if (isOnlyNote) {
      noteRef.focus()
    }
    if (note.type === 'new') {
      noteRef.focus()
    }
  })
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
