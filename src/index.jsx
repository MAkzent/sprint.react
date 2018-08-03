import React from "react";
import "./styles/styles.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppLink from "./containers/AppLink";
import thunk from "redux-thunk";
import { listObjects } from "../utils/index";

const getPhotosFromAWS = () => {
  return listObjects();
};

const storePhotos = (photos) => {
  return {
    type: "STORE_PHOTOS",
    photos,
  };
};

const showPhotosOnLoad = () => {
  return function(dispatch) {
    return getPhotosFromAWS().then((photos) => dispatch(storePhotos(photos)));
  };
};

const initialState = {
  currentView: "all",
  photos: [],
  selectedPhoto: "",
};

// Actions

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PHOTO_VIEW": {
      console.log("Photo has been toggled");
      return;
    }
    case "STORE_PHOTOS": {
      const photos = state.photos;
      let clone = [...photos];
      clone = action.photos;
      return {
        currentview: state.currentView,
        photos: clone,
        selectedPhoto: state.selectedPhoto,
      };
    }
  }
  return state;
};

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <AppLink />
  </Provider>,
  document.getElementById("root")
);
