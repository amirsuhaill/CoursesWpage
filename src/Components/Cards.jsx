import { useEffect, useState } from 'react';
import Card from './Card';

function Cards({courses,category}){

    let allcourses = [];

    const [likedCourses, setlikedCourses] = useState([]);

    
    function getCourses(){
        if(category !== 'All'){
            return courses[category];
        }
 
        Object.values(courses).forEach((array) => {
            array.forEach((course) => {
                allcourses.push(course);
            });
        });
        return allcourses;
    }

    return(
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1080px] mx-auto gap-4 py-4'>
            {getCourses().map((course) => {
                return (<Card key={course.id}  course={course} likedCourses={likedCourses} setlikedCourses={setlikedCourses}></Card>);
            })}
        </div>
    )

}

export default Cards;