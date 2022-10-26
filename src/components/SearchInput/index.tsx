import { Container, Input, SearchLineIcon } from './styles';
import { SearchInputProps } from './types';

export const SearchInput = ({
  placeholder,
  className,
  handleInputChange,
}: SearchInputProps) => (
  <Container className={className}>
    <SearchLineIcon />
    <Input
      name="search"
      label="search"
      hideLabel={true}
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  </Container>
);
