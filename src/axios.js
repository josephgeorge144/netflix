import axios from "axios";
import {baseURL,API_KEY} from './Constants/Constants'
const instance = axios.create({
    baseURL:baseURL,
  
  });
  export default instance   