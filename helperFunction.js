/** This is a comment template
  * @param {string} paramName
  * @return {Array} [Wabli]
  */
function pregetAllwabli(param) {
  // insert code here
  const f3param = [];
  let f3param = param.filter(wabli => wabli.wtitle = "1234")
  return f3param;
}
module.exports = {pregetAllwabli} 
