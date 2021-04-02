import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css';


export default function Searchbar ({onSubmit}) {
 
  const [query, setQuery] = useState('');

  const handleQueryChange = event => setQuery(event.currentTarget.value.toLowerCase() );
  
  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error("Введите что-то.");
      return;
    }

    onSubmit(query);
    setQuery('');
  };

    return (
      <header className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

              <input
                 className={s.SearchFormInput}
                 type="text"
                 name="query"
                 value={query}
                 onChange={handleQueryChange}
                 autoComplete="off"
                 autoFocus
                 placeholder="Search pictures from Pixabay..."
              />
           </form>
      </header>
    );
  }

  Searchbar.propTypes = {
     onSubmit: PropTypes.func,
};