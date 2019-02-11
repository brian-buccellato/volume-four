export const uploadPhoto = upload => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const fireBase = getFirebase();
    const storage = fireBase.storage();
    const bucketRef = storage.ref(`${upload.path}/${upload.image["name"]}`);
    bucketRef
      .put(upload.image)
      .then(() => {
        dispatch({ type: "UPLOADED_FILE" });
      })
      .catch(e => {
        dispatch({ type: "UPLOAD_ERROR" });
      });
  };
};
