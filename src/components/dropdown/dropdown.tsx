import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
	tag: 'ri-dropdown',
  styleUrl: 'dropdown.css',
	shadow: true,
})

export class RiDropdown {
  @Prop() name: string
	@Prop() label: string
	@Prop() values: string
  @Event() changeEmitter: EventEmitter

  emitChange = (e: Event) => {
    const select = e.target as HTMLSelectElement
    const { selectedIndex, options } = select 
    const optionSelected = options[selectedIndex]
    this.changeEmitter.emit(optionSelected.value)
  }

  renderOptions = () => {
    const valueString = this.values;

    const valueArray = valueString.split(', ')
    
    return valueArray.map(item => 
     <option key={item} value={item}>
       {item}
     </option>)
  }

	render() {
		return (
      <div class="dropdown">
        {this.label
          ? <label htmlFor={this.name}>{this.label}</label>
          : ''
        }
        <select
          id={this.name}
          name={this.name}
          onChange={this.emitChange}
        >
          {this.renderOptions()}
        </select>
      </div>
		);
	}
}