import React from 'react'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component'

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  
  return (
    <div className="collection-item">
      <div className="image" style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton inverted onClick={() => {console.log(item); addItem(item);}}>ADD TO CART</CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => { dispatch(addItem(item)) }
});

export default connect(null, mapDispatchToProps)(CollectionItem);