import React, {useEffect, useState} from "react";
import {Button, Input, Typography} from "@material-ui/core";

interface Params {
    id: string;
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

export const UseEffectString: React.FC = () => {
    const [displayValue, setDisplayValue] = useState<string>('string here');
    const [value, setValue] = useState<string>('string here');

    return (
        <>
            <Typography variant={'h5'}>
                UseEffect - String
            </Typography>
            <Input
                value={displayValue}
                onChange={(e) => setDisplayValue(e.target.value as string)}
            />
            <Button
                variant={'contained'}
                onClick={() => setValue(displayValue)}
            >Change String</Button>
            <Child id={value}/>
        </>
    );
}