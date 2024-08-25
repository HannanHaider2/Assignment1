const express = require('express')
const app = express();
let arr = ['Hannan', 'Bilal', 'Osama', 'Haziq']
app.get('/', function (req, res) {
    res.json(arr)
})

app.post('/add', function (req, res) {
    arr.push('Ali');
    res.json({ message: 'Ali added successfully', arr: arr });
});
app.delete('/delete', function (req, res) {
    arr.splice('Haziq', 1);
    res.json({ message: 'Haziq removed if it existed', arr: arr });
});
app.listen(3004, () => {
    console.log('Server Started')
});