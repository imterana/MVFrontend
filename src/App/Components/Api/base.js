import Cookies from 'js-cookie';

/**
 * Generates a request function for the provided API method.
 * @param {Object} methodData - an object with url and method fields.
 * @return {Function} - a function for calling the API method.
 */
export default function generateApiFunctionForMethod(methodData) {
  return function(params) {
    const {method, url} = methodData;
    const {data, requestUrl} = (() => {
      if (params == null) {
        return {data: null, requestUrl: url};
      }
      if (method == 'GET') {
        const data = null;
        const esc = encodeURIComponent;
        const query = Object.keys(params)
          .map((k) => `${esc(k)}=${esc(params[k])}`)
          .join('&');
        const requestUrl = `${url}?${query}`;
        return {data, requestUrl};
      } else {
        const requestUrl = url;
        const data = params;
        return {data, requestUrl};
      }
    })();
    return fetch(requestUrl, {
      method: method,
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: data != null ? JSON.stringify(data) : null,
      credentials: 'include',
    }).then(checkHtmlCodeAndParse)
      .then(checkJsonForStatus);
  };
}

/**
 * Fetch callback that checks if the http code is equal to 200
 * and starts json parsing.
 * @param {Response} response - fetch response
 * @return {Promise} - json parse promise
 */
function checkHtmlCodeAndParse(response) {
  const {status, statusText} = response;
  if (status != 200) {
    throw new HttpError(status, statusText);
  }
  return response.json();
}

/**
 * Json parse callback that checks if the status code is not zero and
 * returns response part of the json.
 * @param {Object} json - parsed api response
 * @return {Object} - response part of the api response
 */
function checkJsonForStatus(json) {
  const {error, error_msg, response} = json;
  if (error != 0) {
    throw new ApiError(error, error_msg);
  } else {
    return response;
  }
}

/**
 * An error raised when some unusual HTTP code is returned by fetch.
 * @class HttpError
 * @param {Number} code - HTTP status code.
 * @param {String} statusText - HTTP status text.
 */
function HttpError(code, statusText) {
  this.code = code;
  this.message = statusText;
  this.stack = (new Error()).stack;
}
HttpError.prototype = Object.create(Error.prototype);
HttpError.prototype.constructor = HttpError;
HttpError.prototype.name = 'HttpError';

/**
 * An error raised when the api call return non-zero status code
 * @class HttpError
 * @param {Number} code - Api status code
 * @param {String} errorMsg - Api error_msg
 */
function ApiError(code, errorMsg) {
  this.code = code;
  this.message = errorMsg;
  this.stack = (new Error()).stack;
}
ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;
ApiError.prototype.name = 'ApiError';

const baseApiUrl = '/api/';
export {baseApiUrl, HttpError, ApiError};
