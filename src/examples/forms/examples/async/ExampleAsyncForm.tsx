import React, {useState} from "react";
import {FormHelperText, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {AsyncFormQuestions} from "./AsyncFormQuestions";
import {Form} from "../../lib/Form";

// TODO - datepicker example - start & end dates each with their own validation, but then also checking against each other
// TODO - asynchronous & race conditions with network response
// TODO - initial values and not showing that it's invalid? so having -1 0 1 for validities?
// TODO -> if the form owner wants to say "Hey kids, give me all your values again!" Or maybe just a simple state request. Do we actually need this?

export const ExampleAsyncForm: React.FC = () => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
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
            <AsyncFormQuestions />
        </Form>
    );
}
