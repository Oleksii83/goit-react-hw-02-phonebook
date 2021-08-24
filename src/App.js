import { Component } from 'react';
import './App.css';
// import shortid from 'shortid';
import Form from './Component/PhonebookForm/PhonebookForm';
// import Search from './Component/SearchForm/SearchForm';
import Filter from './Component/SearchForm/SearchForm';
import FilterList from './Component/FilterList/FilterList';
// import { NIL as NIL_UUID } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // const normalizedFilter = this.state.filter.toLocaleLowerCase();

  getFilterSearch = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  onSearchChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <div className="Input-form">
          <h2>Phonebook</h2>
          <Form onSubmit={this.formSubmitHandler} />
        </div>
        <Filter value={this.state.filter} onChange={this.onSearchChange} />

        <FilterList contacts={this.getFilterSearch()} onDeleteContact={this.onDeleteContact} />
      </>
    );
  }
}

export default App;
