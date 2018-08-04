import { connect } from "react-redux";
import AllPhotos from "../components/AllPhotos";

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    currentView: state.currentView,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSinglePhotoClick: (photo) =>
      dispatch({
        type: "TRIGGER_SINGLE_PHOTO",
        photo,
      }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPhotos);
