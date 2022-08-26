import './App.css';
import { AlertManager, alertReducer } from './Components/Alerts/AlertManager.js';
import AlertExample from './Components/Alerts/AlertExample';
import { Grid } from '@mui/material';
import { createContext, useReducer } from 'react';

const initialState = { alerts: [] }

export const AlertContext = createContext()

function App() {
  const [state, dispatch] = useReducer(
    alertReducer,
    initialState
  );
  const options = [
    { value: 'error', text: 'Error' },
    { value: 'warning', text: 'Warning' },
    { value: 'info', text: 'Info' },
    { value: 'success', text: 'Success' },
  ];
  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      <Grid container spacing={4}>
        <Grid item md={8}>
          <AlertExample options={options} />
        </Grid>
        <Grid item md={3}>
          <AlertManager alerts={state.alerts} />
        </Grid>
      </Grid>
    </AlertContext.Provider>
  );
}

export default App;
