function calculateSales(input) {
  const PRICE_HOST = 25;
  const PRICE_MONITOR = 30;
  const PRICE_PERIPHERAL = 45;

  const MAX_HOST = 70;
  const MAX_MONITOR = 80;
  const MAX_PERIPHERAL = 90;

  const host = input["hostQty"];
  const monitor = input["monitorQty"];
  const peripheral = input["peripheralQty"];

  if (
    host < 0 || host > MAX_HOST ||
    monitor < 0 || monitor > MAX_MONITOR ||
    peripheral < 0 || peripheral > MAX_PERIPHERAL
  ) {
    return [-1, -1];
  }

  if (Math.min(host, monitor, peripheral) < 1) {
    return [-1, -1];
  }

  const total = host * PRICE_HOST + monitor * PRICE_MONITOR + peripheral * PRICE_PERIPHERAL;

  let commission = 0;
  if (total <= 1000) {
    commission = total * 0.10;
  } else if (total <= 1800) {
    commission = total * 0.15;
  } else {
    commission = total * 0.20;
  }

  return [total, commission];
}
export { calculateSales}; 
