/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let prefix = '';
    let lengthMinWord = strs.reduce((a, b) => a.length < b.length ? a : b, strs[0]);
    if (!strs) {
        return '';
    }
    if (strs.length == 1) {
        return strs[0];
    }

    let flag = true
    
    let c = '';
    let ans = '';

    for (let j = 0; j < strs.length; j++) {
        for (let i = 0; i < lengthMinWord.length; i++) {
            if (j == 0) {
            prefix += strs[j][i];
            ans = prefix;
            }
            
            if (!(prefix[i] == strs[j][i]) && flag) {
                c += prefix.split('').splice(i, lengthMinWord.length).join('');
                
                if (j == strs.length - 1) {
                    flag = false;
                    break;
                }
                if (i == 0) {
                    flag = false;
                    break;
                }
                break;
                
            }
        
        }
        if (!flag) {
            if (c === ans[0] && ans.slice(-1) === c && ans.length > 1) {
                ans = ans.slice(0, ans.length-1);
                break;
            } 
            ans = ans.replace(`${c}`, '');
            break;
        } 

        if (!(ans == c) && !(ans.length == 1)){
            if (c === ans[0] && ans.slice(-1) === c && ans.length > 1) {
                ans = ans.slice(0, ans.length-1);
                break;
            }
            ans = ans.replace(`${c}`, '');
            prefix = prefix.replace(`${c}`, '');
        }

        c = '';
    }

    return ans;

};


let arr = ["abaa","abc","abca"];
console.log(longestCommonPrefix(arr));