import styled from 'styled-components'

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