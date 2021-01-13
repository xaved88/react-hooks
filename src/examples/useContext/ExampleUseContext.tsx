import React, {useState} from "react";
import {UseContextChild} from "./UseContextChild";

export interface ContextExampleType {
  id: number;
  name: string;
  favColor: string;
  setName?: (name: string) => void;
}

export const ContextExample = React.createContext({id: 1337, name: 'Bob', favColor: 'blue'});

export const ExampleUseContext: React.FC = () => {
  const [name, setName] = useState<string>('Charlie')
  const ourContextValues = {id: 1338, name, favColor: 'green', setName};

  return (
      <ContextExample.Provider value={ourContextValues}>
        <UseContextChild/>
      </ContextExample.Provider>
  );
}

