import React, {useState} from "react";
import {FormField} from "./lib/FormField";
import {Input, InputLabel} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {FormValidationMethodType, FormValidators} from "./lib/FormValidators";

export const MainFormQuestions: React.FC = () => {
    const [alValue, setAlValue] = useState<string>("Al");
    const [bobValue, setBobValue] = useState<string>("Bob");

    const [alValidators] = useState<FormValidationMethodType<string>[]>(() => [
        FormValidators.StringMinLength(1),
        FormValidators.StringMaxLength(4),
    ]);
    const [bobValidators] = useState<FormValidationMethodType<string>[]>(() => [
        FormValidators.ValueEquals("Joe", "His name is not actually Bob"),
    ]);

    return (
        <>
            <Box>
                <InputLabel>Al</InputLabel>
                <Input
                    type={'text'}
                    value={alValue}
                    onChange={(e) => setAlValue(e.target.value)}
                />
                <FormField
                    id={'al'}
                    value={alValue}
                    validators={alValidators}
                />
            </Box>
            <Box>
                <InputLabel>Bob</InputLabel>
                <Input
                    type={'text'}
                    value={bobValue}
                    onChange={(e) => setBobValue(e.target.value)}
                />
                <FormField
                    id={'bob'}
                    value={bobValue}
                    validators={bobValidators}/>
            </Box>
        </>
    );
}
