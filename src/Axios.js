import axios from 'axios';
import { decryption } from 'helpers/encryption';

const Axios = axios.create({
  baseURL: `http://api.shyamchemicals.co.in/`,
  headers:{
    'Content-Type': 'application/json',
   
  }
});
export default Axios