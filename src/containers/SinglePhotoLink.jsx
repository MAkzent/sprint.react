import { connect } from "react-redux";
import { SinglePhoto } from "../components/SinglePhoto";

const mapStateToProps = (state) => {
  return {
    selectedPhoto: state.selectedPhoto,
  };
};

export default connect(mapStateToProps)(SinglePhoto);
