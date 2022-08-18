import React, {useState, useEffect} from 'react'
import useAxios from '../../../hooks/useAxios';

export default function Neworder() {

    
  const [apiState1, setapiState1] = useState(1);
  const { response: response, loading: loading1, error: error1 } = useAxios({
      method: "get",
      url: "/getdisposition",
      apiState: apiState1,
  });

  useEffect(() => {
      if (response !== null) {
        //   console.log("disposition data : ", response);
      }

      const resMessage =
          (error1.response && error1.response.data && error1.response.data.message) ||
          error1.message ||
          error1.toString();
      console.log(resMessage)
  }, [response, error1]);



  return (
    <>
        <div className="col-md-12 form-group mt-3 ">
                                    <div className="cart">
                                        <div className="table-responsive ">
                                            <table className="table table-bordered mb-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Comments</th>
                                                        <th scope="col">Action</th>
                                                        {/* <th scope="col">Total</th> */}
                                                        {/* <th scope="col">Action</th> */}

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                <tr>
                <td>
                    <select
                        className="form-control"
                        required
                        name="product"
                        // onChange={selectProduct}
                    >
                        <option>Select</option>
                        {
                            response != null?
                                response.map((item, index) => {
                                    return <option value={item.disposition_name}>{item.disposition_name}</option>
                                })
                                : console.log("No Branch data found")
                        }


                    </select>

                </td>
                
                <td>
                    <div className="counter">
                        <input className="input-number" type="text"
                             min="0"  />
                    </div>
                </td>
                <td>
                  <div>
                    <button className="btn-primary">UPDATE</button>
                  </div>
                </td>
                
            </tr>
                                                    
                                                    </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

    </>
  )
}
