import React, {useContext, useEffect} from "react";
import {Divider, Typography} from "@material-ui/core";
import {ContextExample, ContextExampleType} from "./ExampleUseContext";
import {UseContextGrandChild} from "./UseContextGrandChild";

export const UseContextChild: React.FC = () => {
  const currentContext: ContextExampleType = useContext<ContextExampleType>(ContextExample);

  useEffect(() => {
    currentContext.setName && currentContext.setName('Norman');
  },[]);

  return (
      <>
        <Typography>Child Current Context:</Typography>
        <UseContextContextDisplay context={currentContext}/>
        <Divider/>
        <UseContextGrandChild/>
        <Divider/>
        <ContextExample.Provider value={{id: 1339, name: 'Daniel', favColor: 'red'}}>
          <UseContextGrandChild/>
        </ContextExample.Provider>
      </>
  );
}


interface ContextDisplayProps {
  context: ContextExampleType;
}

export const UseContextContextDisplay: React.FC<ContextDisplayProps> = (props) => {
  const {id, name, favColor} = props.context;
  return (
      <>
        <Typography>ID: {id}</Typography>
        <Typography>Name: {name}</Typography>
        <Typography>FavColor: {favColor}</Typography>
      </>
  );
}
