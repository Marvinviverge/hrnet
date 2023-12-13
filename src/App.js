import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from './pages/public/publicRouter.js';

/**
 * Composant racine de l'application.
 * @function App
 * @returns {React.Component} Composant React représentant l'application.
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
