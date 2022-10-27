import { Text } from '$/components/Text';

import { Container } from './styles';
import { TagProps } from './types';

export const Tag = ({ text }: TagProps) => (
  <Container>
    <Text tag="p" variant="caption" color={'grayscale900'}>
      {text}
    </Text>
  </Container>
);
