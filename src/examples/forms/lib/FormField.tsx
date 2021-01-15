import React, {useContext, useEffect, useState} from "react";
import {FormContext, FormContextType} from "./Form";
import {FormHelperText} from "@material-ui/core";

interface FormFieldParams {
    id: string;
    value: any;
    validators: ((value: any) => boolean | string)[];
    errorText?: string;

    // TODO - lots of things, could also pass in display react nodes if you wanted to be able to customize
    // TODO - what about not checking validty til it's been changed? :thinking-face:
}

export const FormField: React.FC<FormFieldParams> = (params) => {
    const {id, value, validators, errorText} = params;
    const context = useContext<FormContextType>(FormContext);
    const [invalidMessages, setInvalidMessages] = useState<string[]>([]);

    useEffect(() => {
        const messages: string[] = [];
        let isValid = true;
        validators.forEach(validator => {
            const result = validator(value);
            if (typeof result === 'string' && result) {
                isValid = false;
                messages.push(result);
            } else if (typeof result === 'boolean' && !result) {
                isValid = false;
            }
        });

        if (!isValid && messages.length === 0 && errorText) {
            messages.push(errorText);
        }
        setInvalidMessages(messages);
        context.update(id, value, isValid);
    }, [context, id, value, validators]);

    return (
        <>
            {invalidMessages.map(message => (<FormHelperText error={true}>{message}</FormHelperText>))}
        </>
    );
}

