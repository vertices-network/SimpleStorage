# SimpleStorage
Stateful Smart Contract Application that stores global and local states.

![Simple Storage Diagram](https://github.com/vertices-network/SimpleStorage/blob/main/Simple_Storage.png)

# Overview

### WHAT WILL WE BE BUILDING

In this workshop, we are going to build a **STATEFUL SMART CONTRACT**.

* The Application will store basic information of an IoT device during a polling session.
* The IoT device will be sending temperature measurements during the session.
* The Application will capture this information, do some business logic to it, then store <br> the results as **GLOBAL STATES**.
* The last value sent by the device will be stored as **LOCAL STATE**.

#### GLOBAL/LOCAL STATES

|States | Key | Type |Info|
| ------------- |-------------| -----|-----|
|Global | SumOfValues | uint64 |Total sum of the values|
|Global | NumberOfValue |uint64 | Total number of values|
|Local | LastValue | uint64 |Last value submitted|

![Simple Storage Device](https://github.com/vertices-network/SimpleStorage/blob/main/Simple_Storage_IoT_Device.png)

# Project structure

```
├── SimpleStorage_Dapp.                     # Dapp project folder
│   ├── index.js                            # Main file of the Dapp
│   └── package.json                        # Configuration file of the node project
└── SimpleStorage_algoDEA                   # algoDEA project folder
    ├── SimpleStorage.iml                   # Configuration file of the IDE
    ├── algo-package.json                   # Configuration file of the Algorand project of the App
    ├── build                               # 
    │   ├── dryrun                          #
    │   │   ├── NewDryRun.dr.json           # Debug file of the TEAL code
    │   │   └── applications.json           # Debug file of the application
    │   └── toks                            #
    │       └── approval_progam.teal.tok    #
    ├── src                                 #
    │   ├── approval_progam.teal            # Approval Program of the App
    │   └── clear_state_program.teal        # Clear State Program of the App
    └── test                                #
```

# Installation

## SimpleStorage_algoDEA

There are multiple ways to compile and deploy TEAL smart contract. <br> However, we highly recommend using [IntelliJ IDEA](https://www.jetbrains.com/idea/) with the [algoDEA](https://algodea-docs.bloxbean.com/) plugin for ease of use. 

Once your environment is ready, follow these steps:
1. Import the [SimpleStorage_Dapp](https://github.com/vertices-network/SimpleStorage/tree/main/SimpleStorage_Dapp) project in IntelliJ IDEA
2. Create a new account
3. Fund your account
4. Create the App
5. OptIn {Args}
6. Call (NoOp) {Args}

## SimpleStorage_Dapp

1. Install the dependencies.
```
cd SimpleStorage_Dapp
npm i
```
2. Run the project.
```
node index.js
```
3. You should have an output similar to this:
```
(base) MBP-de-Ted:SimpleStorage_Dapp tednivan$ node index.js 
Signed transaction with txID: DB3PC3AV5VWPNYRDMD523HE56KN53YIM6PKXT624JH2SHV5LXW5A
Transaction DB3PC3AV5VWPNYRDMD523HE56KN53YIM6PKXT624JH2SHV5LXW5A confirmed in round 14099795
Called app-id: 15834975
Global State updated: [
  { key: 'TnVtYmVyT2ZWYWx1ZXM=', value: { action: 2, uint: 7 } },
  { key: 'U3VtT2ZWYWx1ZXM=', value: { action: 2, uint: 175 } }
]
NumberOfValues : 7
SumOfValues : 175
MeanValue (offchain) : 25
Local State updated: [
  {
    address: 'T7F6HG6SAXJZZ4SQ22ECBBMNDECJ4BYVDEWFDBXF57TNEO3DZQ6Y6MQ7QU',
    delta: [ [Object] ]
  }
]
```

