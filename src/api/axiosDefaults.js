import axios from "axios";

axios.defaults.baseURL = 'https://cams-api-63fe6b3dbe56.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true