import { connect } from "react-redux";
import { getNews, getNewsCategory, searchNews } from "../actions";
import NavbarMenu from "../components/NavbarMenu";

const mapStateToProps = (state, ownProps) => ({
  defaultCategory: ownProps.categoryDflt
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetNews: () => dispatch(getNews()),
  onGetNewsCategory: (category) => dispatch(getNewsCategory(category)),
  onSearchNews: (word) => dispatch(searchNews(word))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMenu);
