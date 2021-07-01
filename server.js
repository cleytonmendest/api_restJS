import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log('escutando na porta 3001');
  console.log(`Click em http://localhost:${port}`);
});
