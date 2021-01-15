import React, {useCallback, useEffect, useState} from "react";
import {Form} from "./Form";
import {FormField} from "./FormField";

interface MiniFormParams {
    id: string,
    value: { [key: string]: any };
    onValuesChanged: (value: { [key: string]: any }) => void;
    onValidityChanged?: (valid: boolean) => void; // you can subscribe to this if you want, for the sake of showing custom validity/state messages
}

export const FormSubForm: React.FC<MiniFormParams> = (params) => {
    const {id, value, onValuesChanged, onValidityChanged, children} = params;
    const [isValid, setIsValid] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<{ [key: string]: any }>(value);

    useEffect(() => onValuesChanged(formValues), [formValues, onValuesChanged]);
    useEffect(() => onValidityChanged && onValidityChanged(isValid), [isValid, onValidityChanged]);

    const validator = useCallback((value: any) => !isValid ? 'Form invalid' : '', [isValid]);

    return (
        <>
            <Form
                onValidityChanged={setIsValid}
                onValuesChanged={setFormValues}
            >
                {children}
            </Form>
            <FormField id={id} value={formValues} validators={[validator]}/>
        </>
    );
}

