// closure 
function logger (namespace) {
    function message (message) {
        console.log(namespace + ': ' + message);
    }
    return message ;
}

const logger1 = logger("Info");
logger1("dang chay ngon lan ba con a....");
logger1("thnah cong....");