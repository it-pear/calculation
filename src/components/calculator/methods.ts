import {CalcSimpleType} from "@/components/calculator/types";

function printResult(total: Number | String): Number | String {
    if (total === "") {
        return ""
    } else if (total > 100000) {
        return "100000"
    } else if (Number.isInteger(total)) {
        return total
    } else {
        return String(Number(total).toFixed(2))
    }
}

 function printResultBlock(total: Number | String): Number | String {
    if (total === "") {
        return 0
    } else if (total > 100000000) {
        return ">100000000"
    } else if (Number.isInteger(total)) {
        return total
    } else {
        return Number(total).toFixed(2)
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
