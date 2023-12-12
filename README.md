# aws

const axios = require('axios');

exports.handler = async (event) => {
  const url = 'https://graph.facebook.com/v17.0/113330935201212/messages';
  const token = '<YOUR_FACEBOOK_GRAPH_API_TOKEN>'; // Replace this with your token

  const data = {
    "messaging_product": "whatsapp",
    "to": "", // Replace this with the recipient ID
    "type": "template",
    "template": {
      "name": "hello_world",
      "language": {
        "code": "en_US"
      }
    }
  };

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Message sent successfully!');
    return {
      statusCode: 200,
      body: 'Message sent successfully!'
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      statusCode: 500,
      body: 'Error sending message'
    };
  }
};








const axios = require('axios');

exports.handler = async (event) => {
  const url = 'https://graph.facebook.com/v17.0/me/messages';
  const token = '<YOUR_FACEBOOK_GRAPH_API_TOKEN>'; // Replace this with your token

  const data = {
    "recipient": {
      "phone_number": "254723224644"
    },
    "message": {
      "attachment": {
        "type": "file",
        "payload": {
          "url": "<PUBLIC_URL_OF_YOUR_PDF>" // Replace this with your PDF's URL
        }
      }
    }
  };

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Message sent successfully!');
    return {
      statusCode: 200,
      body: 'Message sent successfully!'
    };
  } catch (error) {
    console.error('Error sending message:', error);
    return {
      statusCode: 500,
      body: 'Error sending message'
    };
  }
};
