const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello from the Jenkins pipeline!');
});
app.listen(3000, () => {
    console.log('Server running  on port 3000!');
}); 