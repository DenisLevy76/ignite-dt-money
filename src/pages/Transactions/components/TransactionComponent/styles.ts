import styled from 'styled-components'

export const TableItem = styled.tr`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};
  padding: 1.25rem 2rem;
  border-radius: 8px;
  gap: 1rem;

  > .date {
    text-align: right;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    text-align: center;

    > .date {
      text-align: center;
    }
  }
`

export const PriceHighlight = styled.td<{ color?: 'green' | 'red' }>`
  display: block;
  color: ${({ theme, color }) =>
    color === 'green' ? theme['green-500'] : theme['red-500']};
`
