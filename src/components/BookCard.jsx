import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'
// ES6 деструктивное присваевание, приннимает и разворачивает параметры в App.js через спред ...book
const BookCard = ( book ) => {

  const {title, author, image, price, addToCart, addedCount} = book
return (
  <Card>
    <Image src={image}/>
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>{author}</Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
          <Icon name='rub' />
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, book)}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
  </Card>
)
}

export default BookCard
