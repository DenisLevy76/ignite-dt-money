import styled from 'styled-components';
import { ButtonComponent } from '../../components/HeaderComponent/styles';

export const TransactionsPageContainer = styled.main`
  margin-top: -3.5rem;

  form {
    padding-top: 5rem;
    display: flex;
    gap: 1rem;
  }

  table {
    width: 100%;
    > tbody {
      padding: 1.5rem 0 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
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

export const TableItem = styled.tr`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};
  padding: 1.25rem 2rem;
  border-radius: 8px;

  > .date {
    text-align: right;
  }
`

export const PriceHighlight = styled.td<{ color?: 'green' | 'red' }>`
  display: block;
  color: ${({ theme, color }) => color === 'green' ? theme['green-500'] : theme['red-500']};
`