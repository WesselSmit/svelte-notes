<main class="app">
  <Sidebar {textType} />
  <NoteList
    {notes}
    on:updateTextType={updateTextType}
    on:saveNoteItem={postNotes}
  />
</main>

<script>
  import Sidebar from '../components/Sidebar.svelte'
  import NoteList from '../components/NoteList.svelte'

  let notes = []
  let textType = null

  getNotes()

  function getNotes() {
    if (!window.localStorage.notes) {
      newNote()
      return
    }
    notes = JSON.parse(window.localStorage.notes)
  }

  function newNote() {
    notes = [...notes, { id: 0, type: "new", content: "" }]
    postNotes()
  }

  function postNotes() {
    window.localStorage.notes = JSON.stringify(notes)
  }

  function updateTextType(event) {
    textType = event.detail
  }
</script>

<style lang="scss">
  .app {
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>

