const budget = 10;
const keyboards = [3, 1];
const drives = [5, 2, 8];

function getMoreExpensiveValues(firstArray, secondArray, budget){
    totalAmount = 0;
    exit_loops = false;
    for (let i=0; i<firstArray.length; i++) {
        for(let j=0; j<secondArray.length; j++){
            if(firstArray[i] + secondArray[j] <= budget){
                totalAmount = firstArray[i] + secondArray[j];
                exit_loops = true;
                break;
            }
        }if(exit_loops == true) break
    }
    if(totalAmount==0) return -1
    return totalAmount;
}

function electronicShop(budget, keyboards, drives){
    drives.sort(function(a, b){return b-a});
    keyboards.sort(function(a, b){return b-a});
    let maxValueKeyboard = keyboards[0];
    let maxValueDrives = drives[0];
    if(budget - maxValueKeyboard - maxValueDrives >= 0){
        return maxValueKeyboard + maxValueDrives;
    }
    if(maxValueKeyboard >= maxValueDrives){
        const totalAmount = getMoreExpensiveValues(keyboards, drives, budget);
        return totalAmount;
    }else{
        const totalAmount = getMoreExpensiveValues(drives, keyboards, budget);
        return totalAmount;
    }
}

result = electronicShop(budget, keyboards, drives)

console.log(result)