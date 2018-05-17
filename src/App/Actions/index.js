/**
 * Generates an action to log user in with an id.
 * @param {Object} userId - User id.
 * @return {Object} - Log in action.
 */
function setUserId(userId) {
  return {
    type: 'SET_USER_ID',
    userId: userId,
  };
}

export {setUserId};
