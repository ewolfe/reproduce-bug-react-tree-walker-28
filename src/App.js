import React, { Component } from 'react';
import styled from 'styled-components';
import reactTreeWalker from 'react-tree-walker';
import emotion from 'react-emotion'

const P = styled.p`
  background: linear-gradient(20deg,rgb(219,112,147),#daa357);
  color: #fff;
  font-family: "Avenir Next",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  padding: 1rem;
`;

const Strong = emotion('strong')`
  font-weight: 600;
  padding: 1rem;
  background: #1e2029;
  color: #fff;
`;

class App extends Component {
  tryToWalkAStyledComponent() {
    reactTreeWalker(<P>styled component</P>, (element) => {
      console.log(element);
    })
  }

  tryToWalkAnEmotionComponent() {
    reactTreeWalker(<Strong>emotion component</Strong>, (element) => {
      console.log(element);
    })
  }

  walkANormalComponent() {
    reactTreeWalker(<p>normal component</p>, (element) => {
      console.log('element: ', element);
    })
  }

  render() {
    return (
      <div className="App">
        <P>This is a custom {'`<P />`'} element, styled using styled-components</P>
        <Strong>This is a custom {'`<Strong />`'} element, styled using an emotion component</Strong>
        <br />
        <br />
        <button onClick={this.tryToWalkAStyledComponent}>Click me to walk a 'styled-component'</button>
        <br />
        <br />
        <button onClick={this.tryToWalkAnEmotionComponent}>Click me to walk an 'emotion' component</button>
        <br />
        <br />
        <button onClick={this.walkANormalComponent}>Click me to walk a normal component</button>
        <br/>
        <br/>
        <br/>
        <hr />
        <br/>
        <br/>
        <small>Links:
          <br/>
          <a href="https://emotion.sh/">https://emotion.sh/</a><br/>
          <a href="https://www.styled-components.com/">https://www.styled-components.com/</a>
        </small>
      </div>
    );
  }
}

export default App;
