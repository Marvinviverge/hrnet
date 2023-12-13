import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { departmentOptions } from '@/assets/datas/department.datas.js';
import { statesOptions } from '@/assets/datas/state.datas.js';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { Modale } from 'marvi-modale';
import './create.css';


const Create = () => {
    const dispatch = useDispatch()

    const [isModalOpen, setModalOpen] = useState(false);

    const initialValues = {
        firstname: "",
        lastname: "",
        birth: "",
        startdate: "",
        street: "",
        state: "",
        city: "",
        department: "",
        zipcode: ""
    };

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("Veuillez entrer un prénom"),
        lastname: Yup.string().required("Veuillez entrer un nom"),
        birth: Yup.string().required("Veuillez entrer une date de naissance"),
        startdate: Yup.string().required("Veuillez entrer une date de début"),
        street: Yup.string().required("Veuillez entrer une adresse"),
        state: Yup.string().required("Veuillez sélectionner un état"),
        city: Yup.string().required("Veuillez entrer une adresse"),
        department: Yup.string().required("Veuillez sélectionner une section"),
        zipcode: Yup.number().required("Veuillez entrer un code postal"),
    });

    const formatDateToISO = (date, timeZone) => {
        return format(new Date(date), 'dd-MM-yyyy', { timeZone });
    };

    const onSubmit = (data) => {
        const timeZone = 'Europe/Paris';

        let newEmployee = {
            firstname: data.firstname,
            lastname: data.lastname,
            birth: formatDateToISO(data.birth, timeZone),
            startdate: formatDateToISO(data.startdate, timeZone),
            street: data.street,
            state: data.state,
            city: data.city,
            department: data.department,
            zipcode: data.zipcode
        }

        dispatch({ type: "Employees/addEmployee", payload: { newEmployee } })
        openModale()
    };

    const closeModale = () => {
        setModalOpen(false);
    }
    const openModale = () => {
        setModalOpen(true);
    }

    return (
        <main className='main'>

            <Modale isOpen={isModalOpen} buttonFunction={closeModale} messageButton='Fermer' messageModale='Employee created !' />
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='form'>
                    <fieldset className='create'>
                        <legend>Create an Employee</legend>

                        <div className='identity'>
                            <div className="input-wrapper">
                                <label htmlFor="firstname">First Name</label>
                                <Field className="wrapper-padding" id="firstname" name="firstname" type="text" placeholder="First Name" autoComplete="off"></Field>
                                <ErrorMessage name="firstname" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="lastname">Last Name</label>
                                <Field className="wrapper-padding" id="lastname" name="lastname" type="text" placeholder="Last Name" autoComplete="off"></Field>
                                <ErrorMessage name="lastname" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="birth">Date of Birth</label>
                                <Field className="wrapper-padding" id="birth" name="birth" type="text" placeholder="Date of Birth" autoComplete="off">
                                    {({ field, form }) => (
                                        <DatePicker dateFormat="dd/MM/yyyy" className="wrapper-padding" placeholderText="Date of Birth" id="birth" {...field} selected={field.value} onChange={(date) => form.setFieldValue(field.name, date)} />
                                    )}
                                </Field>
                                <ErrorMessage name="birth" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="startdate">Start Date</label>
                                <Field className="wrapper-padding" id="startdate" name="startdate" type="text" placeholder="Start Date" autoComplete="off">
                                    {({ field, form }) => (
                                        <DatePicker dateFormat="dd/MM/yyyy" className="wrapper-padding" placeholderText="Start Date" id="startdate" {...field} selected={field.value} onChange={(date) => form.setFieldValue(field.name, date)} />
                                    )}
                                </Field>
                                <ErrorMessage name="startdate" component="p" className='errorMessage' />
                            </div>
                        </div>

                        <fieldset className='address'>
                            <legend>Address</legend>
                            <div className="input-wrapper">
                                <label htmlFor="street">Street</label>
                                <Field className="wrapper-padding" id="street" name="street" type="text" placeholder="Street" autoComplete="off"></Field>
                                <ErrorMessage name="street" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="state">State</label>
                                <Field as='select' aria-label="state" name="state" id="state">
                                    <option disabled value="">Choose state</option>
                                    {
                                        statesOptions.map((option, index) => {
                                            return (
                                                <option key={option.name + index} value={option.abbreviation}>{option.name}</option>
                                            )
                                        })
                                    }
                                </Field>
                                <ErrorMessage name="state" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="city">City</label>
                                <Field className="wrapper-padding" id="city" name="city" type="text" placeholder="City" autoComplete="off"></Field>
                                <ErrorMessage name="city" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="department">Department</label>
                                <Field as='select' aria-label="department" id="department" name="department">
                                    <option disabled value="">Choose a department</option>
                                    {
                                        departmentOptions.map((option, index) => {
                                            return (
                                                <option key={option + index} value={option}>{option}</option>
                                            )
                                        })
                                    }
                                </Field>
                                <ErrorMessage name="department" component="p" className='errorMessage' />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="zipcode">Zip Code</label>
                                <Field className="wrapper-padding" aria-label="zipcode" id="zipcode" name="zipcode" type="text" placeholder="Zip Code" autoComplete="off"></Field>
                                <ErrorMessage name="zipcode" component="p" className='errorMessage' />
                            </div>
                            <button className="save-button" type='submit'>Save</button>
                        </fieldset>
                    </fieldset>
                </Form>
            </Formik>
        </main>
    );
};

export default Create;