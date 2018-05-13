import * as React from 'react';
import * as styles from './App.css';
import Layout from './components/Layout/Layout';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Layout><h2>Ola</h2></Layout>
      </div>
    );
  }
}

export default App;
