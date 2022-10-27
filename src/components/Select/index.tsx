import { SelectInput, Option } from './styles';
import { SelectProps } from './types';

export const Select = ({ handleSelectChange }: SelectProps) => (
  <div>
    <label htmlFor="sort" />
    <SelectInput name="sort" onChange={handleSelectChange}>
      <option value="name">by name</option>
      <option value="author.name">by author</option>
      <option value="genre.name">by genre</option>
    </SelectInput>
  </div>
);
