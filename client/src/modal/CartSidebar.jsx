import React,{useContext} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Swal from 'sweetalert2'
import { CartContext } from '../App';
import styles from '../styles/cartSidebar.module.css'
import { useNavigate } from 'react-router-dom';

export  const TemporaryDrawer=()=> {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const {cartProduct, setCartProduct} = useContext(CartContext)
   
    
   let token = localStorage.getItem('token')
   const navigate = useNavigate()
  
  const removeProduct = (product_id)=>{
  const id = product_id
    Swal.fire({
            title: 'Are you sure?',
            text: "This product will not be availabe in cart!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
              fetch(`http://localhost:4001/api/cart/delete/${id}`,{
                   method:'PUT',
                   headers:{
                      'token': `${token}`
                   }
              })
                 .then(res=>{
                        if(res.status === 200){
                             const newCart = cartProduct.filter(data=>{
                                  if(data._id !== id){
                                     return data
                                  }
                             })

                             setCartProduct(newCart)
                              Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success',
                                   
                                   )
                        }                   
                 })
                        
        }
      })
  }





    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={styles.container}>
                <p style={{textAlign:'center',backgroundColor:'#a29bfe',padding:'2rem 0', color:'white',fontSize:'2rem'}}>Total products: {}</p>
                
                {cartProduct.map(product => (
                    <div className={styles.wrapper}>
                            <div className={styles.left}>
                                <img src={`http://localhost:4001/${product.image}`} alt="" />
                            </div>

                            <div className={styles.right}>
                                <h1>{product.title}</h1>
                                <p>{product.desc}</p>
                                <Button variant="outlined" onClick={()=>navigate(`/productDetail?id=${product._id}`)} style={{marginRight:'1rem'}}>BUY</Button>
                                <Button variant="outlined" onClick={()=>removeProduct(product._id)}>remove</Button>

                            </div>
                    </div>
                ))}

            </div>

        </Box>
    );

  
    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <Button onClick={toggleDrawer(anchor, true)}>
                        <Badge color="secondary" badgeContent={1000} max={9} style={{ marginLeft: '3rem' }}>
                            <ShoppingCartCheckoutIcon style={{ fontSize: '3rem' }} />
                        </Badge>
                        <Badge color="secondary" badgeContent={1000} max={9} style={{ marginLeft: '3rem' }}>
                            <FavoriteBorderIcon style={{ fontSize: '3rem' }} />
                        </Badge>
                    </Button>

                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
   
}
