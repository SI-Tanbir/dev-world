import { BiBook } from "react-icons/bi"
import Bookmark from "./bookmark";

const Bookmarks=({bookedData,readingTime})=>{

    
    // const  [id, title ] = bookedData; // Adding a fallback with `|| {}` to avoid errors if `booked` is undefined
    //  console.log(title)
    // console.log(bookedData)
    console.log(bookedData)

    
    // console.log(title)
    return(
<div className="mt-8 w-1/3   border border-blue-200">

<h2 className="text-1xl bg-slate-100 text-blue-500">Time readed:{readingTime}</h2>

<h3 className="bg-slate-300 p-4">Bookmarked Blog:</h3>

{
    bookedData.map((booked,index)=> <Bookmark  key={index} title={booked.title} ></Bookmark>)
}




</div>
    )
}
export default Bookmarks;