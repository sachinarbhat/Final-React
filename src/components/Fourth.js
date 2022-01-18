import React from 'react'
import * as yup from 'yup';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik';

function Fourth(props) {
    let FourthpageData = {
        exp1Name: '',
        exp1Position: '',
        exp1Duration: '',
        exp1Description: "",
        exp2Name: '',
        exp2Position: '',
        exp2Duration: '',
        exp2Description: "",
    }
    let validationSchema = yup.object().shape({
        exp1Name: yup.string(),
        exp1Position: yup.string(),
        exp1Duration: yup.number(),
        exp1Description: yup.string().min(10),
        exp2Name: yup.string(),
        exp2Position: yup.string(),
        exp2Duration: yup.number(),
        exp2Description: yup.string().min(10),
    })
    let onSubmit = (values) => {
        props.dataPush(values)
        props.history.push('/Fifthstep')
    }
    return (
        <Formik
            initialValues={FourthpageData}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className='container mt-5'>
                    <h2>Experiance Details</h2>
                    <hr />
                    <h4>Experiance 1</h4>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" id="e1" name='exp1Name' className="form-control mt-3" placeholder="Institution / Organisation" />
                                <label htmlFor="e1"><i class="fa fa-building"></i> Institution / Organisation</label>
                                <span className='text-danger'><ErrorMessage name='exp1Name' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" id="e2" name='exp1Position' className="form-control mt-3" placeholder="Position" />
                                <label htmlFor="e2"><i class="fa fa-briefcase"></i> Position</label>
                                <span className='text-danger'><ErrorMessage name='exp1Position' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" id="e3" name="exp1Duration" className="form-control mt-3" placeholder="Duration years" />
                                <label htmlFor="e3"><i class="fa fa-hourglass-end"></i> Duration years</label>
                                <span className='text-danger'><ErrorMessage name='exp1Duration' /></span>
                            </div>
                        </div>
                    </div>
                    <div className='form-floating'>
                        <Field type="text" name="exp1Description" className="form-control mt-3" placeholder="Description" />
                        <label htmlFor="e4"><i class="fa fa-pencil"></i> Description</label>
                        <span className='text-danger'><ErrorMessage name='exp1Description' /></span>
                    </div>
                    <hr />

                    <h4>Experiance 2</h4>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='exp2Name' className="form-control mt-3" placeholder="Institution / Organisation" />
                                <label htmlFor="e1"><i class="fa fa-building"></i> Institution / Organisation</label>
                                <span className='text-danger'><ErrorMessage name='exp2Name' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name='exp2Position' className="form-control mt-3" placeholder="Position" />
                                <label htmlFor="e2"><i class="fa fa-briefcase"></i> Position</label>
                                <span className='text-danger'><ErrorMessage name='exp2Position' /></span>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='form-floating'>
                                <Field type="text" name="exp2Duration" className="form-control mt-3" placeholder="Duration years" />
                                <label htmlFor="e3"><i class="fa fa-hourglass-end"></i> Duration years</label>
                                <span className='text-danger'><ErrorMessage name='exp2Duration' /></span>
                            </div>
                        </div>
                    </div>
                    <div className='form-floating'>
                        <Field type="text" name="exp2Description" className="form-control mt-3" placeholder="Description" />
                        <label htmlFor="e4"><i class="fa fa-pencil"></i> Description</label>
                        <span className='text-danger'><ErrorMessage name='exp2Description' /></span>
                    </div>
                    <div className="row justify-content-between mt-4">
                        <div className="col-4">
                            <Link className='btn btn-secondary' to="/Thirdstep">Back</Link>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-primary" onSubmit={onSubmit}>Next</button>
                        </div>
                    </div>
                    <p className='mt-5'>Page 4</p>
                </div>
            </Form>
        </Formik>
    )
}

export default withRouter(Fourth)
