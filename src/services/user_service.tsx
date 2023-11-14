import axios from 'axios';

/*
export const access = (user, password) => {
  return new Promise((resolve, reject) => {
    axios.post('http://192.168.1.27:3000/user/validate', {
      user: user,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(function (response) {
      resolve(response);
    }).catch(function (error) {
      if(error.response.status == 404){
        console.error('Miembro a asociar no existe en el servidor')
      }else{
        console.error(error.response.data);
      }
      reject(error.response);
    })
    .then(function () {
      // todo?
    });
  });
}*/