export default {
  title: 'Components/RiButton',
}

const Template = (args) => `<ri-button label="${args.label}" size="${args.size}" type="${args.type}"></ri-button>`;

export const Example = Template.bind({});

Example.args = {
  label: 'Texto',
  size: 'small',
  type: 'primary'
};

