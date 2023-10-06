import '@/assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from '@/pages/public/publicRouter.js';

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
