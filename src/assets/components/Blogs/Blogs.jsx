import { useEffect, useState } from "react"

const Blogs=()=>{

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
        <div>
            {
                blogs.map(res => <div key={res.id}>
                    <img src={res.cover} alt="" width='200px' />
                    <div>
                    <div>
                        <div>
                        <img  src={res.author_img} width='50px' alt="" />
                        </div>
                        <h3>{res.author}</h3>
                        <p>{res.posted_date}</p>
                    </div>

                    <p>{res.reading_time}</p>
                    </div>
                    <h2>{res.title}</h2>
                    <p>{res.hashtags.map(hash=> hash )}</p>
                </div>)
            }

        </div>
    )
}

export default Blogs