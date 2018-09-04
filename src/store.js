import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';

export default () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};


/*
createStore - создаем хранилище, передаем в него главный редюсер который объеденяет все редюсеры


applyMiddleware(logger)
applyMiddleware - для создания посредлника
logger - библиотека для отслеживания всех изменений в хранилище, через консоль
*/
