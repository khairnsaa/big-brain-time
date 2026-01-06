// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
// If there are fewer than k characters left, reverse all of them. 
// If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// solution 1 - bit messy
function reverseStr(s: string, k: number): string {
    let answer: string[] = []
    const splitedString: string[] = []
    for(let i=0; i<s.length; i+=k){
        let group = ""
        for(let j=i; j<i+k; j++){
            if(s[j]){
                group+= s[j]
            }
        }
        splitedString.push(group)
    }

    for(let i=0; i<splitedString.length; i++){
        if(i%2 == 0){
            answer.push(splitedString[i].split("").reverse().join(""))
        } else {
            answer.push(splitedString[i])
        }
    }
    return answer.join("")
};

// solution 2
function reverseStr(s: string, k: number): string {
    const res = s.split(""); // allowed minimal helper

    for (let i = 0; i < s.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);

        while (left < right) {
            const temp = res[left];
            res[left] = res[right];
            res[right] = temp;
            left++;
            right--;
        }
    }

    return res.join("");
}
