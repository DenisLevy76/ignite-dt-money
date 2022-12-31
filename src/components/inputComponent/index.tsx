import styled from 'styled-components';

export const InputComponent = styled.input`
  background: ${({ theme }) => theme['gray-900']};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  border: none;
  width: 100%;
`;
