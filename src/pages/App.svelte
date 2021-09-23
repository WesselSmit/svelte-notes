<main class="app">
  <Sidebar {textType} />
  <NoteList
    {notes}
    on:updateTextType={updateTextType}
    on:saveNotes={postNotes}
    on:newNote={newNote}
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

  function newNote(e) {
    const newNote = { id: notes.length, type: "new", content: "" }

    if (e) {
      const index = e.detail + 1
      notes.splice(index, 0, newNote)
      notes = notes
    } else {
      notes = [...notes, newNote]
    }
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

