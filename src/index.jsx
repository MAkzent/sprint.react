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
      const cleanedPhotos = photos.map((photo) => {
        if (photo.Key !== "attack-boo-courage-10qHa9JgyXYcw0.html") {
          return photo.Key;
        }
        return "cateyes.jpeg";
      });
      dispatch(storePhotos(cleanedPhotos));
    });
  };
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_PHOTO_VIEW": {
      console.log("Photo has been toggled");
      return;
    }
    case "STORE_PHOTOS": {
      const newPhotos = action.photos;
      return {
        currentview: state.currentView,
        photos: newPhotos,
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
