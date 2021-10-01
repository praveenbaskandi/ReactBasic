// import {history} from '../redux/configureStore';
import qs from '../utils/formatter/queryStringFormatter';
import ToastController from '../UI/ToastController';
import LocalStorage from '../utils/localStorage';

export const baseUrl = 'https://mocki.io/v1';

let token = false;

export const setToken = value => {
  token = value;
};

export const unsetToken = () => {
  token = false;
};

export const getRequestOptions = async () => {
  const sandboxMode = await LocalStorage.getItem('sandboxMode');
  const sandboxModeParsed = JSON.parse(sandboxMode);

  const options = {
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'app-id': '0JyYiOQXQQr5H9OEn21312',
    },
  };

  //   if (sandboxModeParsed) {
  //     options.headers['Sandbox-Mode'] = true;
  //   }

  //   if (token) {
  //     options.headers.Authorization = `Bearer ${token}`;
  //   }

  return options;
};

const fetchError = response => {
  if (response && response.error) {
    throw {error: response.error}; // eslint-disable-line no-throw-literal
  } else {
    throw {error: {message: 'Something went wrong!'}}; // eslint-disable-line no-throw-literal
  }
};

const throwErrorResponse = resp => {
  throw resp;
};

const processResponse = async resp => {
  //   const {pathname, search} = history.location;

  //   if (resp.status === 503) {
  //     return history.replace('/server-unavailable');
  //   }

  //   if (resp.status === 401) {
  //     ToastController.showError({title: 'User session has expired'});

  //     return history.push('/auth/logout', {from: pathname + search});
  //   }

  const body = await resp.json();

  if (body.data === null || body.data === undefined) {
    return resp.ok ? body : throwErrorResponse(body);
  }

  return resp.ok && body.success ? body.data : throwErrorResponse(body.error);
};

export const get = async (url, params = {}) => {
  // const options = await getRequestOptions();
  const response = await fetch(`${baseUrl}${url}${qs(params)}`, {
    method: 'GET',
  }).catch(fetchError);

  return processResponse(response);
};

export const post = async (url, body = {}) => {
  const options = await getRequestOptions();
  const fetchOpts = {
    ...options,
    method: 'POST',
    body: JSON.stringify(body),
  };

  const response = await fetch(`${baseUrl}${url}`, fetchOpts).catch(err => {
    fetchError(err);
  });

  return processResponse(response);
};

export const put = async (url, body = {}) => {
  const options = await getRequestOptions();
  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(body),
  }).catch(fetchError);

  return processResponse(response);
};

export const patch = async (url, body = {}) => {
  const options = await getRequestOptions();
  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(body),
  }).catch(fetchError);

  return processResponse(response);
};

export const del = async (url, body = {}) => {
  const options = await getRequestOptions();
  const response = await fetch(`${baseUrl}${url}`, {
    ...options,
    method: 'DELETE',
    body: JSON.stringify(body),
  }).catch(fetchError);

  return processResponse(response);
};
