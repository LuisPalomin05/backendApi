require('dotenv').config();
const app = require('./app');
require('./database');

async function main (){
    const port = app.get('port');
    await app.listen(port);
    console.log('Server on port', port);
    console.log(`\x1b]8;;http://localhost:${port}\x1b\\Server on port ${port}\x1b]8;;\x1b\\`);
    


}

main();
