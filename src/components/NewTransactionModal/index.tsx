import {
  CloseModalButton,
  ModalContent,
  StyledOverlay,
  TransactionRadioButton,
  TransactionRadioGroup,
} from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { ButtonComponent } from '../HeaderComponent/styles';
import { InputComponent } from '../inputComponent';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

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
              <TransactionRadioGroup>
                <TransactionRadioButton variant="income" value="income">
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionRadioButton>
                <TransactionRadioButton variant="outcome" value="outcome">
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionRadioButton>
              </TransactionRadioGroup>
              <ButtonComponent type="submit">Cadastrar</ButtonComponent>
            </form>
          </ModalContent>
        </StyledOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
