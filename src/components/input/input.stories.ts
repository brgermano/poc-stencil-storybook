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

export const Input = Template.bind({});

Input.args = {
  label: 'Nome completo',
  placeholder: 'Digite aqui seu nome',
  type: 'text',
  minlength: 0,
  maxlength: 15,
  name: 'nome-usuario',
  inputEmitter: (event) => console.log(event)
};

