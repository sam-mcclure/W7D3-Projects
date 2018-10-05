import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  return {
    itemId: ownProps.match.params.itemId,
    items: state.entities.items
  };
};

export default connect(mapStateToProps)(ItemDetail);
