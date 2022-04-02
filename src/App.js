// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
// Importando o component Main
import Main from './main'
import Portfolio from './components/portfolio/portfolio';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Portfolio portfolio ={this.state.portfolio} />
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
      this.setState({ portfolio: data })
    })
    .catch(console.log)
  }

}

export default App;