import React from 'react';
import QueryTabs from './QueryTabs';
import {Button, Card, Paper} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ResultsTable from "./ResultsTable";
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
];
function App() {
    return (
        <React.Fragment>
            <Card sx={{ height: 360, width: '100%' }}>
                <QueryTabs />
            </Card>
            <Button variant="contained" endIcon={<PlayArrowIcon />}>
                Run
            </Button>
            <Paper sx={{ width: '100%' }}>
                <ResultsTable data={{columns: "nothing", rows}}/>
            </Paper>
        </React.Fragment>
    );
}

 export default App;