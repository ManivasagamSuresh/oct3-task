import React from 'react'

function Cart({ CartItems, removeCart }) {
    return (
       <>
       {
        CartItems.length === 0 ? "No Items in Cart" :
       <>

            <ol class="list-group list-group-numbered">
                {
                    CartItems.map((item) => {
                        return <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">{item.name}</div>
                                Rs:{item.price}
                            </div>
                            <span onClick={() => {
                                removeCart(item);
                            }} class="badge bg-primary rounded-pill">X</span>
                        </li>
                    })
                }

            </ol>
            <h3>Total Rs= {
                CartItems.reduce((acc, cur) => {
                    return acc = acc + cur.price
                }, 0)

            }</h3>

        </>
       }
       </>
    )
}

export default Cart