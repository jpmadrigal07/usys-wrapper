import create from 'zustand'

// Zustand implementation
type Store = {
  newTodo: string
  setNewTodo: (newTodo: string) => void
}

const useStore = create<Store>(
  (set): Store => ({
    newTodo: 'Sample 123',
    setNewTodo: (newTodo: string) =>
      set((state) => ({
        ...state,
        newTodo,
      })),
  })
)

export default useStore
