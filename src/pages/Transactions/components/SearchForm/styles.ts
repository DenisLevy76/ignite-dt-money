import styled from 'styled-components';
import { ButtonComponent } from '../../../../components/HeaderComponent/styles';

export const SearchFormContainer = styled.form`
  padding-top: 5rem;
  display: flex;
  gap: 1rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const SearchButton = styled(ButtonComponent)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['green-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme['gray-100']};
  }
`