import Layout from 'layouts/Layout';
import Index from 'pages';
import Bordercollie from 'pages/bordercollie';
import RhodesianInfoPage from 'pages/rhodesian';
import { BrowserRouter as Route, Routes, Switch, BrowserRouter } from 'react-router-dom';
import 'style/styles.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Layout>
          <Switch>
            <Route path='/rhodesian'>
              <RhodesianInfoPage />
            </Route>
            <Route path='/bordercollie'>
              <Bordercollie />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Routes>
    </div>
  );
}

export default App;