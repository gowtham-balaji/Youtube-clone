import axios from "axios"

const BASE_URL = 'https://youtube138.p.rapidapi.com'


const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
    
      'X-RapidAPI-Key': '6cc413447bmsh0d47860dcb6c5b9p1fd7b6jsn97db15787769',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    
  }

}


export const fetchDataFromApi = async (url) => {
  const {data}= await axios.get(`${BASE_URL}/${url}`, options )
   return data;

}




