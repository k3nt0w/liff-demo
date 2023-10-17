export default async (req, res) => {
  if (req.method === 'POST') {
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
};