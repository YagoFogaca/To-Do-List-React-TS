import { ButtonSubmit } from './style-btn-submit';
import { BtnOnClickParameter } from '../../utils/types/btn-onClick-parameter';

export function BtnOnClick({
  type,
  text,
  backgroundP,
  onClick,
}: BtnOnClickParameter) {
  return (
    <ButtonSubmit
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: backgroundP,
      }}
    >
      {text}
    </ButtonSubmit>
  );
}
