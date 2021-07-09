// import {BASE_URL} from 'react-native-dotenv';

// import {abortRequestError} from '../constants/httpErrors';
// import {history} from '../redux/configureStore';
// import qs from '../utils/formatters/queryStringFormatter';
// import getEnv from '../utils/getEnv';
// import ToastController from '../UI/ToastController';
// import LocalStorage from '../utils/localStorage';

// const {REACT_APP_MOCK_BACKEND} = process.env;

// export const baseUrl = getEnv(
//   BASE_URL,
//   'https://backend-dev-qwertyuiop.canopy.rent',
// );

// if (REACT_APP_MOCK_BACKEND) {
//   require('./__mocks__'); // eslint-disable-line global-require
// }

// let token = false;

// export const setToken = value => {
//   token = value;
// };

// export const unsetToken = () => {
//   token = false;
// };

// const getAmazonRequestOptions = () => ({
//   mode: 'no-cors',
//   cache: 'no-cache',
//   headers: {
//     // ...options,
//   },
// });

// export const getRequestOptions = async () => {
//   const sandboxMode = await LocalStorage.getItem('sandboxMode');
//   const sandboxModeParsed = JSON.parse(sandboxMode);

//   const options = {
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: {
//       'Accept-Version': '2.480',
//       'Content-Type': 'application/json; charset=utf-8',
//       'Access-Control-Request-Headers': 'Content-Type',
//     },
//   };

//   if (sandboxModeParsed) {
//     options.headers['Sandbox-Mode'] = true;
//   }

//   if (token) {
//     options.headers.Authorization = `Bearer ${token}`;
//   }

//   return options;
// };

// const fetchError = response => {
//   if (response && response.error) {
//     throw {error: response.error}; // eslint-disable-line no-throw-literal
//   } else {
//     throw {error: {message: 'Something went wrong!'}}; // eslint-disable-line no-throw-literal
//   }
// };

// const throwErrorResponse = resp => {
//   throw resp;
// };

// const processResponse = async resp => {
//   const {pathname, search} = history.location;

//   if (resp.status === 503) {
//     return history.replace('/server-unavailable');
//   }

//   if (resp.status === 401) {
//     ToastController.showError({title: 'User session has expired'});

//     return history.push('/auth/logout', {from: pathname + search});
//   }

//   const body = await resp.json();

//   if (body.data === null || body.data === undefined) {
//     return resp.ok ? body : throwErrorResponse(body);
//   }

//   return resp.ok && body.success ? body.data : throwErrorResponse(body.error);
// };

// export const get = async (url, params = {}) => {
//   const options = await getRequestOptions();
//   const response = await fetch(`${baseUrl}${url}${qs(params)}`, {
//     ...options,
//     method: 'GET',
//   }).catch(fetchError);

//   return processResponse(response);
// };

// export const post = async (url, body = {}) => {
//   const options = await getRequestOptions();
//   const fetchOpts = {
//     ...options,
//     method: 'POST',
//     body: JSON.stringify(body),
//   };

//   const response = await fetch(`${baseUrl}${url}`, fetchOpts).catch(err => {
//     fetchError(err);
//   });

//   return processResponse(response);
// };

// export const put = async (url, body = {}) => {
//   const options = await getRequestOptions();
//   const response = await fetch(`${baseUrl}${url}`, {
//     ...options,
//     method: 'PUT',
//     body: JSON.stringify(body),
//   }).catch(fetchError);

//   return processResponse(response);
// };

// export const patch = async (url, body = {}) => {
//   const options = await getRequestOptions();
//   const response = await fetch(`${baseUrl}${url}`, {
//     ...options,
//     method: 'PATCH',
//     body: JSON.stringify(body),
//   }).catch(fetchError);

//   return processResponse(response);
// };

// export const del = async (url, body = {}) => {
//   const options = await getRequestOptions();
//   const response = await fetch(`${baseUrl}${url}`, {
//     ...options,
//     method: 'DELETE',
//     body: JSON.stringify(body),
//   }).catch(fetchError);

//   return processResponse(response);
// };

// const setOptionsForXHR = (xhr, options) => {
//   xhr.setRequestHeader('Cache-Control', options.cache);
// };

// export const postFileWithProgress = async ({
//   url,
//   data,
//   fileName,
//   onProgress,
//   onSetAbortFunc,
// }) =>
//   new Promise((res, rej) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', url, true);

//     setOptionsForXHR(xhr, getAmazonRequestOptions());

//     onSetAbortFunc(() => xhr.abort(), fileName);

//     xhr.upload.onprogress = event =>
//       onProgress(Math.round((event.loaded * 100) / event.total), fileName);

//     xhr.onloadend = () => {
//       if (xhr.status === 204) {
//         res();
//       }

//       if (xhr.status === 0) {
//         rej(Error(abortRequestError));
//       }

//       rej(Error(xhr.status));
//     };

//     xhr.send(data);
//   });
