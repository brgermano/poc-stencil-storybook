import { html } from 'lit-html';
//import { h } from '@stencil/core';

export default {
  title: 'Select/RiDropdown',
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
/*    values: {
      control: '',
      options: '["Argo", "Celta"]',
    },

  */
    onChangeEmitter: { action: 'changeEmitter' },
  },
}

const Template = (args: any) => {
  const valueSelected = (value: CustomEvent) => {
    console.log('Selecionado>', value.detail)
  }

  console.log('args.values', args.values)

  const insertValues = (values: any) => {
    console.log('values>>>', values)
    console.log('values type>>>', typeof values)

    setTimeout(() => {
      const selectElement = document.querySelector('ri-dropdown');
      
      selectElement.values = values;
    }, 1000)
  }

  return (
    html`
    <ri-dropdown
      name=${args.name}
      label=${args.label}
      onChangeEmitter=${valueSelected}
    ></ri-dropdown>
    ${insertValues(args.values)}
    `
  )
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

Dropdown.args = {
  name: 'dropdown-carros',
  label: 'Selecione um item',
  values: ["Argo", "Celta"],
//  onChangeEmitter: () => {},
};