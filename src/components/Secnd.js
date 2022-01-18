import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as yup from 'yup';

function Secnd(props) {
    let SecondpageData = {
        collegeName: "",
        collegeJoin: "",
        collegeFinish: "",
        collegeQualification: "",
        collegeDescription: "",
        schoolName: "",
        schoolJoin: "",
        schoolFinish: "",
        schoolQualification: "",
        schoolDescription: ""
    }
    let validationSchema = yup.object().shape({
        collegeName: yup.string().required("College Name is require"),
        collegeJoin: yup.date().required("Joined Date is require"),
        collegeFinish: yup.date().required("Finished Date is also require"),
        collegeQualification: yup.string().required("It is require"),
        collegeDescription: yup.string().min(10),
        schoolName: yup.string().required("School Name is require"),
        schoolJoin: yup.date().required("Joined Date is require"),
        schoolFinish: yup.date().required("Finished Date is also require"),
        schoolQualification: yup.string().required("It is require"),
        schoolDescription: yup.string().min(10)
    })
    let onSubmit = (values) => {

        props.dataPush(values)
        props.history.push("/Thirdstep")
    }
    return (
        <Formik
            initialValues={SecondpageData}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className='container mt-5'>
                    <h2>Education Details</h2>
                    <hr />
                    <div className="row">
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='collegeName' id="c1" className="form-control mt-3" placeholder="College / University" />
                                <label htmlFor="c1"><i className="fa fa-university"></i> College / University*</label>
                                <span className='text-danger'><ErrorMessage name='collegeName' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="date" name='collegeJoin' id="c2" className="form-control mt-3" />
                                <label htmlFor="c2">Joined Date*</label>
                                <span className='text-danger'><ErrorMessage name='collegeJoin' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="date" id="c3" name='collegeFinish' className="form-control mt-3" />
                                <label htmlFor="c3">Passed out Date*</label>
                                <span className='text-danger'><ErrorMessage name='collegeFinish' /></span>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='collegeQualification' className="form-control mt-3" placeholder="Qualification" />
                                <label htmlFor="c4"><i className="fa fa-graduation-cap"></i> Qualification*</label>
                                <span className='text-danger'><ErrorMessage name='collegeQualification' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" id="c5" name='collegeDescription' className="form-control mt-3" placeholder="Description" />
                                <label htmlFor="c5"><i className="fa fa-pencil"></i> Description (optional)</label>
                                <span className='text-danger'><ErrorMessage name='collegeDescription' /></span>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />

                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" id="c6" name='schoolName' className="form-control mt-3" placeholder="School" />
                                <label htmlFor="c6"><i className="fa fa-university"></i> School Name*</label>
                                <span className='text-danger'><ErrorMessage name='schoolName' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field id="c7" type="date" name='schoolJoin' className="form-control mt-3" />
                                <label htmlFor="c7">Joined Date*</label>
                                <span className='text-danger'><ErrorMessage name='schoolJoin' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="date" id="c8" name='schoolFinish' className="form-control mt-3" />
                                <label htmlFor="c8">Passed out Date*</label>
                                <span className='text-danger'><ErrorMessage name='schoolFinish' /></span>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" id="c9" name='schoolQualification' className="form-control mt-3" placeholder="Qualification" />
                                <label htmlFor="c9"><i className="fa fa-graduation-cap"></i> Qualification*</label>
                                <span className='text-danger'><ErrorMessage name='schoolQualification' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" id="c10" name='schoolDescription' className="form-control mt-3" placeholder="Description" />
                                <label htmlFor="c10"><i className="fa fa-pencil"></i> Description (optional)</label>
                                <span className='text-danger'><ErrorMessage name='schoolDescription' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-5">
                        <div className="col-4">
                            <Link className='btn btn-secondary' to="/">Back</Link>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary" onSubmit={onSubmit}>Next</button>
                        </div>
                    </div>
                    <p className='mt-5'>Page 2</p>
                </div>
            </Form>
        </Formik>
    )
}

export default withRouter(Secnd)
