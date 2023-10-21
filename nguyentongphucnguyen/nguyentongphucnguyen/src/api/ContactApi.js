import axiosInstance from "./axiosInstance.js";
const ContactApi = {
  getAll(params) {
    const url = "/contacts";
    return axiosInstance.get(url, { params });
  },
  get(id) {
    const url = `contacts/${id}`;
    return axiosInstance.get(url);
  },
  add(data) {
    const url = `contacts`;
    return axiosInstance.post(url, data);
  },
  update(data) {
    const url = `contacts/${data.id}`;
    return axiosInstance.patch(url, data);
  },
  del(id) {
    const url = `contacts/${id}`;
    return axiosInstance.delete(url);
  },
  restore(id) {
    const url = `contacts.restore/${id}`;
    return axiosInstance.get(url);
  },
  trash() {
    const url = `contacts.trash`;
    return axiosInstance.get(url);
  },
  remove(id) {
    const url = `contacts.remove/${id}`;
    return axiosInstance.delete(url);
  },
  getBySlug(slug) {
    const url = `contacts.showBySlug/${slug}`;
    return axiosInstance(url);
  },
};
export default ContactApi;
