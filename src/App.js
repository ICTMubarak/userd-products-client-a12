import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/Routs/Routs';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
