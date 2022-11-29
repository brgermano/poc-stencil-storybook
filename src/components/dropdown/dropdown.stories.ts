export default {
  title: 'Select/RiDropdown',
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    values: {
      control: 'select',
      options: ['Argo', 'Celta', 'Cruze', '118i'],
    },
    changeEmitter: { action: 'changeEmitter' },
  },
}

const Template = (args) => `
  <ri-dropdown
    name="${args.name}"
    label="${args.label}"
    values="${args.values}"
    changeEmitter="${args.changeEmitter}"
  >
  </ri-dropdown>
`;

export const Dropdown = Template.bind({});

Dropdown.args = {
  name: 'dropdown-carros',
  label: 'Selecione um item',
  values: 'Argo, Celta, Cruze, 118i',
  changeEmitter: () => {},
};