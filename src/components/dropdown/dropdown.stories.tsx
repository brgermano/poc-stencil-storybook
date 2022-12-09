export default {
  title: 'Select/RiDropdown',
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    values: {
      options: ["Argo", "Celta"],
      control: {
        type: 'array',
      },
      selected: "Argo"
    },
    onChangeEmitter: { action: 'changeEmitter' },
  },
}

const Template = (args: any) => `
    <ri-dropdown
      name="${args.name}"
      label="${args.label}"
      values="${args.values}"
      onChangeEmitter="${args.onChangeEmitter}"
    ></ri-dropdown>
    `

/*
const Template = (args: any) => {
  const valueSelected = (value: CustomEvent) => {
    console.log(value.detail)
  }

  return (
    <ri-dropdown
      name={args.name}
      label={args.label}
      values={['Argo', 'Celta', 'Cruze', '118i']}
      onChangeEmitter={valueSelected}
    >
    </ri-dropdown>
  )
};
*/

export const Dropdown = Template.bind({});

const valueSelected = (value: CustomEvent) => {
  console.log(value.detail)
}

Dropdown.args = {
  name: 'dropdown-carros',
  label: 'Selecione um item',
  values: ["Argo", "Celta"],
  onChangeEmitter: valueSelected,
};