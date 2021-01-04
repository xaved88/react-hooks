import React, {useEffect, useState} from "react";
import {Dispatch} from "./Dispatch";
import {GrandChild} from "./GrandChild";
import {Typography} from "@material-ui/core";

interface ChildProps {
    name: string;
}

export const Child: React.FC<ChildProps> = (props) => {
    const {name} = props;
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const index = Dispatch.listen('test', test);
        return () => {
            Dispatch.clean(index);
        };
    }, []);

    const test = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <>
            <Typography>
                Child Name: {name}
            </Typography>
            <Typography>
                Dispatch Count: {count}
            </Typography>
            <GrandChild/>
        </>
    );
}