const algosdk = require('algosdk');

// user declared account mnemonics
userMnemonic = "cluster club region copper expire random trouble search you effort desert bamboo account feature banana vacant icon coach zebra link wing boy portion absent true";

// declare application state storage (immutable)
localInts = 1;
localBytes = 0;
globalInts = 2;
globalBytes = 0;

// helper function to await transaction confirmation
// Function used to wait for a tx confirmation
const waitForConfirmation = async function (algodclient, txId) {
    let status = (await algodclient.status().do());
    let lastRound = status["last-round"];
    while (true) {
        const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
        if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
            //Got the completed Transaction
            console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
            break;
        }
        lastRound++;
        await algodclient.statusAfterBlock(lastRound).do();
    }
};

// optIn
async function optInApp(client, account, index, appArgs) {
    // define sender
    sender = account.addr;

    // get node suggested parameters
    let params = await client.getTransactionParams().do();
    // comment out the next two lines to use suggested fee
    params.fee = 1000;
    params.flatFee = true;

    // create unsigned transaction
    let txn = algosdk.makeApplicationOptInTxn(sender, params, index, appArgs);
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(account.sk);
    console.log("Signed transaction with txID: %s", txId);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for confirmation
    await waitForConfirmation(client, txId);

    // display results
    let transactionResponse = await client.pendingTransactionInformation(txId).do();
    console.log("Opted-in to app-id:", transactionResponse['txn']['txn']['apid'])
}

// call application 
async function callApp(client, account, index, appArgs) {
    // define sender
    sender = account.addr;

    // get node suggested parameters
    let params = await client.getTransactionParams().do();
    // comment out the next two lines to use suggested fee
    params.fee = 1000;
    params.flatFee = true;

    // create unsigned transaction
    let txn = algosdk.makeApplicationNoOpTxn(sender, params, index, appArgs)
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(account.sk);
    console.log("Signed transaction with txID: %s", txId);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for confirmation
    await waitForConfirmation(client, txId);

    // display results
    let transactionResponse = await client.pendingTransactionInformation(txId).do();
    console.log("Called app-id:", transactionResponse['txn']['txn']['apid'])
    if (transactionResponse['global-state-delta'] !== undefined) {
        let globalStates = [];
        console.log("Global State updated:", transactionResponse['global-state-delta']);
        transactionResponse['global-state-delta'].forEach(e => {
            console.log(`${Buffer.from(e.key, 'base64')} : ${e.value.uint}`);
            globalStates.push(e.value.uint);
        })
        console.log(`MeanValue (offchain) : ${globalStates[1]/globalStates[0]}`);
    }
    if (transactionResponse['local-state-delta'] !== undefined) {
        console.log("Local State updated:", transactionResponse['local-state-delta']);
    }
}

async function main() {
    try {
        // initialize an algodClient
        let algodClient = new algosdk.Algodv2({}, "https://api.testnet.algoexplorer.io", '');

        // get accounts from mnemonic
        let userAccount = algosdk.mnemonicToSecretKey(userMnemonic);

        // New application
        let appId = 15834975;

        // opt-in to application
        let appArgs = [];
        appArgs.push(new Uint8Array([25]));
        //await optInApp(algodClient, userAccount, appId, appArgs);
        // call application with arguments
        await callApp(algodClient, userAccount, appId, appArgs);
    }
    catch (err) {
        console.log("err", err);
    }
}

main();