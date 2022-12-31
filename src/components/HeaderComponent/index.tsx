import { ContainerComponent } from '../ContainerComponent'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer } from './styles'

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderContainer>
      <ContainerComponent>
        <img src="/icons/extendedLogo.svg" />
        <NewTransactionModal />
      </ContainerComponent>
    </HeaderContainer>
  )
}
