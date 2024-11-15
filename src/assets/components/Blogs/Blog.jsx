const Blog = ({data})=>{

    
    let {id,cover,author_img,author,reading_time,posted_date,title,hashtags}=data;

    return(
        
        <div key={id}>


                    <img src={cover} alt="" width='400px' />
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
                       <div>
                       <p>{reading_time} reaming time</p>


                       </div>
                            
                          </div>

                    </div>
                    <h2 className="font-extrabold text-2xl">{title}</h2>
                    <p>{hashtags.map(hash=> hash )}</p>


                </div>


    )
}
export default Blog;