import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'semantic-ui-react'
import BookCard from '../containers/BookCard'
import { Card } from 'semantic-ui-react'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'


class App extends Component {

componentWillMount(){
  const { setBooks } = this.props;
  // ES6 деструктивное присваевание эквивалент response => {response.data}
  axios.get('/books.json').then(({ data }) => {
    setBooks(data);
  })
}

render(){
  const { books, isReady, showSearh} = this.props;
  //console.log(books)
  return(
    <Container>
    <Menu />
    {!showSearh
     ? null
     : <Filter />
    }
   <Card.Group itemsPerRow={4}>
      {!isReady
        ?'Загрузка...'
        : books.map(book =>
          <BookCard {...book} key={book.id} />
        )}
      </Card.Group>

  </Container>
  )
 }
}

export default App;
