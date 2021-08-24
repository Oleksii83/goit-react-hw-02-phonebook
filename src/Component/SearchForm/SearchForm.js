// import { Component } from 'react';
import React from 'react';
import s from './SearchForm.module.css';

// class Search extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   onSearchChange = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   searchSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <>

// <label className={s.SearchContainer}>
//   Find contacts by name:
//   <input
//     type="text"
//     value={this.state.filter}
//     onChange={this.onSearchChange}
//     className="InputSearch"
//     placeholder="Paul Richardson"
//   />
// </label>
//       </>
//     );
//   }
// }
const Filter = ({ value, onChange }) => (
  <label className={s.SearchContainer}>
    <h2 className={s.SearchName}>Contact</h2>
    <p className={s.ContName}>Find contacts by name:</p>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="InputSearch"
      placeholder="Paul Richardson"
    />
  </label>
);

export default Filter;
