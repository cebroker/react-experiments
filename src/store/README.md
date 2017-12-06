## What is this folder for?

This folder is for holding all the reducers that compose your `Global state`.

For instance the `loggedInUser` is a folder that contains all the code related to the `loggedInUser` reducer.

This means that inside that folder you should find:

* The `actions` folder:
    
    Contains all the `action creators` your component or containers will dispatch.

* The `reducers` folder

  Contains all the `subreducers` that you will combine to make the main reducer, also this folder contain the `selectors` file that contains  all the code you need to get data from the reducers.

* The `sagas` folder:

    Contains all the necessary code to make the side effects of your application.

* The `index.js` file that should export all the parts of the reducer in a standard way to use them easily inside the components or containers.


Also this folder you should find all the configurations related to the `Store` itself.

* The `rootReducer.js` file will contains the code to combine all the reducers you write in separated folder into one big global store.

* The `rootSaga.js` file will contains the code to combine all the sagas you write in separated folder into one big saga to synchronize it with the global store.

* The `configureStore.js` file will contains the code to build all the store from the `rooReducer` file and run the sagas from the `rootSaga` file.