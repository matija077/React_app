import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectorIsCollectionLoaded } from '../../redux/shop/shop.selectors';

import SpinnerWrapper from '../../components/spinner/spinnerWrapper.component';
import CollectionPage from './collection';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectorIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    SpinnerWrapper
)(CollectionPage);

export default CollectionsPageContainer;