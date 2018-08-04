import { connect } from "react-redux";
import App from "../components/App";
import { getAWSImages } from "../index";

const mapStateToProps = (state) => {
  return {
    currentView: state.currentView,
    photos: state.photos,
    selectedPhoto: state.selectedPhoto,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storePhotos: () => dispatch(getAWSImages()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
