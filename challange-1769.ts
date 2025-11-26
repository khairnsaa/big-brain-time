function minOperations(boxes: string): number[] {
    const n = boxes.length;
    const answer = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        let cost = 0;

        for (let j = 0; j < n; j++) {
            if(boxes[j] === "1") cost += Math.abs(i-j)
        }

        answer[i] = cost;
    }

    return answer;
};
