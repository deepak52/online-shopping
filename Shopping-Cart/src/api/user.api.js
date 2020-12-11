import axios from 'axios';
import { env } from './../config';

export const login = async(data) => {
    try {
        return await axios.post(`http://localhost:8001/user/login`, data);
    } catch (e) {
        return e;
    }
}
  
export const signup = async(data) => {
    try {
        return await axios.post(`http://localhost:8001/user/signup`, data);
      } catch (error) {
        return error;
      }
}
  