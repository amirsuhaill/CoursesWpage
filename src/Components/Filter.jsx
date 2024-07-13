import React from "react";

function Filter({ filterData,category,setCategory }) {

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className='flex flex-col md:flex-row gap-4 justify-center text-white my-2 items-center'>
            {filterData.map((data) => (
                <button key={data.id} type="button" onClick={() => filterHandler(data.title)} className={`bg-indigo-900 py-1 px-3 text-xl max-w-[250px] rounded-md hover:bg-indigo-600 duration-300
                ${category === data.title ?  "border-2 border-white" : "border-none"}
                `}>{data.title}</button>
            ))}
        </div> 
    )
}
export default Filter;