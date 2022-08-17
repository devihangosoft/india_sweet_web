import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../../Login/Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";
import SelectMui from "./SelectMui";
// import CustomSelect from "./CustomSelect";

function OrderForm() {
    let navigate = useNavigate();
    let name = /^[a-zA-Z ]+$/;
    const SignupSchema = Yup.object().shape({
        quotation_number: Yup.string()
            .trim().required("Quotation number is required"),
        // .matches(name, "Enter only Alphabets"),
        customer_name: Yup.string()
            .trim().required("customer_name is required")
            .min(3, "customer_name must be at least 3 characters")
            .max(20, "customer_name must not exceed 20 characters"),
        phone: Yup.string().trim().required("Phone number is required").min(10, "Mobile number should be 10 digit")
            .max(10, "Mobile number should be 10 digit"),
        email: Yup.string()
            .trim().required("Email is required")
            .email("Email is invalid"),
        whatsapp: Yup.string()
            .trim().required("Whatsapp is required"),
        doorno: Yup.string()
            .trim().required("Door No is required"),
        street: Yup.string()
            .trim().required("Street is required"),
        area: Yup.string()
            .trim().required("Area is required"),
        pincode: Yup.string()
            .trim().required("Pincode is required"),
        branch: Yup.string()
            .trim().required("Branch is required"),
        product: Yup.string().trim().required("Product is required"),
        quantity: Yup.string().trim().required("Quantity is required"),
        deliverydate: Yup.string().trim().required("Delivery Date is required"),
        deliverytime: Yup.string().trim().required("Delivery Time is required"),

    });

    const initialValues = {
        quotation_number: "",
        customer_name: "",
        phone: "",
        email: "",
        gst: "",
        whatsapp: "",

        doorno: "",
        street: "",
        area: "",
        pincode: "",
        city: "",
        state: "",

        product: "",
        quantity: "",
        deliverytime: "",
        deliverydate: "",
        branch: "",

        referenceno: "",
        refphone: "",
        refname: ""

    };

    const ref = useRef([]);

    const [apiState, setapiState] = useState(0);
    const { response, loading, error } = useAxios({
        method: "post",
        url: "/create_lead",
        headers: {
            "Content-Type": "application/json",
            "api-key": "3d2bd7f8-406b-4ea3-9adc-fb38755f31c9",
        },
        body: JSON.stringify({
            // ref.current.values
            quotation_no: ref.current.values.quotation_no,
            product_id: ref.current.values.product_id,
            product_name: ref.current.values.product_name,
            quantity: ref.current.values.quantity,
            product_price: ref.current.values.product_price,
            customer_name: ref.current.values.customer_name,
            customer_email: ref.current.values.email,
            customer_phone: ref.current.values.phone,
            dilivery_address: ref.current.values.dilivery_address,
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
            //  setSuccessmessage(response.message);
            setTimeout(() => {
                navigate("/login");
            }, 5000);
        }

        const resMessage =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString();
        // setMessage(resMessage);
        setTimeout(() => {
            // setMessage("");
        }, 5000);
    }, [response, error]);






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



    const handleRegister = (e) => {
        // e.preventDefault();
        setapiState(apiState + 1);
    };



    return (
        <>

            <div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={handleRegister}
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
                                                    required
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
                                                    required
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
                                                required
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
                                                required
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
                                            <div className="col-3">
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
                                            </div>
                                            <div className="col-3">
                                                <label className="col-form-label">
                                                    whatsapp
                                                </label>
                                                <div className="form-Field position-relative">
                                                    <Field
                                                        className="form-control"
                                                        required
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

                                            <div className="col-6">
                                                <label className="col-form-label">Address</label>
                                                <div className="form-Field position-relative">
                                                    <Field
                                                        className="form-control"
                                                        required
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
                                        </div>
                                    </div>





                                </div>
                                <div className="col-md-12 border my-3" ></div>


                                <div className="form-group col-md-12">
                                    <div className="row g-2">
                                        <div className="col-3">
                                            <label className="col-form-label">Delivery Date</label>
                                            <Field
                                                className="form-control"
                                                type="date"
                                                required
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
                                                required
                                                name="deliverytime"

                                                placeholder="Test@gmail.com"
                                            />
                                            <ErrorMessage
                                                name="deliverytime"
                                                component="div"
                                                className="text-danger"
                                            />
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
                                        <div className="col-3">
                                            <label className="col-form-label">
                                                Branch
                                            </label>
                                            <select
                                                className="form-control"
                                                required
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


                                            </select>
                                            <ErrorMessage
                                                name="branch"
                                                component="div"
                                                className="text-danger"
                                            />
                                        </div>


                                        <div className="col-3">
                                            <label className="col-form-label">Reference Name</label>
                                            <Field
                                                className="form-control"
                                                type="text"
                                                required
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
                                                required
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






                                <div className="form-group">
                                    <label className="col-form-label">Product Name</label>

                                    <Field
                                        name="product"
                                        component={SelectMui}
                                        placeholder="Select me"
                                        multiple={true}
                                    />



                                 
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
