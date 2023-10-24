import {CalcSimpleType} from "@/components/calculator/types";

function formatTotal(total: Number | String): string {
  const roundedTotal = Math.round(Number(total) * 100) / 100;
  const [intPart, decimalPart] = roundedTotal.toString().split('.');
  const formattedIntPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return decimalPart ? `${formattedIntPart}.${decimalPart}` : formattedIntPart;
}

function printResult(total: Number | String): string {
  if (total === "") {
    return "";
  }
  const formattedTotal = formatTotal(total);
  if (Number(formattedTotal.replace(/\s/g, '')) < 10000) {
    return formattedTotal.split('.')[0];
  }
  return formattedTotal;
}

function printResultBlock(total: Number | String): string {
  if (total === "") {
    return "0";
  }
  const formattedTotal = formatTotal(total);
  if (Number(formattedTotal.replace(/\s/g, '')) < 10000) {
    return formattedTotal.split('.')[0];
  }
  return formattedTotal;
}

function removeField(i: Number, data: CalcSimpleType) {
  data.values = data.values.filter((_: any, index: Number) => i !== index)
}

export {
  printResult,
  printResultBlock,
  removeField
}
