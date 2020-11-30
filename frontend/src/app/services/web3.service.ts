/**
 * @author Gagandeep Singh
 * @email singh.gagandeep3911@gmail.com
 * @create date 2020-11-30 07:32:40
 * @modify date 2020-11-30 07:32:40
 * @desc Communicates ith web3
 */
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
const contractAbi = require('../../assets/ContractABI.json');

declare var window: any;

@Injectable({
  providedIn: 'root',
})
export class Web3Service {
  private web3: Web3;
  private contract: Contract;
  // Go to metamask -> Account -> Copy the address
  private contractAddress = environment.contractAddress;

  constructor() {
    if (window.web3) {
      this.web3 = new Web3(window.ethereum);
      // contractAbi can be fetched from remix
      // Go to compiler -> ABI (At bottom) -> Copy to cliboard -> Paste it in assets folder
      // Must be updated everytime we change solicity code
      this.contract = new this.web3.eth.Contract(contractAbi, this.contractAddress);

      window.ethereum.enable().catch((error) => console.log(error));
    } else {
      console.warn('Metamask not found, Install or enable meta mask');
    }
  }

  getAccount(): Promise<string> {
    return this.web3.eth.getAccounts().then((acc) => acc[0] || '');
  }

  async executeTransaction(functionName, ...args: any[]): Promise<void> {
    const acc = await this.getAccount();
    return this.contract.methods[functionName](...args).send({ from: acc });
  }

}
