import { connect } from "react-redux";
import Navbar from "../components/Navbar";

const mapDispatchToProps = (dispatch) => {
  return {
    togglePhotoView: () =>
      dispatch({
        type: "TOGGLE_PHOTO_VIEW",
      }),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Navbar);
