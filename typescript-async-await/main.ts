function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

async function performWait(): Promise<void>{
  try{
    let msg = await waitTwoSeconds();
    console.log(msg);
  } catch (error){
    console.log(`Error: ${error}`);
  }
}

performWait();
