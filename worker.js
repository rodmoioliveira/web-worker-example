importScripts('./utils.js');

onmessage = ({ data: value }) => {
  const workerResult = `Result is ${fibonacci(value)}`;
  postMessage(workerResult);
};
