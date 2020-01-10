function convert() {
  let inputNum = document.formConvert.inputNumber.value;
  let arabicVal, romanVal;
  switch (convertType(inputNum)) {
    case 'RtoA':
      arabicVal = RtoA(inputNum);
      if (arabicVal != -1) {
        romanVal = AtoR(arabicVal);
      }
      else {
        alert(inputNum + ": invalid roman numeral.");
        arabicVal = ''; romanVal = ''; inputNum.value = '';
      }
      break;
    case 'AtoR':
      arabicVal = inputNum;
      romanVal = AtoR(arabicVal);
      break;
    default:
      arabicVal = ''; romanVal = ''; inputNum.value = '';
      return false;
  }
  document.formConvert.romanNumber.value = romanVal;
  document.formConvert.arabicNumber.value = arabicVal;
}

function AtoR(arabic) {
  if (arabic > 3999999 || arabic < 1) {
    return 'Expect number from 1 to 3,999,999';
  }
  let r_nums = getRnums();
  let a_nums = getAnums();
  let remainder = parseInt(arabic);
  let roman = '', count = 0;

  let len = r_nums.length;
  for (let i = 1; i < len; ++i) {
    while (remainder >= parseInt(a_nums[i])) {
      if ((count++) > 30) return -1;
      roman = roman + r_nums[i];
      remainder = remainder - a_nums[i];
    }
    if (remainder <= 0) break;
  }
  return roman;
}

function RtoA(roman) {
  let r_nums = getRnums();
  let a_nums = getAnums();
  let remainder = roman.replace(/i/g, "M");
  let arabic = 0, count = 0, test = remainder;

  let len = r_nums.length;
  for (let i = 1; i < len; ++i) {
    let numchrs = r_nums[i].length;
    while (remainder.substr(0, numchrs) === r_nums[i]) {
      if ((count++) > 30) return -1;
      arabic += a_nums[i];
      remainder = remainder.substr(numchrs, remainder.length - numchrs);
    }
    if (remainder.length <= 0) break;
  }
  if (remainder.length !== 0) {
    alert(roman + " INVALID truncating to " + test.replace(remainder, ''));
  }
  if ((0 < arabic) && (arabic < 4000000)) return arabic;
  else return -1;
}

function convertType(inputNum) {
  if (inputNum.match("^([IVXLCDMivxlcdm]+)$")) {
    if (inputNum.length <= 27) {
      return 'RtoA';
    } else {
      alert(inputNum + " cannot be converted");
      return -1;
    }
  } else if (inputNum.match("^([0-9]+)$")) {
    let inputInt = parseInt(inputNum);
    if ((inputNum > 0) && (inputNum < 4000000)) {
      return "AtoR";
    } else {
      alert(inputNum + " out of range - must be from 1 to 3,999,999");
      return -1;
    }
  } else {
    alert(inputNum + " cannot be converted");
    return -1;
  }
}

function getRnums() {
  let r_nums = Array();
  r_nums[1] = 'm';
  r_nums[2] = 'cm';
  r_nums[3] = 'd';
  r_nums[4] = 'cd';
  r_nums[5] = 'c';
  r_nums[6] = 'xc';
  r_nums[7] = 'l';
  r_nums[8] = 'xl';
  r_nums[9] = 'x';
  r_nums[10] = 'Mx';
  r_nums[11] = 'v';
  r_nums[12] = 'Mv';
  r_nums[13] = 'M';
  r_nums[14] = 'CM';
  r_nums[15] = 'D';
  r_nums[16] = 'CD';
  r_nums[17] = 'C';
  r_nums[18] = 'XC';
  r_nums[19] = 'L';
  r_nums[20] = 'XL';
  r_nums[21] = 'X';
  r_nums[22] = 'IX';
  r_nums[23] = 'V';
  r_nums[24] = 'IV';
  r_nums[25] = 'I';
  return r_nums;
}
function getAnums() {
  let a_nums = Array();
  a_nums[1] = 1000000;
  a_nums[2] = 900000;
  a_nums[3] = 500000;
  a_nums[4] = 400000;
  a_nums[5] = 100000;
  a_nums[6] = 90000;
  a_nums[7] = 50000;
  a_nums[8] = 40000;
  a_nums[9] = 10000;
  a_nums[10] = 9000;
  a_nums[11] = 5000;
  a_nums[12] = 4000;
  a_nums[13] = 1000;
  a_nums[14] = 900;
  a_nums[15] = 500;
  a_nums[16] = 400;
  a_nums[17] = 100;
  a_nums[18] = 90;
  a_nums[19] = 50;
  a_nums[20] = 40;
  a_nums[21] = 10;
  a_nums[22] = 9;
  a_nums[23] = 5;
  a_nums[24] = 4;
  a_nums[25] = 1;
  return a_nums;
}
