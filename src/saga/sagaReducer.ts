export const FETCHLIST = "FETCHLIST";
export const SETUSERS = "SETUSERS";

const initialState = {
  sagaList: null,
};

export const sagaReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SETUSERS: {
      console.log("redux", action.payload);

      return {
        ...state,
        sagaList: action.payload.items,
      };
    }

    default:
      return state;
  }
};

export const setSagaList = (sagaList: any) => ({
  type: SETUSERS,
  payload: sagaList,
});

export const fetchSagaList = () => ({
  type: FETCHLIST,
});
