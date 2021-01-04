import React, {useContext} from "react";
import {Typography} from "@material-ui/core";
import {ContextExample, ContextExampleType} from "./ExampleUseContext";
import {UseContextContextDisplay} from "./UseContextChild";

export const UseContextGrandChild: React.FC = () => {
  const currentContext: ContextExampleType = useContext<ContextExampleType>(ContextExample);

  return (
      <>
        <Typography>Grand Child Context:</Typography>
        <UseContextContextDisplay context={currentContext}/>
      </>
  );
}
