export default {
  title: 'Select/RiDropdown',
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    data: {
      control: {
        type: 'array',
        options: ["Argo", "Celta"],
      },
    },
    onChangeEmitter: { action: 'changeEmitter' },
  },
}

function insertValues(data: Array<String>) {
  setTimeout(() => {
    const dropdownComponent = document.getElementById('drop-id') as any;
    dropdownComponent.data = data;
  }, 500)
}

const Template = (args: any) => {
  insertValues(args.data)

  return (`
    <ri-dropdown
      id="drop-id"
      name="${args.name}"
      label="${args.label}"
      onChangeEmitter="${args.onChangeEmitter}"
    >
    </ri-dropdown>
  `)
}

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
  onChangeEmitter: valueSelected,
  data: ['Item 1', 'Item 2']
};