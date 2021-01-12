import { connect } from "react-redux";
import { getNews, getNewsCategory } from "../actions";
import NewList from "../components/NewList";

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetNews: () => dispatch(getNews()),
  onGetNewsCategory: (category) => dispatch(getNewsCategory(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewList);
