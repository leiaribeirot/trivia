import React from 'react';
import { fetchToken } from '../../services/Api';

import Header from '../../components/Header';

class Game extends React.Component {
  componentDidMount = async () => {
    const apei = await fetchToken();
    console.log(apei);
  }

  render() {
    return (
      <>
        <h1>TRIVIA</h1>
      </>
    );
  }
}

export default Game;
