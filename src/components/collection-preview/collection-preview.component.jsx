import React from 'react'

import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => (
  <div class="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div class="preview">
      {items.map(item => 
        <div key={item.id} class="item">
          <h3>{item.name.toUpperCase()}</h3>
        </div>)
      }
    </div>
  </div>
);

export default CollectionPreview;