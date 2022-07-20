import * as S from './styles';
import Logo from '../../assets/logo.png'


export default function FormWrapper({ children }: any) {
  return (
    <S.Wrapper data-testid="form-wrapper-id">
      <S.Logo>
        <img src={Logo} alt="" />
      </S.Logo>
      <S.Form>{children}</S.Form>
    </S.Wrapper>
  );
}
