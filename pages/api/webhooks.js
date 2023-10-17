export default async (req, res) => {
  const query = req.query;
  if (req.method === 'POST') {
    console.log(req.body)
    res.status(200).send('OK');
  } else if (req.method === 'GET') {
    res.status(200).send(query['hub.challenge']);
  } else  {
    res.status(405).send('Method Not Allowed');
  }
};