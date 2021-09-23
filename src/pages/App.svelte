<main class="app">
  <Sidebar {focussedNote} />
  <Note
    {notes}
    on:focusNoteItem={setFocussedNote}
    on:saveNoteItem={postNotes}
  />
</main>

<script>
  import Sidebar from '../components/Sidebar.svelte'
  import Note from '../components/Note.svelte'

  let notes
  let focussedNote = null

  getNotes()

  function getNotes() {
    if (!window.localStorage.notes) {
      notes = [{
        id: 0,
        type: "body",
        content: ""
      }]
      return
    }
    notes = JSON.parse(window.localStorage.notes)
  }

  function postNotes() {
    window.localStorage.notes = JSON.stringify(notes || [])
  }

  function setFocussedNote(event) {
    focussedNote = event.detail
  }
</script>

<style lang="scss">
  .app {
    display: grid;
    grid-template-columns: auto 1fr;
  }
</style>

