import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ButtonComponent = styled.button`
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  border: none;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme['green-300']};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
