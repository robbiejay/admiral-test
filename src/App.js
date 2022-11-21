import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from './pages/payment/Payment';
import Modal from './components/modal/Modal';
import modalContext from "./context/ModalContext";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <modalContext.Provider value={{ modalOpen, setModalOpen }}>
    <Router>
      <Switch>
        <Route path={['/']} component={Payment}/>
      </Switch>
    </Router>
    </modalContext.Provider>
  );
}

export default App;
