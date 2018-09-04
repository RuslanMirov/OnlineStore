import React  from 'react'
import { Menu, Image, Popup, Button, List } from 'semantic-ui-react'

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)}>Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{ title }</List.Content>
    </List.Item>
    </List>
)

const MenuComponent = ({ totalPrice, totalCount, showSearch, setSearchBool, items }) => (

    <Menu inverted>

    <Menu.Item onClick={setSearchBool.bind(this, showSearch ? false :true)}>  Поиск </Menu.Item>

    <Menu.Item>  Итого: {totalPrice} </Menu.Item>
    <Popup
      trigger={
      <Menu.Item name="help" onClick={this.handleItemClick}>
      Корзина {totalCount}
    </Menu.Item>
   }
   content={items.map( book => <CartComponent key={book.id} { ...book }/> )}
   on="click"
   hideOnScroll
  />
  </Menu>
)

export default MenuComponent
