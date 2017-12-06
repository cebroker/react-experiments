export default function(globalState) {
  const state = globalState.loggedInUser;

  const getUser = () => state.user;

  const getFetchStatus = () => state.fetchStatus;

  return {
    getUser,
    getFetchStatus
  };
}
