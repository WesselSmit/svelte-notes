import { writable } from 'svelte/store'
import { v4 as uid } from 'uuid'
import storage from '../modules/storage'

export const note = noteStore()


function noteStore() {
  const note = getNoteFromStorage()
  const { subscribe, update } = writable(note)


  function addNoteBlock() {
    const newBlock = createNewNoteBlock()

    update(state => {
      const updatedState = [...state, newBlock] // todo this line always adds the newBlock to the end of the array, if a note has 3 blocks and the user presses enter in block 1, the newBlock should be inserted between block 1 and 2 (right now it would get inserted after block 3)

      return storage.update('note', updatedState)
    })

    return newBlock
  }

  function updateNoteBlock(updatedBlock) {
    update(state => {
      const blockIndex = state.findIndex(block => block.id === updatedBlock.id)

      state[blockIndex] = updatedBlock

      return storage.update('note', state)
    })
  }

  return {
    subscribe,
    addNoteBlock,
    updateNoteBlock
  }
}


function getNoteFromStorage() {
  const noteFromStorage = storage.get('note')

  if (!noteFromStorage) {
    createNewNoteInStorage()

    return getNoteFromStorage()
  }

  return noteFromStorage
}


function createNewNoteInStorage() {
  const newNote = [createNewNoteBlock()]

  storage.post('note', newNote)
}


function createNewNoteBlock() {
  return {
    id: uid(),
    type: 'new',
    content: ''
  }
}
