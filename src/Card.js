import iphone_img1 from './iphone_img1.jpg'
function Card({product,addCart,CartItems}){
    return <div className='col-lg-4 border p-3 mt-3'>
              <div className='row'>
                <div  className='col-lg-12'>
                  <img className="fluid " src={product.image} width="250px" height="150px"/>
                </div>
                <div className='col-lg-12'>
                  <h3>{product.name}</h3>
                  <h6>{product.price}</h6>
                  <button disabled={CartItems.some(obj => obj.id===product.id)} onClick={()=>addCart(product)} className='btn btn-sm btn-primary'>
                   {CartItems.some(obj => obj.id===product.id)?"Added to Cart":"Add to Cart"} 
                    </button>
                </div>
              </div>
            </div>
    
}
export default Card