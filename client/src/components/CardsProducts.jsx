import React from 'react';
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




const CardsProducts = (props) => {
  const product = props.data
  const navigate = useNavigate()

  return (
    <div >
      <div class="ui link cards">
            <div class="card" onClick={() => navigate(`/productDetail?id=${product._id}`)} style={{ width: '24rem', boxShadow: 'none', height: '50rem' }}>
                  <div class="image" style={{height:'55%',marginBottom:'10%'}}>
                            <img src={`http://localhost:4001/${product.image}`} alt="" style={{height:'100%',objectFit:'cover'}}/>
                  </div>

                  <div class="content" style={{height:'40%'}}>
                          <div class="header">{product.title}</div>
                          <div class="description">
                                 {product.desc}
                          </div>
                          <div>
                                 <p style={{ color: 'red' }}>{`Price: ${product.price} ৳`}</p>
                          </div>
                  </div>

            </div>

      </div>

    </div>
  );
};

export default CardsProducts;