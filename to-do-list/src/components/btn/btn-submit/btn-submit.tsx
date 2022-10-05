import { BtnSubmitParameter } from '../../../utils/types/btn-submit-parameter';
import { ButtonSubmit } from './style-btn-submit';

export function BtnSbumit({ type, text, className }: BtnSubmitParameter) {
  return (
    <ButtonSubmit type={type} className={className}>
      {text}
    </ButtonSubmit>
  );
}
