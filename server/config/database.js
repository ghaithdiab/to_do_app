import createPool from 'mysql';

const pool=createPool({
  port:process.env.PORT,
  host:process.env.DB_HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASSWORD,
  database:process.env.MYSQL_DB,
  connectionlimit:10,
})

export default pool;