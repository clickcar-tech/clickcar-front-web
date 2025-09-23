import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './pages/landingPage';

export const ROUTES = {
  HOME: '/',
} as const;

export function AppRouter() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
      {children}
  );
};
