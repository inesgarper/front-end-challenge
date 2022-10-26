import { SelectProps } from './types';

export const Select = ({ handleSelectChange }: SelectProps) => (
  <select onChange={handleSelectChange}>
    <option value="name">by name</option>
    <option value="author.name">by author</option>
    <option value="genre.name">by genre</option>
  </select>
);
