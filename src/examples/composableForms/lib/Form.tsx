import {cloneDeep} from "lodash";
import React, {useCallback, useEffect, useState} from "react";

interface FormParams {
    onValuesChanged: (values: { [key: string]: any }) => void;
    onValidityChanged: (valid: boolean) => void;
}

export interface FormContextType {
    update: (id: string, value: any, valid: boolean) => void;
}

interface FormFieldType {
    value: any;
    valid: boolean;
}

export const FormContext = React.createContext<FormContextType>({
    update: (id: string, value: any, valid: boolean): void => {
    },
});

export const Form: React.FC<FormParams> = (params) => {
    const {children, onValuesChanged, onValidityChanged} = params;
    const [fields, setFields] = useState<{ [key: string]: FormFieldType }>({});

    useEffect(() => {
        console.log("fields changed", JSON.stringify(fields));
        const values: { [key: string]: any } = {};
        let valid = true;
        for (let id in fields) {
            values[id] = fields[id].value;
            valid = valid && fields[id].valid;
        }
        onValuesChanged(values);
        onValidityChanged(valid);
    }, [fields, onValuesChanged, onValidityChanged]);

    const update = useCallback((id: string, value: any, valid: boolean): void => {
        setFields((prev) => {
            if (prev[id] && prev[id].value === value && prev[id].valid === valid) {
                return prev;
            }

            const newFields = cloneDeep(prev);
            newFields[id] = {value, valid};

            return newFields;
        })
    }, []);

    const [contextValues] = useState<FormContextType>({update});

    return (
        <FormContext.Provider value={contextValues}>
            {children}
        </FormContext.Provider>
    );
}

