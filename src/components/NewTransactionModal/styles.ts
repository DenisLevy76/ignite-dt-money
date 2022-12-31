import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

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
`;

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