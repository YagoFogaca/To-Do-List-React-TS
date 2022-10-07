export const inputsData = [
  {
    label: 'Nome:',
    typeP: 'text',
    nameP: 'userName',
    idP: 'text',
    placeholderP: 'Seu Nome...',
    requiredP: true,
    validation: (event: React.FormEvent<HTMLFormElement>) => {
      if (event.currentTarget.value.length < 6) {
        console.log('Ta começando ');
      }
    },
  },
  {
    label: 'Email:',
    typeP: 'email',
    nameP: 'email',
    idP: 'email',
    placeholderP: 'Seu Email...',
    requiredP: true,
  },
  {
    label: 'Senha:',
    typeP: 'password',
    nameP: 'password',
    idP: 'password',
    placeholderP: 'shhhhh...',
    requiredP: true,
  },
];
