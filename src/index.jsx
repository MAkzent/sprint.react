import React from "react";
import "./styles/styles.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import AppLink from "./containers/AppLink";
import thunk from "redux-thunk";
import { listObjects } from "./utils/index";

const initialState = {
  currentView: "all",
  photos: [],
  selectedPhoto: "",
};

// Actions

const storePhotos = (photos) => {
  return {
    type: "STORE_PHOTOS",
    photos,
  };
};

export function getAWSImages() {
  return function(dispatch) {
    return listObjects().then((photos) => {
      const allPhotos = photos.map((photo) => {
        return photo.Key;
      });
      dispatch(storePhotos(allPhotos));
    });
  };
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PHOTO_VIEW": {
      return {
        currentView: "all",
        photos: state.photos,
        selectedPhoto: state.selectedPhoto,
      };
    }
    case "STORE_PHOTOS": {
      const newPhotos = action.photos;
      return {
        currentView: state.currentView,
        photos: newPhotos,
        selectedPhoto: state.selectedPhoto,
      };
    }
    case "TRIGGER_SINGLE_PHOTO": {
      return {
        currentView: "single",
        photos: state.photos,
        selectedPhoto: action.photo,
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
