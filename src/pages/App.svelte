<main class="app">
  <section class="note">
    <ul class="note__list">
      {#each notes as note}
        <li class="note-row">
          <textarea
            type="text"
            class="note-row__input {note.type}"
            value={note.content}
            placeholder={note.type === 'new' ? 'Start typing..' : null}
          />
        </li>
      {/each}
    </ul>
  </section>
</main>

<script>
  const noteFromStorage = [
    {
      type: 'body',
      content: 'This is some note content'
    },
    {
      type: 'body',
      content: 'This is some more note content'
    },
    {
      type: 'body',
      content: 'This is some other note content'
    }
  ]
  // const noteFromStorage = []
  const defaultNote = [{ type: 'new', content: '' }]
  const notes = noteFromStorage.length ? noteFromStorage : defaultNote


</script>

<style lang="scss">
.note {
  &__list {
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    padding: 0;
    list-style: none;

    & > *:last-child {
      flex: 1;
    }
  }
}

.note-row {
  &__input {
      width: 100%;
      height: 100%;
    }
  }
</style>

