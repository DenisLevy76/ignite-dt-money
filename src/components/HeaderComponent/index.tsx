import { ContainerComponent } from '../ContainerComponent';
import { ButtonComponent, HeaderContainer } from './styles';

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <ContainerComponent>
        <img src="/icons/extendedLogo.svg" />
        <ButtonComponent>Nova transação</ButtonComponent>
      </ContainerComponent>
    </HeaderContainer>
  );
};
