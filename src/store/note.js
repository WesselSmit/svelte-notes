import { writable } from 'svelte/store'
import { v4 as uid } from 'uuid'

export const note = createNote()


function createNote() {
  // todo this is hardcoded to mock the behaviour of the localStorage logic that has yet to be written
  const noteFromStorage = [
    {
      id: uid(),
      type: 'body',
      content: 'This is some note content'
    },
    {
      id: uid(),
      type: 'body',
      content: 'This is some more note content'
    },
    {
      id: uid(),
      type: 'body',
      content: 'This is some other note content'
    }
  ]
  // const noteFromStorage = []
  const defaultNote = [{ id: uid(), type: 'new', content: '' }] // todo als defaultnote gebruikt wordt dan moet deze ook in de storage opgeslagen worden
  const notes = noteFromStorage.length ? noteFromStorage : defaultNote

  const { subscribe, update } = writable(notes)

  function addNoteBlock() {
    const newBlock = {
      id: uid(),
      type: 'new',
      content: ''
    }

    update(state => [...state, newBlock])

    return newBlock
  }

  function updateNoteBlock(newBlock) {
    update(state => {
      const blockIndex = state.findIndex(block => block.id === newBlock.id)
      state[blockIndex] = newBlock

      return state
    })
  }

  return {
    subscribe,
    addNoteBlock,
    updateNoteBlock
  }
}
