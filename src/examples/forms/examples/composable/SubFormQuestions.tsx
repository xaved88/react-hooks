import React, {useCallback, useState} from "react";
import {FormField} from "../../lib/FormField";
import {Input, InputLabel} from "@material-ui/core";
import Box from "@material-ui/core/Box";

export const SubFormQuestions: React.FC = () => {
    const [mathValue, setMathValue] = useState<number>(0);
    const [colorValue, setColorValue] = useState<string>("Red");

    const validateMath = useCallback((value: number): string => {
        return value === 2 ? '' : '!bonk go back to school yo';
    }, []);

    const validateColor = useCallback((value: string): string => {
        return value === "Yellow" ? '' : 'R + G = ?';
    }, []);

    return (
        <>
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
                    validators={[validateMath]}
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
                    validators={[validateColor]}
                    errorText={'You should not see me'}/>
            </Box>
        </>
    );
}

