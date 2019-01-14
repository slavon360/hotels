import { createStore, compose } from 'redux';
import hotels from '../reducers/hotels';

const initStore = () => {
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Hotels',
      }) : compose;

  const store = createStore(
    hotels,
    composeEnhancers(),
  );
  return store;
};

export default initStore();
