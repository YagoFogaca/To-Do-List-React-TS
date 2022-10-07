import { Message } from '../../utils/types/message-error-parameter';
import { H2 } from './style-message-error';
export function MessageError({ text }: Message) {
  return <H2>{text}</H2>;
}
