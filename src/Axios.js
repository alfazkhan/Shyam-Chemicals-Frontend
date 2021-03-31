import axios from 'axios';
import { decryption } from 'helpers/encryption';

const Axios = axios.create({
  baseURL: `http://3.7.254.237/`,
  headers:{
    'Content-Type': 'application/json',
   
  }
});
export default Axios