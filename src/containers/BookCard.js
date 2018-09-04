import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../actions/cart'
import BookCard from '../components/BookCard'


const MapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce(
    (count, book) => count + (book.id === id ? 1 : 0),
    0
  )
})

const MapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
})

export default connect(MapStateToProps, MapDispatchToProps)(BookCard);
