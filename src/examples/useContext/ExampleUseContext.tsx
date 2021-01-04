import React from "react";
import {UseContextChild} from "./UseContextChild";

export interface ContextExampleType {
  id: number;
  name: string;
  favColor: string;
}

export const ContextExample = React.createContext({id: 1337, name: 'Bob', favColor: 'blue'});
export const ExampleUseContext: React.FC = () => {
  const ourContextValues = {id: 1338, name: 'Charlie', favColor: 'green'}

  return (
      <ContextExample.Provider value={ourContextValues}>
        <UseContextChild/>
      </ContextExample.Provider>
  );
}

