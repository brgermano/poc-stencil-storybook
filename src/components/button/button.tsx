import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
	tag: 'ri-button',
	styleUrl: 'button.css',
	shadow: false,
})

export class RiButton {
	@Prop() label!: string
	@Prop() size: string = 'medium'
	@Prop() type: string = 'primary'
	@Prop() disabled: boolean = false
	@Event() clickEmitter: EventEmitter
	
	emitClick = (event: Event) => {
		const button = event.target as HTMLButtonElement
		this.clickEmitter.emit(button.innerText)
	}

	render() {
		return (
			<button
				class={`button ${this.size} ${this.type} ${this.disabled ? 'disabled' : ''}`}
				onClick={this.emitClick}	
			>
				{this.label}
			</button>
		);
	}
}