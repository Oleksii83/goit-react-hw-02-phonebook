import { Component } from 'react';
import './App.css';
import Form from './Component/PhonebookForm/PhonebookForm';
// import { NIL as NIL_UUID } from 'uuid';

class App extends Component {
  state = {};

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div className="Input-form">
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
    );
  }
}

export default App;
