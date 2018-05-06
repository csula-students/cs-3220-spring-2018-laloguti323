import constants from '../constants';

export default class Generator {
	
	constructor (meta) {
		this.type = meta.type;
		this.name = meta.name;
		this.description = meta.description;
		this.rate = meta.rate;
		this.quantity = meta.quantity;
		this.baseCost = meta.baseCost;
		this.unlockValue = meta.unlockValue;
	}


	 getCost () {
        if(this.quantity == 0){
            return this.baseCost;
              
              }
		


return parseFloat((this.baseCost * Math.pow(1 + constants.growthRatio, this.quantity)).toFixed(2));





	          }

	

	generate () {

		return this.rate * this.quantity;
	}
}
