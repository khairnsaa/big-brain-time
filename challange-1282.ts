// There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.
// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. 
// For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
// Return a list of groups such that each person i is in a group of size groupSizes[i].
// Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. 
// It is guaranteed that there will be at least one valid solution for the given input.

// Example:
// Input: groupSizes = [2,1,3,3,3,2]
// Output: [[1],[0,5],[2,3,4]]

function groupThePeople(groupSizes: number[]): number[][] {
    const groupMap = new Map()
    const answer: number[][] = []

    groupSizes.forEach((group, index) => {
        if (!groupMap.has(group)) {
            groupMap.set(group, { count: 0, indexes: [] });
        }

        const entry = groupMap.get(group);
        entry.count++;
        entry.indexes.push(index);
    });

    for(const [size, entry] of groupMap){
        const people = entry.indexes;

        for(let i=0; i<people.length; i+= size){
            answer.push(people.slice(i, i+size))
        }
    }
    return answer
};
