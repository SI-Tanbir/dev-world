import { MdOutlineBookmarks } from "react-icons/md";


const Blog = ({data})=>{

    
    let {id,cover,author_img,author,reading_time,posted_date,title,hashtags}=data;

    return(
        
       <div className="mt-8">
        {/* starting of post part */}


<div key={id}>




<img className="w-full" src={cover} alt="" />
<div>

<div className="flex justify-between">
  
  <div className="flex">

  <div>
    <img className="rounded-full" src={author_img} width='40px' alt="" />
    </div>
   
   <div>
   <h3>{author}</h3>
   <p>{posted_date}</p>
   </div>
  </div>
   <div className="flex">
   <p>{reading_time} reaming time</p>
   <button className="m-4 mt-0 text-red-500 text-xl"><MdOutlineBookmarks />
   </button>


   </div>
        
      </div>

</div>
<h2 className="font-extrabold text-2xl">{title}</h2>
<p>{hashtags.map(hash=> hash )}</p>


</div>



       </div>
                // end of post part


    )
}
export default Blog;