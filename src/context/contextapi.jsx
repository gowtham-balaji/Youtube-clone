import React from "react"
import {createContext , useState , useEffect} from "react"




import {fetchDataFromApi} from "../utils/api"

const context = createContext() 

export const AppContext = (props) => {
    const[loading , setLoading] = useState(false)
    const[searchResults ,setSearchResults] = useState(false)
    const[selectCategories , setSelectCategories] = useState("NEW")
    const[mobileMenu , setMobileMenu] = useState(false)


    useEffect(() => {
        fetchSelectCategoriesData(selectCategories);
    }, [selectCategories]);

    const fetchSelectCategoriesData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setSearchResults(contents)
            setLoading(false)
        })
    }
   
    return(
        <context.Provider
          value={{
            loading,
            setLoading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu
          }}
        >
        {props.children}
        </context.Provider>
    )
}

