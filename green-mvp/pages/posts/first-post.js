import * as solanaWeb3 from "@solana/web3.js";
import Link from 'next/link'


export default function FirstPost() {

  const LAMPORTS_PER_SOL = solanaWeb3.LAMPORTS_PER_SOL;

  function createConnection() {
    return new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"));
  }

  function publicKeyFromString(publicKeyString) {
    return new solanaWeb3.PublicKey(publicKeyString);
  }

  async function getBalanceWallet1() {
    const connection = createConnection();
    const _publicKey = publicKeyFromString("8F8meWbBAvzCPfzWkTK8k88hr6AcvMRmT7qRDo9DeDDw");
  
    const lamports = await connection.getBalance(_publicKey).catch((err) => {
      console.error(`Error: ${err}`);
    });

    const sol = lamports / LAMPORTS_PER_SOL;
    console.log("---------------------")
    console.log(sol)
    console.log(typeof(sol))
    return sol;
  }

  async function getBalanceWallet2() {
    const connection = createConnection();
    const _publicKey = publicKeyFromString("26pbL2YeHs5yp4Y3yRB2SeJo1F91AtH6e2HYqwfUF2Cg");
  
    const lamports = await connection.getBalance(_publicKey).catch((err) => {
      console.error(`Error: ${err}`);
    });

    const sol = lamports / LAMPORTS_PER_SOL;
    console.log("---------------------")
    console.log(sol)
    return sol;

  }

  async function fundWallet1() {
    const connection = createConnection()

    const _publicKey = publicKeyFromString("8F8meWbBAvzCPfzWkTK8k88hr6AcvMRmT7qRDo9DeDDw")

    let airdropSignature = await connection.requestAirdrop(
      _publicKey,
      LAMPORTS_PER_SOL,
    );
  
    await connection.confirmTransaction(airdropSignature);

    console.log(airdropSignature)
    console.log("^^^^^^^^^")
  }

  async function transferFundsToWallet2() {
    let payer = solanaWeb3.Keypair.generate()
    let connection = createConnection()

    let airdropSignature = await connection.requestAirdrop(
      payer.publicKey,
      LAMPORTS_PER_SOL,
    );
  
    await connection.confirmTransaction(airdropSignature);

    console.log(airdropSignature)
    console.log("^^^^^^^^^")

    let transaction = new solanaWeb3.Transaction()
    transaction.add(solanaWeb3.SystemProgram.transfer({
      fromPubkey: publicKeyFromString(payer.publicKey), 
      toPubkey: publicKeyFromString("26pbL2YeHs5yp4Y3yRB2SeJo1F91AtH6e2HYqwfUF2Cg"),
      lamports: 1000000
    }))

    await solanaWeb3.sendAndConfirmTransaction(connection, transaction, [payer])
  }

  function makeAccount() {

    let account = solanaWeb3.Keypair.generate();

    console.log(account.publicKey.toBase58());
    console.log(account.secretKey);
  }

  return (
    <>
      <h1>Non-custodial wallet test</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <button onClick={makeAccount}>Make Account</button>
      <button onClick={getBalanceWallet1}>Get Balance Wallet 1</button>
      <button onClick={getBalanceWallet2}>Get Balance Wallet 2</button>
      <button onClick={fundWallet1}>Fund Wallet 1</button>
      <button onClick={transferFundsToWallet2}>Transfer Funds to Wallet 2</button>
      <br/>
      <br/>
    </>
  )
  }