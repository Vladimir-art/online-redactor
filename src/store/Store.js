import { makeAutoObservable } from "mobx";

class Store {
  illustration = 'https://img.pngio.com/adobe-illustrator-tutorial-create-vinyl-wall-art-digital-arts-adobe-illustrator-tutorials-png-1040_538.png';
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis massa augue, nec tincidunt tortor molestie nec. Fusce vel neque venenatis, ullamcorper magna';
  color = 'FFC0CB';
  product = '/';

  constructor() {
    makeAutoObservable(this);
  }



}

export default new Store();
