# SimpleStorage
Stateful Smart Contract Application that stores global and local states.

![Simple Storage Diagram](https://github.com/vertices-network/SimpleStorage/blob/main/Simple%20Storage%20App.png)

# Overview

### WHAT WILL WE BE BUILDING

In this workshop, we are going to build a **STATEFUL SMART CONTRACT**.

The Application will store basic information of an IoT device during a polling session.

The IoT device will be sending temperature measurements during the session.

The Application will capture this information, do some business logic to it, then store the results as **GLOBAL STATES**.

The last value sent by the device will be stored as **LOCAL STATE**.

#### GLOBAL/LOCAL STATES

|States | Key | Type |Info|
| ------------- |-------------| -----|-----|
|Global | SumOfValues | uint64 |Total sum of the values|
|Global | NumberOfValue |uint64 | Total number of values|
|Local | LastValue | uint64 |Last value submitted|


# Project structure

```
├── SimpleStorage_Dapp.                     #
│   ├── index.js                            #
│   ├── package-lock.json                   #
│   └── package.json                        #
└── SimpleStorage_algoDEA                   #
    ├── SimpleStorage.iml                   #
    ├── algo-package.json                   #
    ├── build                               #
    │   ├── dryrun                          #
    │   │   ├── NewDryRun.dr.json           #
    │   │   └── applications.json           #
    │   └── toks                            #
    │       └── approval_progam.teal.tok    #
    ├── src                                 #
    │   ├── approval_progam.teal            #
    │   ├── backup.teal                     #
    │   └── clear_state_program.teal        #
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


