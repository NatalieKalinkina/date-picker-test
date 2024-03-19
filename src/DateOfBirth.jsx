import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ruRU } from '@mui/x-date-pickers/locales';

import { ru } from 'date-fns/locale'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { DatePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";


export const DateOfBirth = ({ name, helperText, ...props }) => {

    const [field] = useField(name);
    const { setFieldValue } = useFormikContext();

    const russianLocale =
        ruRU.components.MuiLocalizationProvider.defaultProps.localeText;

    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}
            adapterLocale={ru}
            localeText={russianLocale}>
            <DatePicker
                {...props}
                value={field.value}
                slotProps={{
                    textField: {

                        helperText: helperText,
                    },
                }}
                onChange={(val) => {
                    setFieldValue(name, val);
                }}
            />
        </LocalizationProvider>

    )
}