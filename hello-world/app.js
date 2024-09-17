// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response

exports.lambdaHandler = async (event, context) => {
  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "hello my friend",
      }),
    }
  } catch (err) {
    console.log(err)
    return err
  }

  return response
}
