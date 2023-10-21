import axiosInstance from "./axiosInstance.js";
const ordersApi = {
    getAll() {
        const url = '/orders'
        return axiosInstance.get(url)
    },

    get(id){
        const url = `orders/${id}`
        return axiosInstance.get(url)
    },

    add(data){
        const url = `orders/${data.id}`
        return axiosInstance.patch(url,data)
    },

    update(data){
        const url = `orders/${data.id}`
        return axiosInstance.patch(url, data)
    },

    del(id){
        const url = `orders/${id}`
        return axiosInstance.delete(url)
    },

    restore(id){
        const url = `orders/${id}`
        return axiosInstance.get(url)
    },

    trash(){
        const url = `orders.trash`
        return axiosInstance.get(url)
    },

    remove(id){
        const url = `orders.remove/${id}`
        return axiosInstance.delete(url)
    }
}
export default ordersApi;