import { useState , useEffect } from "react";
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {

    const { data: tasks , isPending , error } = useFetch('http://localhost:8000/task') ;

    return (  
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading....</div>}
            { tasks && <BlogList tasks={tasks} title = "All Tasks!" />} 
        </div>
    );
}
 
export default Home;