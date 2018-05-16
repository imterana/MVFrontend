import generateApiFunctionForMethod, {baseApiUrl} from './base';

const baseAuthApiUrl = `${baseApiUrl}auth/`;

export const methods = {
  getCurrentUserId: {
    url: `${baseAuthApiUrl}GetCurrentUserId`,
    method: 'GET',
  },
};

Object.keys(methods).forEach((key) => {
  module.exports[key] = generateApiFunctionForMethod(methods[key]);
});
module.exports.baseUrl = baseAuthApiUrl;
