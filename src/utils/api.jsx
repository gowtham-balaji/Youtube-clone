import axios from "axios"

const BASE_URL = 'https://youtube138.p.rapidapi.com'


//'X-RapidAPI-Key':'fcd3449757mshe0ca056c5f74d08p174369jsn4a4d3af5265b',

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':'fcd3449757mshe0ca056c5f74d08p174369jsn4a4d3af5265b',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
    
  }
;

export const fetchDataFromApi = async (url) => {
  const data = await axios.get(`${BASE_URL}/${url}`, options )
   return data;
}

