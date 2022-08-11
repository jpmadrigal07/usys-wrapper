import { Outlet } from 'react-router-dom'
import useStore from '../store'

const Main = () => {
  const store = useStore((state) => state)
  return (
    <div>
      <h1>Main {store.newTodo}</h1>
      <Outlet />
    </div>
  )
}

export default Main
