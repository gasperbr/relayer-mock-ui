import { Component } from '@angular/core';
import { ethers } from "ethers";

declare global { interface Window { ethereum: any; } }
window.ethereum = window.ethereum || {};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  provider: ethers.providers.Web3Provider;
  signer: ethers.Signer;

  data: {
    strategy: string;
    owner: string;
    nonce: number;
    deadline: number;
    functionSelector: string;
    feeToken: string;
    feeAmount: string;
    inputToken: string;
    inputAmount: string;
    outputToken: string;
    minOutputAmount: string;
  } = {
      strategy: "0x8dA47DD12384f3A0c711E0cCb8Ac60D50d0e8cC8",
      owner: "",
      nonce: 0,
      deadline: Math.floor(new Date().getTime() / 1000) + 31556926,
      functionSelector: "",
      feeToken: "",
      feeAmount: "",
      inputToken: "",
      inputAmount: "",
      outputToken: "",
      minOutputAmount: ""
    };

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    this.signer = this.provider.getSigner();
    console.log(this.signer.getAddress());
  }

}
