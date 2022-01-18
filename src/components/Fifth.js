import React, { useEffect, useState } from 'react'
import * as yup from 'yup';
import DownloadLink from "react-download-link";
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik';

function Fifth(props) {
    let url="http://localhost:3006/ResumeDetails"
    let FifthpageData = {
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        skill6: '',
        interest1: "",
        interest2: "",
        interest3: "",
        interest4: "",
        interest5: "",
        interest6: "",
    }
    let validationSchema = yup.object().shape({
        skill1: yup.string().required("Skill 1 is require"),
        skill2: yup.string().required("Skill 2 is require"),
        skill3: yup.string().required("Skill 3 is require"),
        skill4: yup.string(),
        skill5: yup.string(),
        skill6: yup.string(),
        interest1: yup.string().required("Interest 1 is require"),
        interest2: yup.string().required("Interest 2 is require"),
        interest3: yup.string().required("Interest 1 is require"),
        interest4: yup.string(),
        interest5: yup.string(),
        interest6: yup.string(),
    })

    let onSubmit = (values) => {
        props.dataPush(values)
    }
  let  getDataFromURL = (url) => new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    resolve(data)
                });
        });
    }, 1000);

    return (
        <Formik
            initialValues={FifthpageData}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            <Form>
                <div className='container mt-5'>
                    <h2>Extra Details</h2>
                    <hr />
                    <h4>Skills / Languages</h4>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='skill1' className="form-control mt-3" placeholder="Skill 1" />
                                <label htmlFor="1"><i className="fa fa-wrench"></i> Skill 1*</label>
                                <span className='text-danger'><ErrorMessage name='skill1' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='skill2' className="form-control mt-3" placeholder="Skill 2" />
                                <label htmlFor="1"><i className="fa fa-wrench"></i> Skill 2*</label>
                                <span className='text-danger'><ErrorMessage name='skill2' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='skill3' className="form-control mt-3" placeholder="Skill 3" />
                                <label htmlFor="1"><i className="fa fa-wrench"></i> Skill 3*</label>
                                <span className='text-danger'><ErrorMessage name='skill3' /></span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='skill4' className="form-control mt-3" placeholder="Skill 4" />
                                <label htmlFor="1"><i className="fa fa-wrench"></i> Skill 4 (optional)</label>
                                <span className='text-danger'><ErrorMessage name='skill4' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='skill5' className="form-control mt-3" placeholder="Skill 5" />
                                <label htmlFor="1"><i className="fa fa-wrench"></i> Skill 5 (optional)</label>
                                <span className='text-danger'><ErrorMessage name='skill5' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='skill6' className="form-control mt-3" placeholder="Skill 6" />
                                <label htmlFor="1"><i className="fa fa-wrench"></i> Skill 6 (optional)</label>
                                <span className='text-danger'><ErrorMessage name='skill6' /></span>
                            </div>
                        </div>
                    </div>


                    <hr />
                    <h4>Interest</h4>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='interest1' className="form-control mt-3" placeholder="Interest 1" />
                                <label htmlFor="f1">Interest 1*</label>
                                <span className='text-danger'><ErrorMessage name='interest1' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='interest2' className="form-control mt-3" placeholder="Interest 2" />
                                <label htmlFor="f2">Interest 2*</label>
                                <span className='text-danger'><ErrorMessage name='interest2' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='interest3' className="form-control mt-3" placeholder="Interest 3" />
                                <label htmlFor="f3">Interest 3*</label>
                                <span className='text-danger'><ErrorMessage name='interest3' /></span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='interest4' className="form-control mt-3" placeholder="Interest 4" />
                                <label htmlFor="f4">Interest 4 (optional)</label>
                                <span className='text-danger'><ErrorMessage name='interest4' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='interest5' className="form-control mt-3" placeholder="Interest 5" />
                                <label htmlFor="f5">Interest 5 (optional)</label>
                                <span className='text-danger'><ErrorMessage name='interest5' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='interest6' className="form-control mt-3" placeholder="Interest 6" />
                                <label htmlFor="f6">Interest 6 (optional)</label>
                                <span className='text-danger'><ErrorMessage name='interest6' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-4">
                        <div className="col-4">
                            <Link className="btn btn-secondary" to="/Fourthstep">Back</Link>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-outline-primary disabled" role="button" aria-disabled="true">Next</button>
                        </div>
                    </div>
                    <br />
                    <button onSubmit={onSubmit} className='btn btn-primary'>Submit</button>
                        <DownloadLink
                            className="btn btn-success text-light"
                            label="Download"
                            filename="myResume.pdf"
                            exportFile={() => Promise.resolve(getDataFromURL (url))} />
                </div>
            </Form>
        </Formik>
    )
}

export default withRouter(Fifth)
