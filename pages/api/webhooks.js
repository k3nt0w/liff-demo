// In-memory storage to hold the data
let dataStore = [];

export default async (req, res) => {
  if (req.method === 'POST') {
    // Store the POST request body data to dataStore array
    dataStore.push(req.body);
    console.log(req.body)
    res.status(200).send('OK');
  } else if (req.method === 'GET') {
    const { 'hub.challenge': hubChallenge } = req.query
    if (hubChallenge) {
      res.status(200).send(hubChallenge);
    }
    // On GET request, respond with the dataStore contents
    res.status(200).json(dataStore);
  } else {
    res.status(405).send('Method Not Allowed');
  }
};
