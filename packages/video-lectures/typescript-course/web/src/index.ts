import axios, { AxiosResponse } from 'axios';

axios.get('https://localhost:3000/users').then((response: AxiosResponse) => {
    console.log(response.data);
});
