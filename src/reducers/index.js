import { combineReducers } from 'redux'
import books from './books'
import cart from './cart'
import filter from './filter'

export default combineReducers({
  books,
  cart,
  filter
})


/*
combineReducers - комбинирует все редюсеры в один

Редьюсеры (reducers) — это функции, которые обрабатывают экшены и могут вносить изменения в состояние.

ГЛАВНОЕ ПРАВИЛО НЕ ЗАМЕНЯЕМ, А ПРИСОЕДЕНЯЕМ
*/
