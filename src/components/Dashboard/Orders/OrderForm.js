import React, { useState, useRef, useEffect } from "react";
import "../../Login/Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, NavLink, Navigate } from "react-router-dom";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";
import OrderProduct from "./OrderProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
// import CustomSelect from "./CustomSelect";

function OrderForm() {
    const [productrow, setProductrow] = useState([{
        proname: "",
        proquantity: ""
    }])
    const [productvalues, setProductvalues] = useState([

    ])
    const notify = () => toast("Order Placed Successfully");
    //let navigate = useNavigate();
    let name = /^[a-zA-Z ]+$/;
    const SignupSchema = Yup.object().shape({
        // quotation_number: Yup.string()
        //     .trim().required("Quotation number is required"),
        // // .matches(name, "Enter only Alphabets"),
        // customer_name: Yup.string()
        //     .trim().required("customer_name is required")
        //     .min(3, "customer_name must be at least 3 characters")
        //     .max(20, "customer_name must not exceed 20 characters"),
        // phone: Yup.string().trim().required("Phone number is required").min(10, "Mobile number should be 10 digit")
        //     .max(10, "Mobile number should be 10 digit"),
        // email: Yup.string()
        //     .trim().required("Email is required")
        //     .email("Email is invalid"),
        // whatsapp: Yup.string()
        //     .trim().required("Whatsapp is required"),
        // // doorno: Yup.string()
        // //     .trim().required("Door No is required"),
        // // street: Yup.string()
        // //     .trim().required("Street is required"),
        // // area: Yup.string()
        // //     .trim().required("Area is required"),
        // // pincode: Yup.string()
        // //     .trim().required("Pincode is required"),
        // // branch: Yup.string()
        // //     .trim().required("Branch is required"),
        // product: Yup.string().trim().required("Product is required"),
        // quantity: Yup.string().trim().required("Quantity is required"),
        // deliverydate: Yup.string().trim().required("Delivery Date is required"),
        // deliverytime: Yup.string().trim().required("Delivery Time is required"),

    });

    const initialValues = {
        quotation_number: "",
        customer_name: "",
        phone: "",
        email: "",
        // gst: "",
        whatsapp: "",
        address: "",

        // doorno: "",
        // street: "",
        // area: "",
        // pincode: "",
        // city: "",
        // state: "",

        product: "",
        quantity: "",
        deliverytime: "",
        deliverydate: "",
        branch: "",

        // referenceno: "",
        refphone: "",
        refname: ""

    };

    const ref = useRef([]);

    const [apiState, setapiState] = useState(0);
    const { response, loading, error } = useAxios({
        method: "post",
        url: "/create_lead",
        body: JSON.stringify({
            // ref.current.values
            quotation_no: ref.current.values.quotation_number,
            product_id: '1',
            product_name: ref.current.values.product,
            quantity: ref.current.values.quantity,
            product_price: '10',
            customer_name: ref.current.values.customer_name,
            customer_email: ref.current.values.email,
            customer_phone: ref.current.values.phone,
            dilivery_address: ref.current.values.address,
            dilivery_date: ref.current.values.deliverydate,
            dilivery_time: ref.current.values.deliverytime,
            store_branch: ref.current.values.branch,
            ref_name: ref.current.values.refname,
            ref_contact: ref.current.values.refphone,
            ref_phone: ref.current.values.refphone,
            customer_whatsapp: ref.current.values.whatsapp
        }),
        apiState: apiState,
    });

    useEffect(() => {
        if (response !== null) {
            console.log(response);
            //     console.log(response.message);  
            
            Swal.fire({
                confirmButtonColor:'orange',
                icon: 'success',
                title: 'Success',
                text: 'Order placed successfully!',
              }).then(()=>{
                
              })
        }

        const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        console.log(resMessage);

        setTimeout(() => {
            // setSuccessmessage("");
            // notify();
        }, 5000);
    }, [response, error]);


    const [apiState1, setapiState1] = useState(1);
    const { response: response1, loading: loading1, error: error1 } = useAxios({
        method: "get",
        url: "/getproduct",
        apiState: apiState1,
    });

    useEffect(() => {
        if (response1 !== null) {
            // console.log("Stores are : ", response2);
        }

        const resMessage =
            (error1.response && error1.response.data && error1.response.data.message) ||
            error1.message ||
            error1.toString();
        console.log(resMessage)
    }, [response1, error1]);

    const [apiState2, setapiState2] = useState(1);
    const { response: response2, loading: loading2, error: error2 } = useAxios({
        method: "get",
        url: "/getstoredetails",
        apiState: apiState2,
    });

    useEffect(() => {
        if (response2 !== null) {
            // console.log("Stores are : ", response2);
        }

        const resMessage =
            (error2.response && error2.response.data && error2.response.data.message) ||
            error2.message ||
            error2.toString();
        console.log(resMessage)
    }, [response2, error2]);

    const handleOrder = (e) => {
        // e.preventDefault();

        // console.log(ref.current.values.product);
        setapiState(apiState + 1);
    };

    const addProduct = (e) => {
        e.preventDefault();
        setProductrow([...productrow, productrow.length]);
        console.log(productrow);
    }

    const sendProducts = (val, index) => {
        let a = productvalues;
        a[index] = val;
        setProductvalues(a)
    }

    const updateQuantity = (quantity, index) => {
        let a = productvalues;
        a[index].quantity = quantity;
        setProductvalues(a)
    }

    return (
        <>

            <div>
                {/* <button onClick={() => console.log(productvalues)}>Submit</button> */}

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={handleOrder}
                    innerRef={ref}
                >
                    {({ errors, touched }) => (
                        <Form className="theme-form">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row g-2">
                                        <div className="col-3">

                                            <div className="form-group">
                                                <label className="col-form-label">Quotation Number</label>
                                                <Field
                                                    className="form-control"
                                                    type="text"

                                                    name="quotation_number"

                                                    placeholder="XXXX XXXX"
                                                />
                                                <ErrorMessage
                                                    name="quotation_number"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <div className="form-group">
                                                <label className="col-form-label">Customer Name</label>
                                                <Field
                                                    className="form-control"
                                                    type="text"

                                                    name="customer_name"

                                                    placeholder="User name"
                                                />
                                                <ErrorMessage
                                                    name="customer_name"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-3">
                                            <label className="col-form-label">Phone Number</label>
                                            <Field
                                                className="form-control"
                                                type="tel"

                                                name="phone"

                                                placeholder="+91 XXXX"
                                            />
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="col-3">
                                            <label className="col-form-label">
                                                Email Address
                                            </label>
                                            <Field
                                                className="form-control"
                                                type="email"

                                                name="email"

                                                placeholder="Test@gmail.com"
                                            />
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="row g-2">
                                            {/* <div className="col-3">
                                                <label className="col-form-label">GST No.</label>
                                                <div className="form-Field position-relative">
                                                    <Field
                                                        className="form-control"
                                                        required
                                                        name="gst"

                                                        placeholder="gst"
                                                    />
                                                    <ErrorMessage
                                                        name="gst"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="col-3">
                                                <label className="col-form-label">
                                                    Branch
                                                </label>
                                                <Field as="select"

                                                    className="form-control"

                                                    name="branch"
                                                >
                                                    <option>Select</option>
                                                    {
                                                        response2 != null ?
                                                            response2.map((item, index) => {
                                                                return <option>{item.store_name}</option>
                                                            })
                                                            : console.log("No Branch data found")
                                                    }

                                                </Field>

                                                <ErrorMessage
                                                    name="branch"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                            <div className="col-3">
                                                <label className="col-form-label">
                                                    whatsapp
                                                </label>
                                                <div className="form-Field position-relative">
                                                    <Field
                                                        className="form-control"

                                                        name="whatsapp"

                                                        placeholder="number"
                                                    />
                                                    <ErrorMessage
                                                        name="whatsapp"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <label className="col-form-label">Reference Name</label>
                                                <Field
                                                    className="form-control"
                                                    type="text"

                                                    name="refname"
                                                    placeholder="abc"
                                                />
                                                <ErrorMessage
                                                    name="refname"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                            <div className="col-3">
                                                <label className="col-form-label">
                                                    Reference Contact
                                                </label>
                                                <Field
                                                    className="form-control"
                                                    type="tel"

                                                    name="referencecontact"

                                                    placeholder="+91 XXXXXX"
                                                />
                                                <ErrorMessage
                                                    name="referencecontact"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 " >
                                    <div className="border-top my-3" ></div>
                                </div>
                                <div className="form-group col-md-12">
                                    <div className="row g-2">
                                        <div className="col-3">
                                            <label className="col-form-label">Delivery Date</label>
                                            <Field
                                                className="form-control"
                                                type="date"

                                                name="deliverydate"
                                                placeholder="+91 XXXX"
                                            />
                                            <ErrorMessage
                                                name="deliverydate"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="col-3">
                                            <label className="col-form-label">
                                                Delivery Time
                                            </label>
                                            <Field
                                                className="form-control"
                                                type="time"

                                                name="deliverytime"

                                                placeholder="Test@gmail.com"
                                            />
                                            <ErrorMessage
                                                name="deliverytime"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label className="col-form-label">Address</label>
                                            <div className="form-Field position-relative">
                                                <Field
                                                    className="form-control"

                                                    name="address"

                                                    placeholder="enter address"
                                                />
                                                <ErrorMessage
                                                    name="address"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div>
                                        </div>

                                        {/* <div className="col-3">
                                                <label className="col-form-label">Reference No</label>
                                                <Field
                                                    className="form-control"
                                                    type="tel"
                                                    required
                                                    name="referenceno"
                                                    placeholder="XXXX"
                                                />
                                                <ErrorMessage
                                                    name="referenceno"
                                                    component="div"
                                                    className="text-danger"
                                                />
                                            </div> */}

                                    </div>
                                </div>

                                {/* <div className="form-group">
                                        <label className="col-form-label">Quantity</label>
                                        <Field
                                            className="form-control"
                                            type="text"
                                            required
                                            name="quantity"

                                            placeholder="Quantity"
                                        />
                                        <ErrorMessage
                                            name="quantity"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </div> */}

                                <div className="col-md-12 form-group mt-3">
                                    <div className="cart">
                                        <div className="table-responsive ">
                                            <table className="table table-bordered mb-0">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Quantity</th>
                                                        {/* <th scope="col">Total</th> */}
                                                        {/* <th scope="col">Action</th> */}

                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {

                                                        productrow.map((item, index) => {
                                                            return <OrderProduct row={index} updateQuantity={updateQuantity} response1={response1} productvalues={productvalues}
                                                                sendProducts={sendProducts} />
                                                        })

                                                    }
                                                    <tr>
                                                        <td colspan="4">
                                                            <button className="btn btn-info btn-sm" onClick={addProduct}>Add +</button>  </td></tr>                  </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 form-group mt-3 mb-4 float-right">
                                    <button
                                        className="btn btn-theme btn-block w-100"
                                        type="submit"
                                    >
                                        Create Order
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}

export default OrderForm;
