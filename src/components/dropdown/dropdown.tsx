import { Component, h, Prop, Host, Event, EventEmitter } from '@stencil/core';

@Component({
	tag: 'ri-dropdown',
	styleUrl: 'dropdown.css',
	shadow: true,
})

export class RiDropdown {
  @Prop() name: string
	@Prop() label: string
	@Prop() values
  @Event() changeEmitter: EventEmitter

  emitChange = (e: Event) => {
    const select = e.target as HTMLSelectElement
    const { selectedIndex, options } = select 
    const optionSelected = options[selectedIndex]
    this.changeEmitter.emit(optionSelected.value)
  }

	render() {
		return (
      <Host>
        {this.label
          ? <label htmlFor={this.name}>{this.label}</label>
          : ''
        }
        <select
          id={this.name}
          name={this.name}
          onChange={this.emitChange}
        >
          {this.values.map(item => 
            <option value={item.name || item}>
              {item.name || item}
            </option>
          )}
        </select>
      </Host>
		);
	}
}