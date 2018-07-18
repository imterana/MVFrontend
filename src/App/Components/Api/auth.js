import generateApiFunctionForMethod, {baseApiUrl} from './base';

const baseAuthApiUrl = `${baseApiUrl}auth/`;

export const methods = {
  getCurrentUserId: {
    url: `${baseAuthApiUrl}GetCurrentUserId`,
    method: 'GET',
  },
  logout: {
    url: '/accounts/logout/',
    method: 'POST',
  },
};

Object.keys(methods).forEach((key) => {
  module.exports[key] = generateApiFunctionForMethod(methods[key]);
});
module.exports.baseUrl = baseAuthApiUrl;
