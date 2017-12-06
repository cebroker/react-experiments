import { connect } from 'react-redux';
import { actions, selectors } from '../store/loggedInUser';
import { App } from '../components';

function mapStateToProps(state) {
  const loggedInUser = selectors(state);
  return {
    user: loggedInUser.getUser(),
    userFetchStatus: loggedInUser.getFetchStatus()
  };
}

export default connect(mapStateToProps, {
  fetchLoggedInUser: actions.fetch
})(App);
