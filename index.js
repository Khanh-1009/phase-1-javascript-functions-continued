// code your solution here
function saturdayFun(emphatic="roller-skate"){
    return `This Saturday, I want to ${emphatic}!`
}

function mondayWork(emphatic="go to the office"){
    return `This Monday, I will ${emphatic}.`
}

function wrapAdjective(flair="*"){
    return function inner(emphatic='special'){
        return `You are ${flair}${emphatic}${flair}!`
    }
}
wrapAdjective('||')("a dedicated programmer");