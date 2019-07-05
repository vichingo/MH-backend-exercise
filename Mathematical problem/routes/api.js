const express = require('express');
const router = express.Router();



// add the 2D array object
router.post('/kadane', (req, res) => {
    // console.log(req)
    let result = kadane(req.body.two_d, req.body.size);
    res.send({
        sub_rect: result
    });
    // console.log(res);

    // console.log(res.data);
});

// voor 1D arrays
function maxSubArrays(arr, subArr) {
    let curr = 0;
    for(let i = 0; i < subArr; i++) {
        curr += arr[i];
    }
    console.log(curr);
    let maxSub = curr;
    console.log(maxSub);
    for(let j = subArr; j < arr.length; j++) {
        curr += arr[j] - arr[j - subArr];
        maxSub = Math.max(curr, maxSub);
        console.log(curr, maxSub, arr[j]);
    }
    console.log(curr, maxSub);
    console.log(`===================================`);
    return maxSub;
}

// voor 2D arrays
function kadane(arr, size) {
    // nieuwe arr defineren
    var nArr = [];
    // nieuwe array ombouwen naar matrix met row lengte op "size"
    while(arr.length > 0) {
        nArr.push(arr.splice(0,size));
    }
    return nArr;
}

module.exports = router;
