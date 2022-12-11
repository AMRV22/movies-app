const debounce = (fn: (...args: any) => void, wait: number) => {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
};

export default debounce;
