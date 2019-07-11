const express = require('express');
const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the employee records API...' })
);
//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/employees', require('./routes/employees'));
app.use('/api/profile', require('./routes/profile'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
