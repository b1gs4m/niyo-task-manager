import { DB_USERNAME, DB_PASSWORD, DB_HOST } from '@config';

export const dbConnection = {
  url: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority&appName=techknight`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
