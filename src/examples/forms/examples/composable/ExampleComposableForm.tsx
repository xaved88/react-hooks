import React, {useState} from "react";
import {FormHelperText, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {MainFormQuestions} from "./MainFormQuestions";
import {FormSubForm} from "../../lib/FormSubForm";
import {SubFormQuestions} from "./SubFormQuestions";
import {Form} from "../../lib/Form";

export const ExampleComposableForm: React.FC = () => {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<{ [key: string]: any }>({});
    const [subFormValue, setSubFormValue] = useState<{ [key: string]: any }>({});

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
            <MainFormQuestions />
            <FormSubForm
                id={'subform'}
                value={subFormValue}
                onValuesChanged={setSubFormValue}
                >
                <Typography variant={'h5'}>
                   Sub Form Header
                </Typography>
                <SubFormQuestions/>
            </FormSubForm>

            <Box>
                <Typography variant={'caption'}>
                    Current Value: {JSON.stringify(formValues)}
                </Typography>
            </Box>
        </Form>
    );
}
