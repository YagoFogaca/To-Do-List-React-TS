import { InputParameter } from '../../utils/types/input-parameter';
import { InputClass } from './style-input';

export function Input({
  typeP,
  nameP,
  idP,
  placeholderP,
  requiredP,
  validation,
}: InputParameter) {
  return (
    <>
      <InputClass
        onChange={validation}
        type={typeP}
        name={nameP}
        id={idP}
        placeholder={placeholderP}
        required={requiredP}
      />
    </>
  );
}
