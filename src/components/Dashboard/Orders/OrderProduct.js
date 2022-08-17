import React from 'react'
import * as Icon from "react-feather";
export default function OrderProduct({response1, productvalues, sendProducts}) {
    const selectProduct = (e) =>{
        console.log(productvalues);
        sendProducts(e.target.value);
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
                       <Icon.Plus />
                        <input className="input-number" type="text"
                             min="0" max="10" />
                        <Icon.Minus/>
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
