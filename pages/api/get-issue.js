import axios from 'axios';

export default async (req, res) => {
  try {
    const ticket = req.query.ticket;
    const axiosResponse = await axios.get(
      `https://honeycomb.jira.com/rest/api/2/issue/${ticket}`,
      {
        headers: {
          Authorization: `Basic ${process.env.JIRA_BASIC_AUTH}`,
        },
      },
    );
    return res.status(200).send(axiosResponse.data);
  } catch (error) {
    return res.status(400).send(error);
  }
}
