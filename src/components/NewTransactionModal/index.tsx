import { CloseModalButton, ModalContent, StyledOverlay } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ButtonComponent } from '../HeaderComponent/styles';
import { InputComponent } from '../inputComponent';
import { X } from 'phosphor-react';

export const NewTransactionModal: React.FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonComponent>Nova transação</ButtonComponent>
      </Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay>
          <ModalContent>
            <header>
              <Dialog.Title>Nova transação</Dialog.Title>
              <CloseModalButton>
                <X size={24} />
              </CloseModalButton>
            </header>

            <form>
              <InputComponent type="text" placeholder="Descrição" required />
              <InputComponent type="number" placeholder="Preço" required />
              <InputComponent type="number" placeholder="Categoria" required />

              <ButtonComponent type="submit">Cadastrar</ButtonComponent>
            </form>
          </ModalContent>
        </StyledOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
