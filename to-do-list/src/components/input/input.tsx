import { InputParameter } from '../../utils/types/input-parameter';

export function Input({
  typeP,
  nameP,
  idP,
  placeholderP,
  requiredP,
}: InputParameter) {
  return (
    <input
      type={typeP}
      name={nameP}
      id={idP}
      placeholder={placeholderP}
      required={requiredP}
    />
  );
}
