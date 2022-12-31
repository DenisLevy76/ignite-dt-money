import styled, { css } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00000075;
`;


export const ModalContent = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 8px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme['gray-800']};

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > button[type="submit"] {
      margin-top: 2.5rem;
      padding: 1rem 0;
    }
  }

  @media (max-width: 800px) {
    padding: 1rem;
    min-width: 0;
    width: 95%;
  }
`;

export const TransactionRadioGroup = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

export const TransactionRadioButton = styled(RadioGroup.Item) <{ variant?: 'income' | 'outcome' }>`
  ${({ theme, variant }) => css`
    padding: 1rem 1.25rem;
    border-radius: 8px;
    background: ${theme['gray-700']};
    color: ${theme['gray-300']};
    border: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;

    svg {
      color: ${variant === 'income' ? theme['green-300'] : theme['red-300']};
    }

    &:hover {
      background: ${theme['gray-600']};
    }

    &[data-state="checked"] {
      background: ${variant === 'income' ? theme['green-500'] : theme['red-500']};
      color: ${theme['gray-100']};

      svg {
        color: ${theme['gray-100']};
      }
    }
  `}
`

export const CloseModalButton = styled(Dialog.Close)`
  background-color: transparent;
  border: none;
  font-size: 0;

  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme['green-500']};
  }
`