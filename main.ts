export function decimalToRoman(num: number): string {
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

export function romanToDecimal(string: string): number {
  var str = string.toUpperCase(),
    validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
    token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
    key = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    num = 0, m;
  while ((m = token.exec(str))) num += key[m[0]];
  return num;
}

export function addRoman(str1: string, str2: string) {
  const num1 = romanToDecimal(str1);
  const num2 = romanToDecimal(str2);

  return decimalToRoman(num1 + num2);
}
