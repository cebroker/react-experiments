// fetchLoggedInUser emulates a http request and returns the user object after 500 milliseconds
export const fetchLoggedInUser = () =>
  new Promise((res, rej) => {
    setTimeout(() => res({ firstName: 'Jhon', lastName: 'Doe' }), 500);
  });
