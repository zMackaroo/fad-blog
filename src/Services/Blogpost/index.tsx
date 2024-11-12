import axios from "axios";
import { blogPostUrl, baseUrl, allBlogPostUrl } from "../../Constant/Services";

export const storeBlogPost = (
  formData: Object,
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .post(`${baseUrl + blogPostUrl}`, { ...formData })
    .then((response) => {
      successCallBack(response);
    })
    .catch(failCallBack);
};

export const updateBlogPost = (
  formData: Object,
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .patch(`${baseUrl + blogPostUrl}`, { ...formData })
    .then((response) => {
      successCallBack(response);
    })
    .catch(failCallBack);
};

export const deleteBlogPost = (
  formData: Object,
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .delete(`${baseUrl + blogPostUrl}`, { data: formData })
    .then((response) => {
      successCallBack(response);
    })
    .catch(failCallBack);
};

export const getAllBlogPost = (
  page: Number = 1,
  limit: Number = 10,
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .get(`${baseUrl + allBlogPostUrl}?page=${page}&limit=${limit}`)
    .then((response) => {
      successCallBack(response);
    })
    .catch(failCallBack);
};

export const getPublishedBlogPost = (
  page: Number = 1,
  limit: Number = 10,
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .get(`${baseUrl + blogPostUrl}?page=${page}&limit=${limit}`)
    .then((response) => {
      successCallBack(response);
    })
    .catch(failCallBack);
};

export const getBlogPostById = (
  id: String,
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .get(`${baseUrl + blogPostUrl}/${id}`)
    .then((response) => {
      successCallBack(response);
    })
    .catch(failCallBack);
};
