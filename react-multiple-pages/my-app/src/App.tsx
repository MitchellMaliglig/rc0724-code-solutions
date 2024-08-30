import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Dashboard } from './pages/Dashboard';
import { Details } from './pages/Details';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function fn() {}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Header></Header>}>
        <Route index element={<Dashboard></Dashboard>}></Route>
        <Route path="details/:itemId" element={<Details></Details>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound onDone={fn}></NotFound>}></Route>
      </Route>
    </Routes>
  );
}
