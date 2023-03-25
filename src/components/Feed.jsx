import React, { useContext,useEffect} from 'react'



import { Context } from "../context/contextapi"
import LeftNav from "./LeftNav"
import VideoCard from "./VideoCard"


const Feed = () => {

 const { loading, searchResults } = useContext(Context)


  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
}, []);
  return (
    
    
    <div className="flex flex-row h-[calc(100%-56px)]">
      
         <LeftNav />
      
    </div>
  )
}

export default Feed
