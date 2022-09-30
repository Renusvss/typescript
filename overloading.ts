function caluArea(width: number, height: number): number;
function caluArea(length: number): number;
function caluArea(...args: number[]): number {
  if (args.length === 2) {
    return args[0] * args[1];
  }
  return Math.pow(args[0], 2);
}
console.log(caluArea(3));
console.log(caluArea(4, 5));
