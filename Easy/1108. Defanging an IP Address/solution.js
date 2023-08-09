// https://leetcode.com/problems/defanging-an-ip-address/description/

// shift whole string over by three 

var defangIPaddr = function(address) {
    let output = ''
    for (let i = 0; i < address.length; i++) {
        if (address[i] == ".") {
            output += "[.]"
        } else {
            output += address[i]
        }
    }
    return output
};

console.log(defangIPaddr("255.255.255.255"))