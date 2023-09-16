import express from 'express';
import database from './database';
import dotenv from 'dotenv';

dotenv.config();


function main() {
  const app = express();

  const { connectDB } = database();

  connectDB();

  app.listen(process.env.SERVER_PORT as string, () => {
    console.log(`servidor rodando na porta ${3030}`);
  });
}

main();