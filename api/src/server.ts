import express from 'express';
import database from './database';
import dotenv from 'dotenv';

dotenv.config();

function main() {
  const app = express();
  const SERVER_PORT = process.env.SERVER_PORT as string;

  const { connectDB } = database();

  connectDB();

  app.listen(SERVER_PORT, () => {
    console.log(`servidor rodando na porta ${SERVER_PORT}`);
  });
}

main();