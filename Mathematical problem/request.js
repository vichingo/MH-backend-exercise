const axios = require('axios');

axios.post('http://localhost:4000/api/kadane', {
    two_d: [0, -2, -7, 0, 9, 2, -6, 2, -4, 1, -4, 1, -1, 8, 0, -2],
    size: 4    
}).then((res) => {
    console.log (res.data);
}).catch((err) => {
    console.error(err);
})
