import React from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { subYears } from "date-fns";


import { DateOfBirth_useFormik } from "./DateOfBirth_useFormik";
import { Button, TextField } from "@mui/material";

export const FormWithMUI_useFormik = () => {
    const sixYearsAgo = subYears(new Date(), 6);

    const validationSchema = yup.object({
        name: yup
            .string('Введите имя')
            .min(2, 'Минимум 2 символа')
            .required('Это поле обязательное'),
        birthdate: yup
            .date()
            .max(sixYearsAgo, 'Вы должны быть старше 6 лет')
            .typeError('Некорректный формат даты')
            .required('Это поле обязательное'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            birthdate: sixYearsAgo
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: validationSchema
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                name="name"
                type="text"
                label="Имя"
                placeholder="Имя"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <DateOfBirth_useFormik
                name="birthdate"
                date={formik.values.birthdate}
                error={Boolean(formik.errors.birthdate)}
                helperText={formik.errors.birthdate}
                onDateChange={(value) => {
                    formik.setFieldValue('birthdate', value)
                }}
            />
            <Button type="submit">Отправить</Button>
        </form>

    )
}