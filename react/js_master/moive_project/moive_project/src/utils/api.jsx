import axios from 'axios'

const BaseUrl = "https://api.themoivedb.org/3";
const TmdbToken = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization : 'bearer '+TmdbToken,
}

export const fetchDataFromApi = async(url,params)=>{
    try{
        const {data} = await axios.get(BaseUrl+url,{
            headers,
            params
        })
        return data;
    } catch (err){
        console.log(err)
        return err
    }
}