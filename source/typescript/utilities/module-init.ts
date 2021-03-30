// TODO support multiple ways of importing
async function moduleInit(moduleName: string, callBack: any): Promise<void> {
  const element = document.querySelector(moduleName);

  if (element) {
    callBack(element);
  }
}

export default moduleInit;
