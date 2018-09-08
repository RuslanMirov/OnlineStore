import React from 'react'
import axios from 'axios'

const getData = (Component) => {
  class GetData extends React.Component{
    componentDidMount(){
      const { setBooks } = this.props;
      // ES6 деструктивное присваевание эквивалент response => {response.data}
      axios.get('/books.json').then(({ data }) => {
      // Передаем результаты запроса в хранилище
        setBooks(data);
      })
    }

    render(){
      // Прокидываем свойства в App.jsx
      return <Component {...this.props}/>
    }
  }
     // Обязательно возвращаем компонент иначе получим ошибку при вызове
  return GetData
}

export default getData

// Компонент высшего порядка
// Делает запрос и пробрасывает через себя props в компонент App.jsx
