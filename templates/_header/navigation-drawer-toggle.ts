import { message } from "djinnjs/broadcaster";

class NavigationDrawerToggle extends HTMLElement {
	private input: HTMLInputElement;
	private label: HTMLLabelElement;
	constructor() {
		super();
		this.input = this.querySelector("input#navigation-drawer-toggle");
		this.label = this.querySelector("label");
	}
	private handleChange: EventListener = (e: Event) => {
		message("navigation-drawer", {
			type: "toggle",
			open: true,
		});
	};
	private handleKeyboard: EventListener = (e: KeyboardEvent) => {
		const key = e.key.toLowerCase();
		if (key === " " || key === "enter") {
			message("navigation-drawer", {
				type: "toggle",
			});
		}
	};
	connectedCallback() {
		this.input.addEventListener("change", this.handleChange);
		this.label.addEventListener("keypress", this.handleKeyboard);
	}
}
customElements.define("navigation-drawer-toggle", NavigationDrawerToggle);
