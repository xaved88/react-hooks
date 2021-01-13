import React, {useContext, useEffect, useState} from "react";
import {FormContext, FormContextType} from "./Form";
import {FormHelperText} from "@material-ui/core";

interface FormFieldParams {
    id: string;
    value: any;
    doValidate: (value: any) => boolean;
    errorText?: string;
}

export const FormField: React.FC<FormFieldParams> = (params) => {
    const {id, value, doValidate, errorText} = params;
    const context = useContext<FormContextType>(FormContext);
    const [valid, setValid] = useState(false);

    useEffect(() => {
        const newValid = doValidate(value);
        setValid(newValid);
        context.update(id, value, newValid);
    }, [context, id, value, doValidate]);

    return (
        <>
            {!valid && errorText && (<FormHelperText error={true}>{errorText}</FormHelperText>)}
        </>
    );
}

