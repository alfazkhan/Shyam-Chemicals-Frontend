import axios from 'axios';

const Axios = axios.create({
  baseURL: `http://3.7.254.237:8080/`,
  headers:{
    'Content-Type': 'application/json',
  }
});
export default Axios