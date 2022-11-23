import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';

@Component({
	tag: 'ri-input',
	styleUrl: 'input.css',
	shadow: true,
})

export class RiInput {
	@Prop() name: string
	@Prop() type: string = 'text'
	@Prop() label: string
	@Prop() minlength: string | number
	@Prop() maxlength: string | number
	@Prop() placeholder: string
	@Prop() autocomplete: string
	@Event() inputEmitter: EventEmitter

	emitInput = (e: Event) => {
		const field = e.target as HTMLInputElement
		this.inputEmitter.emit(field.value)
	}

	render() {
		return (
      <Host>
        { this.label
            ? <label htmlFor={this.name}>{this.label}</label>
            : ''
        }
        <input
          id={this.name}
          type={this.type}
          name={this.name}
          minlength={this.minlength}
          maxlength={this.maxlength}
          placeholder={this.placeholder}
          autocomplete={this.autocomplete}
          onInput={this.emitInput}
        ></input>
      </Host>
		);
	}
}