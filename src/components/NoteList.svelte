<section class="note">
  {#each notes as note, index }
    <NoteItem
      {note}
      {index}
      {isOnlyNote}
      on:updateTextType
      on:saveNotes
      on:newNote
    />
  {/each}
</section>

<script>
  import NoteItem from './NoteItem.svelte'

  export let notes
  let isOnlyNote = notes.length === 1
</script>

<style lang="scss">
  .note {
    display: flex;
    flex-direction: column;
  }
</style>
