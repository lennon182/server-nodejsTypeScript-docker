import express from 'express';
import DbConnection from './src/db/Dbconnection';
import AuthRouter from './src/routes/auth.routes';
import FlippsRouter from './src/routes/flipss.routes';
import IndexRouter from './src/routes/index.routes';
import UserRouter from './src/routes/users.routes';
import Server from './src/server';

const server = new Server();
const dbConnection = new DbConnection();
const indexRoutes = new IndexRouter();
const authRoutes = new AuthRouter();
const userRoutes = new UserRouter();
const flippsRoutes = new FlippsRouter();

server.app.use(express.json());
server.app.use(express.urlencoded({ extended: true }));

server.app.use('/', indexRoutes.router);
server.app.use('/', authRoutes.router);
server.app.use('/', userRoutes.router);
server.app.use('/', flippsRoutes.router);

server.startSever(() => console.log(`Server Running...`));
dbConnection.dbStart();
