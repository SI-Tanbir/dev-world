


import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Bookmarks from './assets/components/Blogs/bookmarks'


function App() {
 

  return (
    <div>
       <div>
      <h1 className=' text-center text-6xl bg-purple-500'>Knowledge cafe</h1>

      </div>
      {/* startin of blog post here */}
      <div className=' flex mx-20'>
  

      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
