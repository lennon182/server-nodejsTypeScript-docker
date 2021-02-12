import mongoose from 'mongoose';

export default class DbConnection {
  private URI_DB: string = 'mongodb://localhost:27018/flipper';
  constructor() {}

  dbStart() {
    const connection = mongoose
      .connect(this.URI_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then((connected) => {
        console.log(`DB is Connected...`);
      })
      .catch((e) => {
        console.log(`ERRROR, DB no connected...`, e.message);
      });

    return connection;
  }
}
