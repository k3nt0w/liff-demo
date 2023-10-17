export default async (req, res) => {
  if (req.method === 'POST') {
    res.status(200).send('1071378917');
  } else if (req.method === 'GET') {
    res.status(200).send('1071378917');
  } else  {
    res.status(405).send('Method Not Allowed');
  }
};