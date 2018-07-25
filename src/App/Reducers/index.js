const initialState = {
  // User ID from the backend, or null if the user isn't logged in.
  userId: undefined,
};

const markAsVisited = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER_ID':
        return {
          ...state,
          userId: action.userId,
        };
    }
    return state;
};

export {markAsVisited};
