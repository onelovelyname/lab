import React from 'react';
import ReactDOM from 'react-dom';
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  sendName(name) {

    const url = "http://localhost:3007/";

    fetch(url, {
      method: 'POST',  
      body: JSON.stringify({
         name: name
      }),  
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => console.log('Success:', response))
      .catch(error => console.error('Error:', error));
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.sendName(this.state.value);
    event.preventDefault();
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// ========================================

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
