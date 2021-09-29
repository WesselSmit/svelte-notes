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


  // used to prevent textarea from inserting a newline character (will still fire keyup event)
  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  // used to update note content in store
  function handleKeyUp(e) {
    if (e.key === 'Enter') return // prevent note from updating when enter is pressed because updating the note will also update the textarea

    if (e.key === 'Enter') {
      console.log('user pressed enter')
    } else {
      console.log('user pressed a key that is not enter')
      block.content = e.target.value
      note.updateNoteBlock(block)
      console.log($note)
    }
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
