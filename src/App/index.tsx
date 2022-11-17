import ThemeProvider from '../styles/themeProvider';
import Global from '../styles/global';
import { Router } from '../router';
import { BrowserRouter } from 'react-router-dom';
import { AppTemplate, PageContainer } from './styles';
import MenuNav from '../components/MenuNav';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../services/queryClient';

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Global/>
        <ThemeProvider>
          <AppTemplate isLogged={!!localStorage.getItem('@token')}>
            {
              localStorage.getItem('@token') && (
                <MenuNav/>
              )
            }
            <PageContainer>
              <Router/>
            </PageContainer>
          </AppTemplate>
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
