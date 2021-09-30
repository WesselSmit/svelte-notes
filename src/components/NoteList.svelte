<div class="note-list">
  <ul class="note-list__list">
    {#each $noteBlocks as block}
      <NoteBlock {block} />
    {/each}
  </ul>
</div>

<script>
  import { note as noteBlocks } from '../store/note.js'
  import NoteBlock from './NoteBlock.svelte'
</script>

<style lang="scss">
  .note-list {
    &__list {
      display: flex;
      flex-direction: column;
      height: 100vh;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
</style>
