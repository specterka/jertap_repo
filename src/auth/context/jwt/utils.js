import { paths } from 'src/routes/paths';

import axios from 'src/utils/axios';
import { saveData, removeAll } from 'src/utils/storage';

import { STORAGE_KEYS } from 'src/constants';

function jwtDecode(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}

// ----------------------------------------------------------------------

export const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

// ----------------------------------------------------------------------

export const tokenExpired = (exp) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer;

  const currentTime = Date.now();

  // Test token expires after 10s
  // const timeLeft = currentTime + 10000 - currentTime; // ~10s
  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    alert('Token expired');

    sessionStorage.removeItem('accessToken');

    window.location.href = paths.auth.jwt.login;
  }, timeLeft);
};

const handleTokenExpired = (exp, callback) => {
  if (typeof window !== 'undefined') {
    let expiredTimer;
    window.clearTimeout(expiredTimer);
    const currentTime = Date.now();
    const timeLeft = exp * 1000 - currentTime;
    expiredTimer = window.setTimeout(() => {
      callback();
    }, timeLeft);
  }
};

// ----------------------------------------------------------------------

export const setSession = (accessToken, refreshToken = '', callback = null, rTCallback = null) => {
  if (accessToken) {
    saveData(STORAGE_KEYS.AUTH_TOKEN, accessToken);
    saveData(STORAGE_KEYS.AUTH_REFRESH_TOKEN, refreshToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const { exp } = jwtDecode(accessToken);
    const { exp: expRt } = jwtDecode(refreshToken);
    handleTokenExpired(exp, callback);
    handleTokenExpired(expRt, rTCallback);
  } else {
    removeAll();
    delete axios.defaults.headers.common.Authorization;
  }
};