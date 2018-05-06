export default function (store) {
	return class ButtonComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
		}

		connectedCallback () {
			this.addEventListener('click', () => {
				this.store.dispatch({type: 'BUTTON'});
			});
		}

		disconnectedCallback () {
			this.store.unsubscribe(this.onStateChange);
		}
		// TODO: add click event to increment counter
			// hint: use "store.dispatch" method (see example component)

	};
}

