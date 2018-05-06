export default function (store) {
    return class GeneratorComponent extends window.HTMLElement {
        constructor() {
            super();
            this.store = store;
            this.innerHTML = this.render();

            this.onStateChange = this.handleStateChange.bind(this);

            this.store.subscribe(this.onStateChange);

            this.querySelector(".resource-button").addEventListener('click', () => {
                this.store.dispatch({
                    type: 'BUY_',
                    payload: {
                        quantity: 1,
                        name: this.dataset.name
                    }
                });
            });

        }


        handleStateChange(newState) {
            var gens = newState.generators;

            gens.forEach(element => {
               if(element.name === this.dataset.name){
            }
        });

        }

        render(){
            return `
                            ${this.dataset.name}
                    
                    `
        }
        
    };
}
