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
    autocomplete: { control: 'boolean' },
    inputEmitter: { action: 'inputEmitter' },
  },
}

const Template = (args) => `
  <ri-input
    id=${args.name}
    name=${args.name}
    type=${args.type}
    label=${args.label}
    minlength=${args.minlength}
    maxlength=${args.maxlength}
    placeholder=${args.placeholder}
    autocomplete=${args.autocomplete}
    onInput=${args.inputEmitter}
  >
  </ri-input>
`;

export const Input = Template.bind({});

Input.args = {
  label: 'Usuário',
  type: 'text',
  maxlength: 15,
  minlength: 0,
  placeholder: 'Nome',
  autocomplete: true,
  name: 'Name do componente',
  onInput: (event) => console.log(event)
};

