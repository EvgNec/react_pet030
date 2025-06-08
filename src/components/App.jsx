import React, { Component } from 'react'
import Container from './Container'

export class App extends Component {
  state = {
    showModal: false,
  };

  render() {
    return (
      <Container>
        Test
      </Container>
    )
  }
}

export default App
