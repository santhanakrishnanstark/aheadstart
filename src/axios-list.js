import axios from 'axios';

const instance =  axios.create({
        baseURL: 'https://ahead-d7422.firebaseio.com/'
    });

export default instance;