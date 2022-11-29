export default {
  title: 'Components/RiInput',
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'password']
    },
    name: { control: 'text' },
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
    type=${args.type}
    name=${args.name}
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
  label: 'Descrição',
  name: 'input-componet',
  type: 'password',
  maxlength: 10,
  minlength: 0,
  autocomplete: true,
  placeholder: 'Escreva algo bonito aqui :)',
  onInput: (event) => console.log(event)
};

