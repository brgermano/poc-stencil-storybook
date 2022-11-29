export default {
  title: 'Input/RiInput',
  argTypes: {
    name: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password']
    },
    label: { control: 'text' },
    minlength: { control: 'number' },
    maxlength: { control: 'number' },
    placeholder: { control: 'text' },
    inputEmitter: { action: 'inputEmitter' },
  },
}

const Template = (args) => `
  <ri-input
    name="${args.name}"
    type="${args.type}"
    label="${args.label}"
    minlength="${args.minlength}"
    maxlength="${args.maxlength}"
    placeholder="${args.placeholder}"
    inputEmitter="${args.inputEmitter}"
  >
  </ri-input>
`;

export const Text = Template.bind({});

Text.args = {
  label: 'Nome completo',
  placeholder: 'Digite aqui seu nome',
  type: 'text',
  minlength: 0,
  maxlength: 15,
  name: 'nome-usuario',
  inputEmitter: (event) => console.log(event)
};

export const Number = Template.bind({});

Number.args = {
  label: 'Idade',
  placeholder: 'Digite aqui sua idade',
  type: 'number',
  minlength: 0,
  maxlength: 2,
  name: 'idade-usuario',
  inputEmitter: (event) => console.log(event)
};

export const Password = Template.bind({});

Password.args = {
  label: 'Senha',
  placeholder: 'Digite aqui sua senha',
  type: 'password',
  minlength: 0,
  maxlength: 10,
  name: 'senha-usuario',
  inputEmitter: (event) => console.log(event)
};
