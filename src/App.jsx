


import { useState } from 'react'
import './App.css'
import Blogs from './assets/components/Blogs/Blogs'
import Bookmarks from './assets/components/Blogs/bookmarks'


function App() {


  let [bookmark,setBookmark]=useState([])
  
  let addToBookmarked =(booked)=>{
    let newBooked=[...bookmark,booked]
    setBookmark(newBooked)
    // console.log(newBooked)
  }
  // console.log(bookmark)



  // stating of markas read funtion
  let [readingTime,setReadingTime]=useState(0);
let markAsRead =(reading_time,id)=>{

      setReadingTime(readingTime + reading_time)
    
 
      // console.log(id)
      //now well remove the markasread  on 
      let remainingBookmarks= bookmark.filter(boo=> boo.id !== id);
      setBookmark(remainingBookmarks);
}

  return (
    <div>
       <div>
      <h1 className=' text-center text-6xl bg-purple-500'>DEV World</h1>

      </div>
      {/* startin of blog post here */}
      <div className=' flex mx-20'>
  

      <Blogs markAsRead={markAsRead} addToBookmarked={addToBookmarked}></Blogs>
      <Bookmarks readingTime={readingTime} bookedData={bookmark}></Bookmarks>
      </div>
    </div>
  )
}

export default App
