import { AuthProvider } from './contexts/AuthContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

import { Routes } from './routes';

function App() {
  return (
    <ThemeContextProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
