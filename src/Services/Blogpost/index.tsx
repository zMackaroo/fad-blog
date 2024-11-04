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

export const deleteBlogPost = () => {};

export const getAllBlogPost = (
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .get(`${baseUrl + allBlogPostUrl}`)
    .then((response) => {
      successCallBack(response);
    })
    .catch(failCallBack);
};

export const getPublishedBlogPost = (
  successCallBack: (response: any) => void,
  failCallBack: () => void
) => {
  return axios
    .get(`${baseUrl + blogPostUrl}`)
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
