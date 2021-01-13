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

export const UseEffectDifferentMethod: React.FC = () => {
    const method = () => {
        setText('updated text');
    };

    const secondMethod = () => {
        setText('updated second method text');
    }

    const [text, setText] = useState<string>('original text');
    const [callback, setCallback] = useState<() => void>(() => method);

    return (
        <>
            <Typography variant={'h5'}>
                UseEffect - Different Method
            </Typography>
            <Typography variant={'caption'}>
                Callback called text: {text}
            </Typography>
            <Button
                variant={'contained'}
                onClick={() => setCallback(() => secondMethod)}
            >Change Method</Button>
            <Child callback={callback}/>
        </>
    );
}
