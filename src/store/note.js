import { writable } from 'svelte/store'
import { v4 as uid } from 'uuid'
import storage from '../modules/storage'

export const note = noteStore()


function noteStore() {
  const note = getNoteFromStorage()
  const { subscribe, update } = writable(note)


  function addNoteBlock(currentBlockId) {
    update(state => {
      const newBlock = createNewNoteBlock()
      const currentBlockIndex = state.findIndex(block => block.id === currentBlockId)

      state.splice(currentBlockIndex + 1, 0, newBlock)

      return storage.update('note', state)
    })
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
