import axios from "axios";
import { authUrl, baseUrl } from "../../Constant/Services";
import { IAuthPayload } from "../../Utils/Types";

export const AuthUserCredentials = (
  setCookies: Function,
  payload: IAuthPayload,
  successCallBack: () => void,
  failCallBack: () => void
) => {
  return axios
    .post(`${baseUrl + authUrl}`, payload)
    .then((response) => {
      successCallBack();
      setTimeout(() => {
        setCookies("accessToken", response.data.accessToken, {
          expires: new Date(Date.now() + 2 * (60 * 60 * 1000)),
        });
      }, 5000);
    })
    .catch(failCallBack);
};
