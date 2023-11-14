import axios from 'axios';
import { BASE_URL } from '../configs/constants'; 

export const validate = (user: string, password: string) => {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}user/validate`;
    const params = {
      user: user,
      password: password
    };
    axios.post(url, params, { maxRedirects: 0 })
      .then(response => {
        console.log(response.status);
        console.log(response.data);
        if(response.status != 200){
          reject(response.data);  
        }else{
          resolve(response.data);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
