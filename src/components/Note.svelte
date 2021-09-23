<section class="note">
  {#each notes as note }
    <NoteItem
      {note}
      on:focusNoteItem
      on:saveNoteItem
    />
  {/each}
</section>

<script>
  import NoteItem from './NoteItem.svelte'

  export let notes
  console.log(notes)
</script>

<style lang="scss">
  .note {
    display: flex;
    flex-direction: column;
  }
</style>
