import React, { Component } from 'react';
import Panel from './Panel';

class App extends Component {
  state = {
    text:
      'For exaple:\n\n# Header\n## Sub Header\nThis is **bold text**\n\nThis is link to [Google](www.google.com)\n\n`Line of code`\n\n```\nThis is\na whole block\nof code\n```\n\nHere is a list\n- Item\n- Item\n- Item\n\nIt can be ordered as well\n1. Item 1\n2. Item 2\n3. Item 3\n\n> This is how you mark quotation\n\nEnd we can also show an image:\n\n![Target](https://pngimg.com/uploads/target/target_PNG69.png)'
  };
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
    console.log(this.state.text);
  };
  render() {
    return (
      <div className='App container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <textarea
              id='editor'
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange}
              value={this.state.text}
              autoFocus
            ></textarea>
          </div>
          <Panel text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
