import React, {useCallback, useEffect, useState} from "react";
import {Form} from "./lib/Form";
import {FormField} from "./lib/FormField";
import {FormHelperText, Input, InputLabel, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

interface MiniFormParams{
    onValuesChanged: (values: { [key: string]: any }) => void;
    onValidityChanged: (valid: boolean) => void;
}

export const MiniForm: React.FC<MiniFormParams> = (params) => {
    const {onValuesChanged, onValidityChanged} = params;
    const [isValid, setIsValid] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
    const [mathValue, setMathValue] = useState<number>(0);
    const [colorValue, setColorValue] = useState<string>("Red");

    useEffect(() => onValuesChanged(formValues),[formValues, onValuesChanged]);
    useEffect(() => onValidityChanged(isValid),[isValid, onValidityChanged]);

    const validateAl = useCallback((value: number): boolean => {
        return value === 2;
    }, []);

    const validateBob = useCallback((value: string): boolean => {
        return value === "Yellow";
    }, []);

    return (
        <Form
            onValidityChanged={setIsValid}
            onValuesChanged={setFormValues}
        >
            <Box>
                <Typography variant={'h5'}>
                    Mini Form
                </Typography>
                {!isValid && (<FormHelperText error={true}>Mini form is invalid as a form</FormHelperText>)}
            </Box>
            <Box>
                <InputLabel>1 + 1 = ?</InputLabel>
                <Input
                    type={'number'}
                    value={mathValue}
                    onChange={(e) => setMathValue(+e.target.value)}
                />
                <FormField
                    id={'number'}
                    value={mathValue}
                    doValidate={validateAl}
                    errorText={"!bonk go back to school yo"}
                />
            </Box>
            <Box>
                <InputLabel>Best Color?</InputLabel>
                <Input
                    type={'text'}
                    value={colorValue}
                    onChange={(e) => setColorValue(e.target.value)}
                />
                <FormField
                    id={'color'}
                    value={colorValue}
                    doValidate={validateBob}
                    errorText={"R + G = ?"}/>
            </Box>
        </Form>
    );
}

