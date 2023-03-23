import React from 'react'
import { useState } from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import { AppContext } from './context/contextapi'

import Header from './components/Header'
import Feed from './components/Feed'
import SearchResults from './components/SearchResults'
import VideoDetails from './components/VideoDetails'

function App() {
  return(
    <BrowserRouter>
    <AppContext>
     
      <div className='h-full flex flex-col'>
          <Header />
          <Routes>
            <Route path='/' exact element={<Feed />} />
            <Route
              path='/searchResult/:searchQuery'
               element={<SearchResults />} />
           <Route path='/video/:id' element={<VideoDetails />}/>
          </Routes>
          
         </div>
      
    </AppContext>
      </BrowserRouter>
         
  )
  
}

export default App
