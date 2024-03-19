import React from "react";
import { Formik, Form } from "formik";
import * as yup from 'yup';
import { subYears } from "date-fns";


import { DateOfBirth } from "./DateOfBirth";
import { Button, TextField } from "@mui/material";

export const FormWithMUI = () => {
    const sixYearsAgo = subYears(new Date(), 6)

    const validationSchema = yup.object({
        name: yup
            .string('Введите имя')
            .min(2, 'Минимум 2 символа')
            .required('Это поле обязательное'),
        birthdate: yup
            .date()
            .max(sixYearsAgo, 'Вы должны быть старше 6 лет'),
    });

    return (
        <Formik
            initialValues={{
                name: '',
                birthdate: sixYearsAgo
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit
            }) => (
                <Form onSubmit={handleSubmit}>
                    <TextField
                        id="name"
                        name="name"
                        type="text"
                        label="Имя"
                        placeholder="Имя"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                    />
                    <DateOfBirth name="birthdate" helperText={errors.birthdate} />
                    <Button type="submit">Отправить</Button>
                </Form>
            )
            }
        </Formik >
    )
}