module.exports = function check(str, bracketsConfig) {
    // create dictionary of brackets
    let dict = {}
    for(let i = 0; i < bracketsConfig.length; i++){
        dict[bracketsConfig[i][0]] = ''
        dict[bracketsConfig[i][1]] = bracketsConfig[i][0]
    }

    let stack = []

    for(let bracket of str){
        const opposite_bracket = dict[bracket]
        if (bracket === dict[bracket]){
            if (stack.includes(opposite_bracket)){
                if(stack.pop() != opposite_bracket){
                    return false
                }
            } else {
                stack.push(bracket)
            }
        } else {
            if(opposite_bracket === ''){
                stack.push(bracket)
            }
            if(opposite_bracket && stack.pop() != opposite_bracket){
                return false
            }
        }
    }
    return stack.length > 0 ? false : true
}
