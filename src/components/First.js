import { ErrorMessage, Field, Form, Formik } from 'formik';
import { withRouter } from 'react-router-dom'
import React, { useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import * as yup from 'yup';

function First(props) {
    const [hello, sethello] = useState({ world: "hello" })
    let FirstPageData = {
        firstName: "",
        lastName: "",
        emailId: "",
        webSite: "",
        linkedIn: "",
        facebook: "",
        phoneNo: "",
        gitHub: "",
        twitter: "",
        instagram: ""
    }
    let onSubmit = (values) => {
        props.dataPush(values)
        props.history.push('/Secoundstep')

    }
    let validationSchema = yup.object().shape({
        firstName: yup.string().min(4).required("First Name require"),
        lastName: yup.string().min(4).required("Last Name require"),
        emailId: yup.string().email().required("Email is require"),
        webSite: yup.string().url(),
        gitHub: yup.string().url(),
        twitter: yup.string(),
        instagram: yup.string(),
        linkedIn: yup.string(),
        phoneNo: yup.number().min(999999999, 'Number Should be 10 digits').max(9999999999, 'Number Should be 10 digits').required("Phone number is require"),
        facebook: yup.string(),
    })
    let fetchData = async () => {
        let response = await axios.post(
            "https://jsonplaceholder.typicode.com/api",
            hello
        )
    }
    return (
        <Formik
            initialValues={FirstPageData}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className='container-xl mt-5'>
                    <h2>Personal Details</h2>
                    <hr />
                    <div className="row justify-content-around">
                        <div className="col-4">
                            <div className='form-floating '>
                                <Field type="text" className="form-control mt-3" id="a1" name="firstName" placeholder="First" />
                                <label htmlFor="a1"><i className="fa fa-user"></i> First Name</label>
                                <span className='text-danger'><ErrorMessage name='firstName' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" className="form-control mt-3" id="a2" name="emailId" placeholder="Email" />
                                <label htmlFor="a2"><i className="fa fa-envelope icon"></i> Email</label>
                                <span className='text-danger'><ErrorMessage name='emailId' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" id="a3" className="form-control mt-3" name="webSite" placeholder="Website" />
                                <label htmlFor="a3"><i className="fa fa-link"></i> Website</label>
                                <span className='text-danger'><ErrorMessage name='webSite' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" id="a4" className="form-control mt-3" name="linkedIn" placeholder="LinkedIn"/>
                                <label htmlFor="a4"><i className="fa fa-linkedin"></i>  Linked In</label>
                                <span className='text-danger'><ErrorMessage name='linkedIn' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" id="a5" className="form-control mt-3" name="facebook" placeholder="Facebook"/>
                                <label htmlFor="a5"><i className="fa fa-facebook-square"></i> Facebook</label>
                                <span className='text-danger'><ErrorMessage name='facebook' /></span>
                            </div>
                            <Link to="/" className="btn btn-outline-secondary disabled mt-5" role="button" aria-disabled="true">Back</Link>
                        </div>
                        <div className="col-4">
                            <div className='form-floating'>
                                <Field type="text" id="b1" className="form-control mt-3" name="lastName" placeholder="Last"  />
                                <label htmlFor="b1"><i className="fa fa-user"></i> Last name</label>
                                <span className='text-danger'><ErrorMessage name='lastName' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" id="b2" className="form-control mt-3" name="phoneNo" placeholder="Mobile number" />
                                <label htmlFor="b2"><i className="fa fa-mobile"></i> Mobile number</label>
                                <span className='text-danger'><ErrorMessage name='phoneNo' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" id="b3" className="form-control mt-3" name="gitHub" placeholder="gitHub"/>
                                <label htmlFor="b3"><i className="fa fa-git-square"></i> Git hub</label>
                                <span className='text-danger'><ErrorMessage name='gitHub' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" id="b4" className="form-control mt-3" name="twitter" placeholder="twitter"/>
                                <label htmlFor="b4"><i className="fa fa-twitter"></i> Twitter</label>
                                <span className='text-danger'><ErrorMessage name='twitter' /></span>
                            </div>
                            <div className='form-floating'>
                                <Field type="text" id="b5" className="form-control mt-3" name="instagram" placeholder="instagram"/>
                                <label htmlFor="b5"><i className="fa fa-instagram"></i> Instagram</label>
                                <span className='text-danger'><ErrorMessage name='instagram' /></span>
                            </div>
                            <button className="btn btn-primary mt-5" onSubmit={onSubmit}>Next</button>
                            {/* <button onClick={fetchData}>Click her</button> */}
                        </div>
                    </div>
                    <p className='mt-5'>Page 1</p>
                </div>
            </Form>
        </Formik>
    )
}

export default withRouter(First)
