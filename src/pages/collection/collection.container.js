import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectorIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/spinner/with-spinner.component';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectorIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionsPageContainer;