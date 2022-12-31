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
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';

const newTransactionFormSchema = zod.object({
  description: zod.string().min(5).max(100),
  price: zod.number(),
  category: zod.string().min(1),
  type: zod.enum(['income', 'outcome']),
});

type newTransactionFormData = zod.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal: React.FC = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<newTransactionFormData>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: 'income',
    },
  });

  const handleCreateNewTransaction = async (data: newTransactionFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(data);
  };

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

            <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
              <InputComponent
                type="text"
                placeholder="Descrição"
                required
                {...register('description')}
              />
              <InputComponent
                type="number"
                placeholder="Preço"
                required
                {...register('price', { valueAsNumber: true })}
              />
              <InputComponent
                type="text"
                placeholder="Categoria"
                required
                {...register('category')}
              />
              <Controller
                control={control}
                name="type"
                render={({ field }) => (
                  <TransactionRadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionRadioButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionRadioButton>
                    <TransactionRadioButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionRadioButton>
                  </TransactionRadioGroup>
                )}
              />

              <ButtonComponent type="submit" disabled={isSubmitting}>
                Cadastrar
              </ButtonComponent>
            </form>
          </ModalContent>
        </StyledOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
