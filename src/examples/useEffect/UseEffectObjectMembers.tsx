import React, {useEffect, useState} from "react";
import {Box, Button, Input, Typography} from "@material-ui/core";

interface Params {
    record: Record;
}

interface Record {
    id: number;
    name: string;
}

const Child: React.FC<Params> = (params) => {
    const {record} = params;
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount((prev) => prev + 1);
    }, [record.id, record.name]);

    return (
        <>
            <Typography variant={'subtitle1'}>
                Object Id/Name: {record.id} / {record.name}
            </Typography>
            <Typography variant={'subtitle1'}>
                Count: {count}
            </Typography>
        </>
    );
}

export const UseEffectObjectMembers: React.FC = () => {
    const [displayId, setDisplayId] = useState<number>(1337);
    const [displayName, setDisplayName] = useState<string>('Bob');
    const [record, setRecord] = useState<Record>({id: 1337, name: 'Bob'});

    const updateRecord = () => {
        setRecord({id: displayId, name: displayName});
    };

    return (
        <>
            <Typography variant={'h5'}>
                UseEffect - Object Members
            </Typography>
            <Typography variant={'caption'}>
                Changing the entire object, whilst listening to the individual object members
            </Typography>
            <Box>
                <Input
                    type={'number'}
                    value={displayId}
                    onChange={(e) => setDisplayId(+e.target.value)}
                />
                <Input
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <Button
                    variant={'contained'}
                    onClick={updateRecord}
                >Update Object</Button>
            </Box>
            <Child record={record}/>
        </>
    );
}