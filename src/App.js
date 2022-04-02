// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'
import Portfolios from './components/portfolio/portfolios';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Portfolios portfolios ={this.state.portfolios} />
      </div>
    );
  }

  state = {
    portfolios: []
  }

  componentDidMount() {
    fetch('portfolios/333')
    .then(res => res.json())
    .then((data) => {
      this.setState({ portfolios: data })
    })
    .catch(console.log)
  }

}

export default App;