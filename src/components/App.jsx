import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import BookCard from '../containers/BookCard'
import { Card } from 'semantic-ui-react'
import Filter from '../containers/Filter'
import Menu from '../containers/Menu'


class App extends Component {

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
