import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PublicHome from './views/public/Home/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routers from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
    <ToastContainer
    position="bottom-right"
    autoClose={5000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    />
    <BrowserRouter>
      <Routers/>
    </BrowserRouter>

    </div>
  );
}

export default App;
