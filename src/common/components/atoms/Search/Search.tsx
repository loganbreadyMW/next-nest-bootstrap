import { SearchIcon } from '@atoms/Icons/SearchIcon';
import { useState } from 'react';
import styles from './Search.module.scss';

interface SearchProps {
  placeHolder: string;
}

export const Search = ({ placeHolder }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`You searched for ${searchTerm}`);
  };
  return (
    <div className={styles['form-container']}>
      <SearchIcon />
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder={placeHolder} value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
};
