import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../../Login/Signin.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, NavLink } from "react-router-dom";
import * as Yup from "yup";
import useAxios from "../../hooks/useAxios";

function OrderForm() {
    let navigate = useNavigate();
    let name = /^[a-zA-Z ]+$/;
    const SignupSchema = Yup.object().shape({
        quotationnumber: Yup.string()
            .trim().required("Quotation number is required"),
        // .matches(name, "Enter only Alphabets"),
        username: Yup.string()
            .trim().required("Username is required")
            .min(3, "Username must be at least 3 characters")
            .max(20, "Username must not exceed 20 characters"),
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
        quotationnumber: "",
        username: "",
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
        referencecontact: "",
        referencename: ""

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
            customer_email: ref.current.values.customer_email,
            customer_phone: ref.current.values.customer_phone,
            dilivery_address: ref.current.values.dilivery_address,
            dilivery_date: ref.current.values.dilivery_date,
            dilivery_time: ref.current.values.dilivery_time,
            store_branch: ref.current.values.store_branch,
            ref_name: ref.current.values.ref_name,
            ref_contact: ref.current.values.ref_contact,
            ref_phone: ref.current.values.ref_phone,
            customer_whatsapp: ref.current.values.customer_whatsapp
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
                                    <div className="col-md-6">
                                        <div className="row g-2">
                                            <div className="col-6">

                                                <div className="form-group">
                                                    <label className="col-form-label">Quotation Number</label>
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="quotationnumber"

                                                        placeholder="XXXX XXXX"
                                                    />
                                                    <ErrorMessage
                                                        name="quotationnumber"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label className="col-form-label">Customer Name</label>
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="username"

                                                        placeholder="User name"
                                                    />
                                                    <ErrorMessage
                                                        name="username"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="row g-2">
                                                <div className="col-6">
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
                                                <div className="col-6">
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
                                        </div>
                                        <div className="form-group">
                                            <div className="row g-2">
                                                <div className="col-6">
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
                                                <div className="col-6">
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
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="col-form-label pt-0">Address</label>
                                            <div className="row g-2">
                                                <div className="col-6 mb-3">
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="doorno"

                                                        placeholder="Door No"
                                                    />
                                                    <ErrorMessage
                                                        name="doorno"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="street"

                                                        placeholder="Street"
                                                    />
                                                    <ErrorMessage
                                                        name="street"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="col-6 mb-3">
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="area"

                                                        placeholder="Area"
                                                    />
                                                    <ErrorMessage
                                                        name="area"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="pincode"

                                                        placeholder="pincode"
                                                    />
                                                    <ErrorMessage
                                                        name="pincode"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>

                                                <div className="col-6 mb-3">
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="city"

                                                        placeholder="city"
                                                    />
                                                    <ErrorMessage
                                                        name="city"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="state"

                                                        placeholder="state"
                                                    />
                                                    <ErrorMessage
                                                        name="state"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 ">


                                        <div className="form-group">
                                            <label className="col-form-label">Product Name</label>
                                            <select
                                                className="form-control"
                                                type="text"
                                                name="product"
                                            >
                                                <option>Select</option>
                                            </select>

                                        </div>
                                        <div className="form-group">
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
                                        </div>

                                        <div className="form-group">
                                            <div className="row g-2">
                                                <div className="col-6">
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
                                                <div className="col-6">
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
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row g-2">
                                                <div className="col-6">
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
                                                </div>
                                                <div className="col-6">
                                                    <label className="col-form-label">
                                                        Branch
                                                    </label>
                                                    <select
                                                        className="form-control"
                                                        required
                                                        name="branch"
                                                    >
                                                        <option>Select</option>
                                                    </select>
                                                    <ErrorMessage
                                                        name="branch"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row g-2">
                                                <div className="col-6">
                                                    <label className="col-form-label">Reference Name</label>
                                                    <Field
                                                        className="form-control"
                                                        type="text"
                                                        required
                                                        name="referencename"
                                                        placeholder="abc"
                                                    />
                                                    <ErrorMessage
                                                        name="referencename"
                                                        component="div"
                                                        className="text-danger"
                                                    />
                                                </div>
                                                <div className="col-6">
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
                                        <div className="col-md-4 form-group mt-3 mb-4 float-right">
                                            <button
                                                className="btn btn-theme btn-block w-100"
                                                type="submit"
                                            >
                                                Create Order
                                            </button>
                                        </div>
                            
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
