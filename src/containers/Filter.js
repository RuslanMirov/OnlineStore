import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as filterActions from '../actions/filter'
import Filter from '../components/Filter'


const MapStateToProps = ({ filter, cart }) => ({
  filterBy: filter.filterBy,
})

const MapDispatchToProps = dispatch => ({
  ...bindActionCreators(filterActions, dispatch)
})

export default connect(MapStateToProps, MapDispatchToProps)(Filter);
