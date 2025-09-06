const accountId = 144553
let accountEmail = "Anurag@gmail.com"
var accountPassword = "12345"
accountCity = "Meerut"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "213213"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
