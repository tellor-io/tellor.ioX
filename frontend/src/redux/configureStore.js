import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

//returns configured store, will be called when app launches and browser refreshes
export default function configureStore(persistedState) {

  const store = createStore(
    persistedReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );

  const persistor = persistStore(store);
  
  return { store, persistor };
}
