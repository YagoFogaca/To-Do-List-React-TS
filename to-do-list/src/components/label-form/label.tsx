import { LabelParameter } from '../../utils/types/label-parameter';
import { LabelStyle } from './style-label';

export function Label({ text, htmlFor }: LabelParameter) {
  return (
    <>
      <LabelStyle htmlFor={htmlFor}>{text}</LabelStyle>
    </>
  );
}
