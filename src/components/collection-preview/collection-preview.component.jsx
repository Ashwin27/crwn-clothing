import React from 'react'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-preview.component'

const CollectionPreview = ({title, items}) => (
  <div class="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div class="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => 
        <CollectionItem key={id} {...otherItemProps} />)
      }
    </div>
  </div>
);

export default CollectionPreview;