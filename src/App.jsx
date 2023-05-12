import { BrowserRouter } from 'react-router-dom';

import NavBar from './modules/NavBar/NavBar.jsx';
import UserRoutes from './shared/routes/UseRoutes';

import './shared/style/style.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <hr />
        <UserRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
