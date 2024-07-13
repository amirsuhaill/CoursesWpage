import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const App = () => {

  const [courses,setCourses] = useState([]);
  const [loader,setLoader] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
 

  useEffect(()=>{
    const fetchdata = async() => {
      try{
        const res = await  fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);
        setLoader(false);
      }
      catch (error){
        toast.error("something went wrong");
      }
    }
    fetchdata();
  },[])

  

  return (
    <div className="bg-bgDark2 min-h-screen flex gap-2 flex-col w-[100vw]">

      <div>
        <Navbar></Navbar>
      </div>
      
      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      </div>

      {
        loader ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)
      }

    </div>
  );
};

export default App;
