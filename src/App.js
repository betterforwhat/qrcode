import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import Background from 'components/Background';
import Profile from 'components/Profile';
import Evaluation from 'components/Evaluation';
import Introduction from 'components/Introduction';

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Background/>
        <Profile />
        <Evaluation/>
        <Introduction/>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
