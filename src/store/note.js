import { writable } from 'svelte/store'
import { v4 as uid } from 'uuid'
import { get as getFromStorage, post as postToStorage } from '../modules/storage'

export const note = noteStore()


function noteStore() {
  const note = getNoteFromStorage()
  const { subscribe, update } = writable(note)


  function addNoteBlock() {
    const newBlock = createNewNoteBlock()

    update(state => {
      const updatedState = [...state, newBlock]

      postToStorage('note', updatedState)

      return getFromStorage('note')
    })

    return newBlock
  }

  function updateNoteBlock(updatedBlock) {
    update(state => {
      const blockIndex = state.findIndex(block => block.id === updatedBlock.id)

      state[blockIndex] = updatedBlock
      postToStorage('note', state)


      return getFromStorage('note')
    })
  }

  return {
    subscribe,
    addNoteBlock,
    updateNoteBlock
  }
}


function getNoteFromStorage() {
  const noteFromStorage = getFromStorage('note')

  if (!noteFromStorage) {
    createNewNoteInStorage()

    return getNoteFromStorage()
  }

  return noteFromStorage
}


function createNewNoteInStorage() {
  const newNote = [createNewNoteBlock()]

  postToStorage('note', newNote)
}


function createNewNoteBlock() {
  return {
    id: uid(),
    type: 'new',
    content: ''
  }
}
