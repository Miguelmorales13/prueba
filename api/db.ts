import { Sequelize } from 'sequelize'
const db: any = new Sequelize('Test', 'Test', 'Test.123', { dialect: 'mysql', host: 'localhost' })
export default db

