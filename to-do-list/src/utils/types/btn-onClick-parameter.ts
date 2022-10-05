export type BtnOnClickParameter = {
  type: 'submit' | 'reset';
  text: string;
  backgroundP: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
