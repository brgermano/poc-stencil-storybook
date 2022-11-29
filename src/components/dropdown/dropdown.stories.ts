export default {
  title: 'Select/RiDropdown',
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    values: {
      control: 'select',
      options: ['Argo', 'Celta', 'Cruze', '118i'],
      // options: [
      //   {
      //     id: 0,
      //     name: 'Argo',
      //     company: 'Fiat'
      //   },
      //   {
      //     id: 0,
      //     name: 'Celta',
      //     model: 2008,
      //   },
      //   {
      //     id: 0,
      //     name: 'Cruze',
      //     model: 2014,
      //     company: 'GM'
      //   },
      //   {
      //     id: 0,
      //     name: '118i',
      //     model: 2016,
      //     company: 'BMW'
      //   }
      // ],
    },
    changeEmitter: { action: 'changeEmitter' },
  },
}

const Template = (args) => `
  <ri-dropdown
    name=${args.name}
    label=${args.label}
    onChange=${args.changeEmitter}
  >
  </ri-dropdown>
`;

export const Dropdown = Template.bind({});

Dropdown.args = {
  name: 'dropdown-componet',
  label: 'Selecione um item',
  onChange: (event) => console.log(event)
};

