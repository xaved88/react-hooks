import React, {useEffect, useState} from "react";
import {Button, Input, Typography} from "@material-ui/core";

interface Params {
    id: number;
}

const Child: React.FC<Params> = (params) => {
    const {id} = params;
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount((prev) => prev + 1);
    }, [id]);

    return (
        <>
            <Typography variant={'subtitle1'}>
                Count: {count}
            </Typography>
        </>
    );
}

export const UseEffectNumber: React.FC = () => {
    const [displayValue, setDisplayValue] = useState<number>(1337);
    const [value, setValue] = useState<number>(1337);

    return (
        <>
            <Typography variant={'h5'}>
                UseEffect - Number
            </Typography>
            <Input
                type={'number'}
                value={displayValue}
                onChange={(e) => setDisplayValue(+e.target.value)}
            />
            <Button
                variant={'contained'}
                onClick={() => setValue(displayValue)}
            >Change Number</Button>
            <Child id={value}/>
        </>
    );
}