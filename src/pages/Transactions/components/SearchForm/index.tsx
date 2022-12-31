import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { InputComponent } from '../../../../components/inputComponent';
import { SearchButton, SearchFormContainer } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../../../contexts/TransactionsContext';

const searchFormSchema = zod.object({
  query: zod.string(),
});

type SearchFormType = zod.infer<typeof searchFormSchema>;

export const SearchForm: React.FC = () => {
  const { getTransactions } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchTransaction = async (data: SearchFormType) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    getTransactions(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <InputComponent
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />
      <SearchButton type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        buscar
      </SearchButton>
    </SearchFormContainer>
  );
};
