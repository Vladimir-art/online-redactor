import { makeAutoObservable } from "mobx";

class Store {
  illustration = null;
  text = null;
  color = null;
  product = null;

  constructor() {
    makeAutoObservable(this);
  }



}

export default new Store();
