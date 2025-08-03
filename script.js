//your JS code here. If required.
function printFunctionName(func) {
    func();
}

function functionName() {
    alert(arguments.callee.name);
}

printFunctionName(functionName);
