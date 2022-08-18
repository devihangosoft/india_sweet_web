import React, {useState} from 'react'
import * as Icon from "react-feather";
export default function OrderProduct({row, response1, productvalues, updateQuantity, sendProducts}) {
    const [quantity, setQuantity] = useState('1');
    const selectProduct = (e) =>{        
        let value = {item: e.target.value, quantity: quantity};
        sendProducts(value, row);
    }

    const changeQuantity = (e)=>{
       setQuantity(e.target.value)
       updateQuantity(e.target.value, row)
    }



    return (
        <>
            <tr>
                <td>
                    <select
                        className="form-control"
                        required
                        name="product"
                        onChange={selectProduct}
                    >
                        <option>Select</option>
                        {
                            response1 != null ?
                                response1.map((item, index) => {
                                    return <option value={item.product_name}>{item.product_name}</option>
                                })
                                : console.log("No Branch data found")
                        }


                    </select>

                </td>
                <td>
                    <h6>$20.00</h6>
                </td>
                <td>
                    <div className="counter">
                       {/* <Icon.Plus /> */}
                        <input className="input-number" type="number"
                             min="0" value={quantity} onChange={changeQuantity} />
                        {/* <Icon.Minus/> */}
                    </div>
                </td>
                {/* <td>
                    <h6>$20.00</h6>
                </td> */}
                {/* <td>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td> */}
            </tr>
        </>
    )
}
