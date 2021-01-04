import React from "react";
import {Dispatch, DispatchEvent} from "./Dispatch";
import {Child} from "./Child";
import {Button} from "@material-ui/core";

export const GrandChild: React.FC = () => {
    const dispatch = () => {
        Dispatch.dispatch(new DispatchEvent('test'));
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={dispatch}>Dispatch Grandchild Event</Button>
        </>
    );
}