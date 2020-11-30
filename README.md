# Blockchain Ethereum

- [Blockchain Ethereum](#blockchain-ethereum)
  - [Mini Project](#mini-project)
    - [Web3 JS](#web3-js)
    - [Solidity](#solidity)
    - [Ganache](#ganache)
  - [Project Structure](#project-structure)
    - [App Component](#app-component)
    - [PollService](#pollservice)
    - [Web3 Service](#web3-service)
  - [Development](#development)
  - [Remix](#remix)
  - [Solidity](#solidity-1)
  - [1. Metamask](#1-metamask)
  - [2. Ganache](#2-ganache)
  - [3. Deploying solidity code in metamask](#3-deploying-solidity-code-in-metamask)

## Mini Project

### Web3 JS

- Middleware
- Used to communicate with ethereum node

### Solidity

- Ethereum logic

### Ganache

- Local Blockchain

## Project Structure

### App Component

1. Poll Component
   - Represents all polls

2. Create Poll Component
   - Create Poll (Form)

3. PollVote Component
   - Display Votes

### PollService

- Proxy Service to Communicate with Web3 Service
- Bussiness logic for creating votes

### Web3 Service

- Actual Communication with Blockcahin

## Development

- `package.json` contains `--poll` to enable live reload in shared volums
- External libraries
  - `apexcharts`
  - `unsplash`

## Remix

- [Ethereum IDE](https://remix.ethereum.org/)
- Requires no setup
- Used to work with solidity files
- Plugins to be activated
  - `Solidity Compiler`
  - `Solidity Static Analysis`
  - `Deploy & Run Transactions`

## Solidity

- Code once deployed cannot be muted (Changed)
- Starts with `pragma solidity <version>` eg. `pragma solidity ^0.6.6`
  - ^ Implies current or later
- Wrapper `contract WrapperName {}` is used to define functions, object
- Click on Solidity Compiler to Compile
- Deployment 
  1. Click on `Deploy and run Transaction` in left sidebar
  2. `Deploy`

## 1. Metamask

- Download from the link <https://metamask.io>
- Exists as an extension for chrome
- Cryptoallet and **Gateway to Blockcchain Apps**
- Steps
  1. Download and install chrome extesion
  2. Click and get started
  3. Agree to terms and condiftion
  4. Save the passphrase somehere safe
  5. Enter the passphrase in next screen
  6. Use `localhost` from top right for testing

## 2. Ganache

- Download from the link `trufflesuite.com/ganache`
- Install and Launch
- Creates a Local Ethereum Block chain for us for testing
- Steps
  1. Launch
  2. Quickstart (Will launch a server at localhost:8545)
  3. Go to Meta Mask and sleect localhost in top right dropdown (If there is error, switch to other network and comeback to localhost)
  4. Go  yo ganache click on key icon on any item in list, copy the private key
  5. Go to meta mask in top right, pofile section -> Add account
  6. Enter private key (Connects to one of the local ethereum account)

## 3. Deploying solidity code in metamask

1. Go to your code in remmix.ethereum.org
2. Click on Deploy in left side bar
3. Select Web3Provider from the Dropdown Environment
4. Enter localhost ur i.e `127.0.0.1:8545`
5. Deploy
