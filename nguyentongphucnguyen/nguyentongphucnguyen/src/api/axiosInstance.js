import axios from 'axios'
var axiosInstance = axios.create({
    baseURL:'http://NguyenTongPhucNguyenv-2120110091.test/api',
    headers:{'Content-Type':'application/json'}
});

axiosInstance.interceptors.response.use(function (response){
    return response.data;
}, function (error){
    return Promise.reject(error);
});

export default axiosInstance;
