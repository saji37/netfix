import axios from 'axios'
import {baseUrl} from './constrants/constants'
const instance = axios.create({
    baseURL: baseUrl
  });
  export default instance
