const SETLIST = "SETLIST";
const SETISLOADING = "SETISLOADING";

const initialState = {
  isLoading: false,
  githubList: null,
};

export const githubReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SETLIST: {
      return {
        ...state,
        githubList: action.payload.items,
      };
    }
    case SETISLOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setGithubList = (githubList: any) => ({
  type: SETLIST,
  payload: githubList,
});

export const setIsLoading = (isLoading: boolean) => ({
  type: SETISLOADING,
  payload: isLoading,
});
