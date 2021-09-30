<li class="note-block">
  <textarea
    class="note-block__input {block.type}"
    type="text"
    value={block.content}
    placeholder={block.type === 'new' ? 'Start typing..' : null}
    on:keydown={handleKeyDown}
    on:keyup={handleKeyUp}
  />
</li>

<script>
  import { note } from '../store/note.js'

  export let block


  // prevent textarea from newline insertion (will still fire keyup event)
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  // update note in store
  function handleKeyUp(e) {
    if (e.key === 'Enter') return

    block.content = e.target.value
    note.updateNoteBlock(block)
  }
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
