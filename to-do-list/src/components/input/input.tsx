import { InputParameter } from '../../utils/types/input-parameter';
import { InputClass } from './style-input';

export function Input({
  typeP,
  nameP,
  idP,
  placeholderP,
  requiredP,
}: InputParameter) {
  return (
    <>
      <InputClass
        type={typeP}
        name={nameP}
        id={idP}
        placeholder={placeholderP}
        required={requiredP}
      />
    </>
  );
}
