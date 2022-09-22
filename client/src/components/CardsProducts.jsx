import React from 'react';

const CardsProducts = (props) => {
    const product = props.data
  return (
    <div >
      <div class="ui link cards">
        <div class="card" style={{ width: '24rem' , backgroundColor:'rgb(240, 240, 238)'}}>
          <div class="image">
                  <img src= {`http://localhost:4001/${product.image}`}  alt="" />
          </div>
          <div class="content">
            <div class="header">{product.title}</div>
            
            <div class="description">
            {product.desc}
            </div>
            <div>
               <p style={{color:'red'}}>{`Price: ${product.price} ৳`}</p>
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
            <button class="big ui  orange button" style={{width:'10rem'}}>Buy</button>
            <button class="big ui black button" style={{width:'10rem'}}>Add Cart</button>

            </span>
            <span>
              
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default CardsProducts;