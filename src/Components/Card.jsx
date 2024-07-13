import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Card({key,course,likedCourses,setlikedCourses}){

    function clickHandler(){

        if(likedCourses.includes(course.id)){
            setlikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like Removed");
        }
        else{
            setlikedCourses((prev) => [...prev,course.id]);
            toast.warning("Liked");
        }
    }
 
    return (
        <div className='shadow-lg rounded-md bg-gray-600'>
            <div className='relative'>
                <img src={course.image.url} alt={course.image.alt} className='h-[220px]'></img>
                <div className="absolute right-1 -bottom-3">
                    <button onClick={clickHandler} className='p-1 rounded-full bg-red-300 mx-2 hover:bg-green-600 duration-200'>
                        {
                            (likedCourses.includes(course.id)) ? (<FcLike fontSize="1.75rem" />) : (<FcLikePlaceholder fontSize="1.75rem" />)
                        }
                        
                    </button>
                </div>
            </div>
            <div className='p-3 text-white'>
                <h2 className='font-bold text-xl mb-2'>{course.title}</h2>
                <p>{course.description.substring(0,100)}...</p>
            </div>
           
        </div>
    )
}
export default Card;