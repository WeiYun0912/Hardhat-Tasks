task("write-message", "Writes the message")
  .addParam("contract", "The Test Contract")
  .addParam("value", "The value")
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract;
    const messageValue = taskArgs.value;
    const TestContract = await ethers.getContractFactory("Test");

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const testContract = await new ethers.Contract(
      contractAddr,
      TestContract.interface,
      signer
    );

    let result = await testContract.setMessage(messageValue);

    console.log(result);
  });

task("read-message", "Reads the message")
  .addParam("contract", "The Test Contract")
  .setAction(async (taskArgs) => {
    const contractAddr = taskArgs.contract;
    const TestContract = await ethers.getContractFactory("Test");

    const accounts = await ethers.getSigners();
    const signer = accounts[0];
    const testContract = await new ethers.Contract(
      contractAddr,
      TestContract.interface,
      signer
    );

    let result = await testContract.message().toString();

    console.log(result);
  });

module.exports = {};
