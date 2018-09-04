import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import App from '../components/App.jsx'
import * as booksActions from '../actions/books'
import orderBy from 'lodash/orderBy'

// Сортировка по значению (цена, алфавитный порядок)
const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'expensive':
        return orderBy(books, 'price, desk');

    case 'cheap':
        return orderBy(books, 'price', 'asc');

    case 'author':
        return orderBy(books, 'author', 'desk');
    default:
         return books;

  }
}

// Сортировка по инпуту
const filterBooks = (books, searchQuery) =>
   books.filter(
     i =>
       i.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
       i.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
)

// Вызов
const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy)
}

// Переводим сосотояния в свойство
const MapStateToProps = ({ books, filter, cart }) => ({
  books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
  showSearh: cart.showSearch
})

// Переводим диспатч (метод для отправки экшенов) в свойство
const MapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch)
})

export default connect(MapStateToProps, MapDispatchToProps)(App);

/*
1
react-redux - вспомогательная библиотека которая связывает React c Redux
С помощью connect мы можем пробрасывать свойства и функции в App
Назначение функции connect вытекает из названия: подключи React компонент к Redux store.

В данном примере мы пробрасываем функции
MapStateToProps и MapDispatchToProps
которые возвращают состояния и диспатчи
dispatch - отправляет action

2
setBooks - action с параметром books
Экшен содержит тип и другие данные, необходимые для обновления — в данном случае, информацию о пользователе.

3
bindActionCreators - связывает все экшены
Чтобы не пришлось писать так
actionOne: value => dispatch(actionOne(value))
actionTwo: value => dispatch(actionTwo(value))
actionThree: value => dispatch(actionThree(value))
actionFour: value => dispatch(actionFour(value))
actionFive: value => dispatch(actionFive(value))
и так далее

4
books && эквивалент if(books !=== null)
*/
