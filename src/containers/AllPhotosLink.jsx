import { connect } from "react-redux";
import AllPhotos from "../components/AllPhotos";

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
    currentView: state.currentView,
  };
};

export default connect(mapStateToProps)(AllPhotos);
