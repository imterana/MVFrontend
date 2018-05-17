import generateApiFunctionForMethod, {baseApiUrl} from './base';

const baseProfileApiUrl = `${baseApiUrl}profile/`;

export const methods = {
  getProfile: {
    url: `${baseProfileApiUrl}GetProfile`,
    method: 'GET',
  },
  updateProfilePicture: {
    url: `${baseProfileApiUrl}UpdateProfilePicture`,
    method: 'POST',
  },
  updateProfileInfo: {
    url: `${baseProfileApiUrl}UpdateProfileInfo`,
    method: 'POST',
  },
  uploadProfileConfirmation: {
    url: `${baseProfileApiUrl}UpdateProfileConfirmation`,
    method: 'POST',
  },
  findByName: {
    url: `${baseProfileApiUrl}FindByName`,
    method: 'GET',
  },
};

Object.keys(methods).forEach((key) => {
  module.exports[key] = generateApiFunctionForMethod(methods[key]);
});
module.exports.baseUrl = baseProfileApiUrl;
