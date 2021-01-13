import React, {useState} from 'react';
import './App.css';
import {DispatcherExample} from "./examples/dispatcher/DispatcherExample";
import {
    AppBar, Box,
    Card,
    CardContent,
    createMuiTheme,
    MuiThemeProvider,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import {ExampleUseEffect} from "./examples/useEffect/ExampleUseEffect";
import {ExampleUseContext} from "./examples/useContext/ExampleUseContext";
import {ExampleForms} from "./examples/forms/ExampleForms";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function makeTabProps(id: number): object {
    return {
        id: `simple-tab-${id.toString()}`,
        'aria-controls': `simple-tabpanel-${id.toString()}`,
    };
}

interface TabPanelProps {
    children: React.ReactNode;
    id: number;
    selectedValue: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, selectedValue, id, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={selectedValue !== id}
            id={`simple-tabpanel-${id}`}
            aria-labelledby={`simple-tab-${id}`}
            {...other}
        >
            {selectedValue === id && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function App() {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    return (
        <MuiThemeProvider theme={theme}>
            <div className={'App'}>
                <AppBar position="static">
                    <Tabs value={selectedTab} onChange={(event, newValue) => setSelectedTab(newValue)}
                          aria-label="simple tabs example">
                        <Tab label="-" {...makeTabProps(0)} />
                        <Tab label="Use Effect" {...makeTabProps(1)} />
                        <Tab label="Use Context" {...makeTabProps(2)} />
                        <Tab label="Event Dispatcher" {...makeTabProps(3)} />
                        <Tab label="Forms" {...makeTabProps(4)} />
                    </Tabs>
                </AppBar>

                <Card>
                    <CardContent>
                        <TabPanel selectedValue={selectedTab} id={0}>
                            <Typography>
                                Choose a demo to view
                            </Typography>
                        </TabPanel>
                        <TabPanel selectedValue={selectedTab} id={1}>
                            <ExampleUseEffect/>
                        </TabPanel>
                        <TabPanel selectedValue={selectedTab} id={2}>
                            <ExampleUseContext/>
                        </TabPanel>
                        <TabPanel selectedValue={selectedTab} id={3}>
                            <DispatcherExample/>
                        </TabPanel>
                        <TabPanel selectedValue={selectedTab} id={4}>
                            <ExampleForms/>
                        </TabPanel>
                    </CardContent>
                </Card>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
