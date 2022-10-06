export type BtnOnClickParameter = {
  type: 'submit' | 'reset' | 'button';
  text: string;
  backgroundP: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
