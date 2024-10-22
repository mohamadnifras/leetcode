
var defangIPaddr = function(address) {
    let ip = address.split(".") 
    let defangedIP = ip.join("[.]")
    return defangedIP
 };
 console.log(defangIPaddr("1.1.1.1"));
 