<li class="note-block">
  <textarea
    class="note-block__input {'note-block__input--' + block.type}"
    type="text"
    value={block.content}
    bind:this={noteBlockRef}
    on:keydown={handleKeyDown}
    on:keyup={handleKeyUp}
  />
</li>

<script>
  import { onMount } from 'svelte'
  import { note } from '../store/note.js'

  export let block
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

    block.content = e.target.value
    note.updateNoteBlock(block)
  }

  onMount(() => {
    if (block.type === 'new') {
      noteBlockRef.focus()
      block.type = 'body'
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
