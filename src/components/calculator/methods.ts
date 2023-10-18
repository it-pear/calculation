import {CalcSimpleType} from "@/components/calculator/types";

function printResult(total: Number | String): string {
  const roundedTotal = Math.round(Number(total));
  if (total === "") {
    return "";
  } else {
    if (roundedTotal < 10000) return roundedTotal.toString();
    return roundedTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}

function printResultBlock(total: Number | String): string {
  const roundedTotal = Math.round(Number(total));
  if (total === "") {
    return "0";
  } else {
    if (roundedTotal < 10000) return roundedTotal.toString();
    return roundedTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
function removeField(i: Number, data: CalcSimpleType) {
    data.values = data.values.filter((_: any, index: Number) => i !== index)
}

export {
    printResult,
    printResultBlock,
    removeField
}
