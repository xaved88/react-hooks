import React, {useEffect, useState} from "react";
import {Button, Typography} from "@material-ui/core";

interface Params {
    id: number;
}

const Child: React.FC<Params> = (params) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount((prev) => prev + 1);
    });

    return (
        <>
            <Typography variant={'subtitle1'}>
                Count: {count}
            </Typography>
        </>
    );
}

export const UseEffectEmpty: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <Typography variant={'h5'}>
                UseEffect - Empty
            </Typography>
            <Button
                variant={'contained'}
                onClick={() => setCount((prev) => prev + 1)}
            >Change Params (Current: {count})</Button>
            <Child id={count}/>
        </>
    );
}