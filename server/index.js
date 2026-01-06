import dotenv from 'dotenv';


import app from './src/app.js';
import {port} from './src/constants.js';


dotenv.config();


app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});