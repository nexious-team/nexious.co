import app from './app.json'
import home from './home.json'
import contact from './contact.json'
import about from './about.json'
import footer from './footer.json'
import service from './service.json'
import client from './client.json'
import getStarted from './get_started.json'

const index = { ...app, ...home, ...contact, ...about, ...footer, ...service, ...client, ...getStarted }

export default index
