import { writable } from 'svelte/store'

export const note = createNote()


function createNote() {
  // todo this is hardcoded to mock the behaviour of the localStorage logic that has yet to be written
  const noteFromStorage = [
    {
      id: 1,
      type: 'body',
      content: 'This is some note content'
    },
    {
      id: 2,
      type: 'body',
      content: 'This is some more note content'
    },
    {
      id: 3,
      type: 'body',
      content: 'This is some other note content'
    }
  ]
  // const noteFromStorage = []
  const defaultNote = [{ type: 'new', content: '' }]
  const notes = noteFromStorage.length ? noteFromStorage : defaultNote

  const { subscribe, update } = writable(notes)

  function updateNoteBlock(newBlock) {
    update(state => {
      const blockIndex = state.findIndex(block => block.id === newBlock.id)
      state[blockIndex] = newBlock
      return state
    })
  }

  return {
    subscribe,
    updateNoteBlock
  }
}
