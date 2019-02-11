import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { uploadReducer } from "./uploadReducer";

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  upload: uploadReducer
});
