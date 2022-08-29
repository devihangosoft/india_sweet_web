import React, {useState} from 'react'
import * as Icon from "react-feather";
export default function OrderProduct({row, response1, updateQuantity, sendProducts, DeleteProductRow}) {
    const [quantity, setQuantity] = useState('1');
    const selectProduct = (e) =>{        
        let value = {item: e.target.value, quantity: quantity};
        sendProducts(value, row);
    }

    const changeQuantity = (e)=>{
       setQuantity(e.target.value)
       updateQuantity(e.target.value, row)
    }

    const DeleteRow = (e)=>{
        DeleteProductRow(row)
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
                         <option value="" selected disabled hidden>--select--</option>
                        
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
                    500g
                </td>
                <td className=''>
                    <div className="counter">
                       {/* <Icon.Plus /> */}
                        <input className="input-number " type="number" style={{width:70}}
                             min="0" value={quantity} onChange={changeQuantity} />
                        {/* <Icon.Minus/> */}
                    </div>
                </td>

                <td>
                   jhssfgds dsgkdsg sdfjsdg jhssfgds dsgkdsg sdfjsdgjhssfgds dsgkdsg sdfjsdgjhssfgds dsgkdsg sdfjsdg
                </td>
                <td>
                    
                    <button className="border-0 bg-transparent"><Icon.Trash color='red' onClick={DeleteRow}/></button>
                </td>
            </tr>
        </>
    )
}
