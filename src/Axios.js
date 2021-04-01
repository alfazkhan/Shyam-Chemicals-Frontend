import axios from 'axios';
import { decryption } from 'helpers/encryption';

const Axios = axios.create({
  baseURL: `https://api.shyamchemical.co.in/`,
  headers:{
    'Content-Type': 'application/json',
   
  }
});
export default Axios