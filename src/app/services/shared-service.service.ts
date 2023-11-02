import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  isFlag: boolean = false;

  setFlag(value: boolean) {
    this.isFlag = value;
  }

  getFlag(): boolean {
    return this.isFlag;
  }
  destroy() {
    this.isFlag = true;
  }
}
