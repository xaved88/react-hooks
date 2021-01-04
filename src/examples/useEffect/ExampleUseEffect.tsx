import React from "react";
import {UseEffectArray} from "./UseEffectArray";
import {Divider} from "@material-ui/core";
import {UseEffectEmpty} from "./UseEffectEmpty";
import {UseEffectString} from "./UseEffectString";
import {UseEffectNumber} from "./UseEffectNumber";
import {UseEffectObject} from "./UseEffectObject";
import {UseEffectObjectMembers} from "./UseEffectObjectMembers";
import {UseEffectObjectUpdated} from "./UseEffectObjectUpdated";
import {UseEffectSameMethod} from "./UseEffectSameMethod";
import {UseEffectDifferentMethod} from "./UseEffectDifferentMethod";

export const ExampleUseEffect: React.FC = () => {
    return (
        <>
            <UseEffectEmpty/>
            <Divider/>
            <UseEffectArray/>
            <Divider/>
            <UseEffectString/>
            <Divider/>
            <UseEffectNumber/>
            <Divider/>
            <UseEffectObject/>
            <Divider/>
            <UseEffectObjectMembers/>
            <Divider/>
            <UseEffectObjectUpdated/>
            <Divider/>
            <UseEffectSameMethod/>
            <Divider/>
            <UseEffectDifferentMethod/>
            <Divider/>
        </>
    );
}
