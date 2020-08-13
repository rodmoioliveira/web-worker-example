const fibNum = 43;
const result = () => document.getElementById('result');
const clicks = () => document.getElementById('click');

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const inc = () => {
  const el = clicks();
  el.innerText = parseInt(el.innerHTML, 10) + 1;
};

const clickEv = () => {
  document.addEventListener('click', inc);
};

const noWebWorker = () => {
  const r = result();
  r.textContent = fibonacci(fibNum);
};

const webWorker = () => {
  if (!window.Worker) {
    const r = result();
    r.innerText = "Your browser doesn't support web workers.";
    return;
  }

  const myWorker = new Worker('worker.js');
  myWorker.postMessage(fibNum);
  myWorker.onmessage = (e) => {
    const r = result();
    r.innerText = e.data;
  };
};
