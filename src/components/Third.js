import React from 'react'
import * as yup from 'yup';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik';

function Third(props) {
    let ThirdpageData = {
        p1Title: "",
        p1Link: "",
        p1Description: "",
        p2Title: "",
        p2Link: "",
        p2Description: "",
    }
    let validationSchema = yup.object().shape({
        p1Title: yup.string().required("Project 1 is mandatory"),
        p1Link: yup.string().url().required("Link is require"),
        p1Description: yup.string().min(10),
        p2Title: yup.string(),
        p2Link: yup.string().url(),
        p2Description: yup.string().min(10),
    })
    let onSubmit = (values) => {
        props.dataPush(values)
        props.history.push('/Fourthstep')
    }
    return (
        <Formik
            initialValues={ThirdpageData}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className='container mt-5'>
                    <h2>Project Developed</h2>
                    <hr />
                    <h4>Project 1</h4>
                    <div className='form-floating'>
                        <Field type="text" id="d1" name='p1Title' className="form-control mt-3" placeholder="Title" />
                        <label htmlFor="d1"><i class="fa fa-folder"></i> Title*</label>
                        <span className='text-danger'><ErrorMessage name='p1Title' /></span>
                    </div>
                    <div className='form-floating'>
                        <Field type="text" id="d2" name='p1Link' className="form-control mt-3" placeholder="Link" />
                        <label htmlFor="d2"><i class="fa fa-link"></i> Link*</label>
                        <span className='text-danger'><ErrorMessage name='p1Link' /></span>
                    </div>
                    <div className='form-floating'>
                        <Field type="text" id="d3" name='p1Description' className="form-control mt-3" placeholder="Description" />
                        <label htmlFor="d3"><i class="fa fa-pencil"></i> Description (optional)</label>
                        <span className='text-danger'><ErrorMessage name='p1Description' /></span>
                    </div>
                    <hr />
                    <h4>Project 2</h4>
                    <div className='form-floating'>
                        <Field type="text" name='p2Title' className="form-control mt-3" placeholder="Title" />
                        <label htmlFor="d1"><i class="fa fa-folder"></i> Title (optional)</label>
                        <span className='text-danger'><ErrorMessage name='p2Title' /></span>
                    </div>
                    <div className='form-floating'>
                        <Field type="text" name='p2Link' className="form-control mt-3" placeholder="Link" />
                        <label htmlFor="d2"><i class="fa fa-link"></i> Link (optional)</label>
                        <span className='text-danger'><ErrorMessage name='p2Link' /></span>
                    </div>
                    <div className='form-floating'>
                        <Field type="text" name='p2Description' className="form-control mt-3" placeholder="Description" />
                        <label htmlFor="d3"><i class="fa fa-pencil"></i> Description (optional)</label>
                        <span className='text-danger'><ErrorMessage name='p2Description' /></span>
                    </div>

                    <div className="row justify-content-between mt-2">
                        <div className="col-4">
                            <Link className='btn btn-secondary' to="/Secoundstep">Back</Link>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary" onSubmit={onSubmit}>Next</button>
                        </div>
                    </div>
                    <p className='mt-5'>Page 3</p>
                </div>
            </Form>
        </Formik>
    )
}

export default withRouter(Third)
