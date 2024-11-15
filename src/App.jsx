import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <div>
      <h1 className=' text-center text-6xl bg-purple-500'>Knowledge cafe</h1>

      </div>
      {/* startin of blog post here */}
      <div className=' '>
  

      <Blogs></Blogs>
      </div>
    </div>
  )
}

export default App
