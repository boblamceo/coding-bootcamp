export default (start: number, end: number) => Array.from({ length: end - start }, (v, k) => k + start);
