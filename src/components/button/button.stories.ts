export default {
  title: 'Buttons/RiButton',
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'custom'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    disabled: { 
      defaultValue: false,
      control: 'boolean' 
    },
  }
}

const Template = (args) => 
  `<ri-button label="${args.label}" size="${args.size}" type="${args.type}" disabled="${args.disabled}"></ri-button>`;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Eu sou um botão',
  type: 'primary'
  //clickEmitter: `${() => console.log('Cliquei')}`
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Eu sou um botão',
  type: 'secondary'
  //clickEmitter: `${() => console.log('Cliquei')}`
};


export const Custom = Template.bind({});

Custom.args = {
  label: 'Eu sou um botão',
  type: 'custom'
  //clickEmitter: `${() => console.log('Cliquei')}`
};