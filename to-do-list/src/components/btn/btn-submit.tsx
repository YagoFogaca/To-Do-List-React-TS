import { BtnSubmitParameter } from '../../utils/types/btn-submit-parameter';
import { ButtonSubmit } from './style-btn-submit';

export function BtnSbumit({ type, text, backgroundP }: BtnSubmitParameter) {
  return (
    <ButtonSubmit
      type={type}
      style={{
        backgroundColor: backgroundP,
      }}
    >
      {text}
    </ButtonSubmit>
  );
}
