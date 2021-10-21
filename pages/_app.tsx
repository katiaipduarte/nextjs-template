import LayoutWrapper from '@components/templates/LayoutWrapper/LayoutWrapper';
import { useDarkMode } from '@lib/hooks/useDarkMode';
import type { AppProps } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles';
import { darkTheme } from 'styles/themes/darkTheme';
import { lightTheme } from 'styles/themes/lightTheme';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <LayoutWrapper
        themeToggler={themeToggler as () => void}
        mountedComponent={mountedComponent as boolean}
        theme={theme as string}
      >
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default App;
