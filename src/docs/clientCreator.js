let clientNum = 3;

const createClient = () => {
  clientNum ++
  return clientNum;
}

export default createClient;