import * as S from './styles';
import Logo from '../Logo/index';

export default function FormWrapper({ children }: any) {
  return (
    <S.Wrapper data-testid="form-wrapper-id">
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Form>{children}</S.Form>
    </S.Wrapper>
  );
}
