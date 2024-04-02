import axios from "axios";
const apiUrl = 'https://www.omdbapi.com/?apikey=d5c76c60&t=';

export const fetchFromAPI = async (str)=>{
    const response =await axios.get(apiUrl+str)
    return response.data;
}