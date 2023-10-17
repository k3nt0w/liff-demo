export default async (req, res) => {
  const { hub } = req.query;

  if (req.method === 'POST') {
    res.status(200).send('OK');
  } else if (req.method === 'GET') {
    res.status(200).send(hub.challenge);
  } else  {
    res.status(405).send('Method Not Allowed');
  }
};