const initialState = {
  userId: null,
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
