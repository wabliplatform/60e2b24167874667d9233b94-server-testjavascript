/** This is a comment template
  * @param {string} paramName
  * @return {Array} [Wabli]
  */
function pregetAllwabli(param) {
  // insert code here
  const f3param = [];
 
 
  f3param = param.filter(function(person) {return person.wtitle >4})
 
  return f3param;
}
module.exports = {pregetAllwabli} 
