import { SelectInput, Option } from './styles';
import { SelectProps } from './types';

export const Select = ({ handleSelectChange }: SelectProps) => (
  <SelectInput onChange={handleSelectChange}>
    <Option value="name">by name</Option>
    <option value="author.name">by author</option>
    <option value="genre.name">by genre</option>
  </SelectInput>
);
