import React from 'react'

export default function OrderProduct({response1}) {
    return (
        <>
            <tr>
                <td>
                    <select
                        className="form-control"
                        required
                        name="product"
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
                        <i className="fas fa-angle-down"></i>
                        <input className="input-number" type="text"
                            value="1" min="0" max="10" />
                        <i className="fas fa-angle-up"></i>
                    </div>
                </td>
                <td>
                    <h6>$20.00</h6>
                </td>
                {/* <td>
                    <button className="btn btn-danger btn-sm">Delete</button>
                </td> */}
            </tr>
        </>
    )
}
