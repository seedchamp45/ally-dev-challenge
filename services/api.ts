import axios from "axios"

export const URL = "https://boiling-wildwood-58635.herokuapp.com"

const api = async (config:any) =>{
  axios.interceptors.response.use(
    response =>{
        return response;
    },
    function(error){
      if(!error.response){
        error.response={
          data:'network error',
          status:500,
          };
        }
        return Promise.reject(error);
    },
  );
  config.baseURL=URL;
  return axios(config);
};

export default api;