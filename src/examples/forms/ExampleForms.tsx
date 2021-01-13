import React, {useCallback, useState} from "react";
import {Form} from "./lib/Form";
import {FormField} from "./lib/FormField";
import {FormHelperText, Input, InputLabel, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {MiniForm} from "./MiniForm";

// TODO - write test with separate components & form nesting??
// TODO - asynchronous & race conditions with network response
// TODO - composable validation
// TODO - datepicker example - start & end dates each with their own validation, but then also checking against each other

export const ExampleForms: React.FC = () => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
    const [alValue, setAlValue] = useState<string>("Al");
    const [bobValue, setBobValue] = useState<string>("Bob");
    const [miniFormValue, setMiniFormValue] = useState<{ [key: string]: any }>({});
    const [miniFormValid, setMiniFormValid] = useState<boolean>(false);

    const validateAl = useCallback((value: string): boolean => {
        return value.length < 5;
    }, []);

    const validateBob = useCallback((value: string): boolean => {
        return value === "Joe";
    }, []);

    const validateMiniForm = useCallback((): boolean => {
        return miniFormValid;
    }, [miniFormValid]);

    return (
        <Form
            onValidityChanged={setIsValid}
            onValuesChanged={setFormValues}
        >
            <Box>
                <Typography variant={'h4'}>
                    Form Header
                </Typography>
                {
                    isValid ?
                        (<FormHelperText error={false}>Everything is good!</FormHelperText>) :
                        (<FormHelperText error={true}>Form is invalid</FormHelperText>)
                }
            </Box>
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
                    doValidate={validateAl}
                    errorText={"Al doesn't like big names"}
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
                    doValidate={validateBob}
                    errorText={"Bob is actually named Joe"}/>
            </Box>
            <Box>
                <MiniForm
                    onValuesChanged={setMiniFormValue}
                    onValidityChanged={setMiniFormValid}
                />
                <FormField
                    id={'miniform'}
                    value={miniFormValue}
                    doValidate={validateMiniForm}
                    errorText={"Mini form is invalid as a field"}/>
            </Box>
        </Form>
    );
}

