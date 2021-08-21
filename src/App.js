import { Component } from 'react';
import './App.css';
// import { NIL as NIL_UUID } from 'uuid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleNameChange = e => {
    console.log(e.currentTarget.value);
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="Input-form">
        <h2>Phonebook</h2>
        <form className="Input-container" onSubmit={this.handleSubmit}>
          <h3 className="Input-name"> Name </h3>
          <label>
            <input
              className="Input"
              value={this.state.name}
              onChange={this.handleNameChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <button type="submit" className="input-btn">
            Add cotact
          </button>
        </form>
      </div>
    );
  }
}

export default App;
