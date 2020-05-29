import axios from 'axios';

axios.defaults.baseURL = '/employees.json';

export default class PostService{
  getAllEmployees(){
    return axios.get();
  }
}
