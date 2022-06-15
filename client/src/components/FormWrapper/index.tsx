import * as S from './styles';
import Logo from '../../components/logo/index';

export default function FormWrapper({ children }: any) {
  return (
    <S.Wrapper>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.Form>{children}</S.Form>
    </S.Wrapper>
  );
}
