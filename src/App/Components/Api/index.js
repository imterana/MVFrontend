import * as events from './events';
import * as profile from './profile';
import * as auth from './auth';

const websocketHost = window.location.host.split(':')[0];

export {profile, events, auth, websocketHost};
