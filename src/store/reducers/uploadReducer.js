const initState = {};
export const uploadReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPLOADED_FILE":
      return { ...state, uploadError: null };
    case "UPLOAD_ERROR":
      return { ...state, uploadError: action.e.message };
    default:
      return state;
  }
};
