import React, { useContext,useEffect} from 'react'
import { IoMdPodium } from 'react-icons/io'


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
      <div>
        <div>
          {!loading &&
            searchResults.map((item) => {
              if (item.type !== "video") return false
              return (
                <VideoCard
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Feed
