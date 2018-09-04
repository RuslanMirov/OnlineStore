import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../actions/cart'
import Menu from '../components/MenuComponent'


const MapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, book, cart) => total + book.price, 0),
  totalCount: cart.items.length,
  showSearch: cart.showSearch,
  items: cart.items
})

const MapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
})

export default connect(MapStateToProps, MapDispatchToProps)(Menu);
