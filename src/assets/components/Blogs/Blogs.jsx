import { useEffect, useState } from "react"
import Blog from "./Blog"

const Blogs=({addToBookmarked})=>{

    // console.log(addToBookmarked)

    const [blogs,setBlogs]=useState([])

    useEffect( ()=> {
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            setBlogs(data)})
    } ,[])

    // author: "Alice Smith"
    // ​
    // author_img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e"
    // ​
    // cover: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
    // ​
    // hashtags: Array(3) [ "#React", "#JavaScript", "#WebDevelopment" ]
    // ​
    // id: 1
    // ​
    // posted_date: "2024-09-15"
    // ​
    // reading_time: 5
    // ​
    // title: "The Journey of React"
    return(

        <div className="w-2/3">

            {
                blogs.map(res => <Blog addToBookmarked={addToBookmarked} key={res.id} data={res}></Blog> )
            }


        </div>
    )
}

export default Blogs