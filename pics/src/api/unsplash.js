import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID T2VsZnnQkG4zoyTnUcIgD0maTnlKktNMQBDLR_tFcbg',
  },
});
