import axios from "axios";
let axiosInstance = axios.create({
    baseURL:'https://api.team-sync.space/api',
    withCredentials:true,
});