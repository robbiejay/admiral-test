import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import { useHistory, BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Payment from './pages/payment/Payment';
import Modal from './components/modal/Modal';
import {Button} from '@material-ui/core'
import modalContext from "./context/ModalContext";

function App() {
  const history = useHistory();
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <modalContext.Provider value={{ modalOpen, setModalOpen }}>
    <Router>
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/3f0TEST309'} />
        </Route>
        <Route path={['/']} component={Payment}/>
      </Switch>
    </Router>

    </modalContext.Provider>
  );
}

export default App;
