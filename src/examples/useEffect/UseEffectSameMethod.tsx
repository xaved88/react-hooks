import React, {useEffect, useState} from "react";
import {Box, Button, Input, Typography} from "@material-ui/core";

interface Params {
    callback: () => void;
}

const Child: React.FC<Params> = (params) => {
    const {callback} = params;
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount((prev) => prev + 1);
    }, [callback]);

    return (
        <>
            <Typography variant={'subtitle1'}>
                Count: {count}
            </Typography>
        </>
    );
}

export const UseEffectSameMethod: React.FC = () => {
    const method = () => {
        setText('updated text');
    };

    const [text, setText] = useState<string>('original text');
    const [callback, setCallback] = useState<() => void>(method);

    return (
        <>
            <Typography variant={'h5'}>
                UseEffect - Same Method
            </Typography>
            <Typography variant={'caption'}>
                Callback called text: {text}
            </Typography>
            <Button
                variant={'contained'}
                onClick={() => setCallback(method)}
            >Update Method</Button>
            <Child callback={callback}/>
        </>
    );
}