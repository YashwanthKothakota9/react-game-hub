import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'63eef2f80e30488184ae0a6414a4b45a'
    }
})