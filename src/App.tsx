import * as React from 'react';
import * as styles from './App.css';
import Layout from './components/Layout/Layout';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <Layout><h2>Ola</h2></Layout>
      </div>
    );
  }
}

export default App;
