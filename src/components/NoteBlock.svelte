<li class="note-block">
  <textarea
    type="text"
    value={block.content}
    class="note-block__input {'note-block__input--' + block.type}"
    bind:this={noteBlockRef}
    on:keydown={handleKeyDown}
    on:keyup={handleKeyUp}
  />
</li>

<script>
  import { onMount } from 'svelte'
  import { note } from '../store/note.js'

  export let block
  export let isLast
  let noteBlockRef

  function handleKeyDown(e) {
    // prevent textarea from newline insertion (will still fire keyup event)
    if (e.key === 'Enter') {
      e.preventDefault()

      note.addNoteBlock(block.id)
    }
  }

  // update note in store
  function handleKeyUp(e) {
    if (e.key === 'Enter') return

    const isEmptyInput = !e.target.value.trim()

    if (block.type === 'new' && !isEmptyInput) {
      block.type = 'body'
    }

    block.content = e.target.value
    note.updateNoteBlock(block)
  }

  onMount(() => {
    if (isLast && block.type === 'new') {
      noteBlockRef.focus()
    }
  })
</script>

<style lang="scss">
  .note-block {
    &:last-child {
      flex: 1;
    }

    &__input {
      width: 100%;
      height: 100%;

      &:focus {
        outline: none;
      }
    }
  }
</style>
