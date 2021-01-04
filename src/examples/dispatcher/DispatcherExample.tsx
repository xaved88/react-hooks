import React, {useState} from "react";
import {Child} from "./Child";
import {Button, Input} from "@material-ui/core";

export const DispatcherExample: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>();
    const [children, setChildren] = useState<string[]>(['Billy']);


    const makeChild = (): void => {
        if (!inputValue) {
            return;
        }

        const newValue = children.slice();
        newValue.push(inputValue);
        setChildren(newValue);
    };

    const deleteChild = (name: string): void => {
        const index = children.indexOf(name);
        if (index === -1) {
            return;
        }

        const newValue = children.slice();
        newValue.splice(index, 1);
        setChildren(newValue);
    }

    return (
        <>
            <div>
                <Input
                    onChange={(e) => setInputValue(e.target.value as string)}
                />
                <button onClick={makeChild}>Make Child</button>
            </div>
            {
                children.map(child => (
                    <div key={child}>
                        <Child name={child}/>
                        <br/>
                        <Button variant="contained" color="secondary" onClick={() => deleteChild(child)}>Delete</Button>
                    </div>))
            }
        </>
    );
}