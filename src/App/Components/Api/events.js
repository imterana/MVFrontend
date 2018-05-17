import generateApiFunctionForMethod, {baseApiUrl} from './base';

const baseEventsApiUrl = `${baseApiUrl}events/`;

export const methods = {
  createEvent: {
    url: `${baseEventsApiUrl}CreateEvent`,
    method: 'POST',
  },
  getEvents: {
    url: `${baseEventsApiUrl}GetEvents`,
    method: 'GET',
  },
  joinEvent: {
    url: `${baseEventsApiUrl}JoinEvent`,
    method: 'POST',
  },
  leaveEvent: {
    url: `${baseEventsApiUrl}LeaveEvent`,
    method: 'POST',
  },
  deleteEvent: {
    url: `${baseEventsApiUrl}DeleteEvent`,
    method: 'POST',
  },
  getCreatedEvents: {
    url: `${baseEventsApiUrl}GetCreatedEvents`,
    method: 'GET',
  },
  getJoinedEvents: {
    url: `${baseEventsApiUrl}GetJoinedEvents`,
    method: 'GET',
  },
};

Object.keys(methods).forEach((key) => {
  module.exports[key] = generateApiFunctionForMethod(methods[key]);
});
module.exports.baseUrl = baseEventsApiUrl;
