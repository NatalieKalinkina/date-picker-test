import React from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ruRU } from '@mui/x-date-pickers/locales';

import { ru } from 'date-fns/locale'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

import { DatePicker } from "@mui/x-date-pickers";

export const DateOfBirth_useFormik = ({ date, helperText, onDateChange, error, ...props }) => {

    const russianLocale =
        ruRU.components.MuiLocalizationProvider.defaultProps.localeText;

    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}
            adapterLocale={ru}
            localeText={russianLocale}>
            <DatePicker
                {...props}
                value={date}
                slotProps={{
                    textField: {
                        helperText: helperText,
                        error: error
                    },
                }}
                onChange={onDateChange}
            />
        </LocalizationProvider>

    )
}