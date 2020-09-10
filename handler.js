'use strict';

module.exports.hello = async event => {
  console.log(JSON.stringify(event))
  const { pathParameters: { name } } = event
  const buidEnv = {}
  if (name === 'ollie') {
    buildEnv = process.env.BUILD_ENV
  }
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello, ${name}! - ${JSON.stringify(buildEnv)}`,
      },
      null,
      2
    )
  }
}

module.exports.goodbye = async event => {
  console.log(JSON.stringify(event))
  const { pathParameters: { name } } = event
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Goodbye, ${name}!`,
      },
      null,
      2
    )
  }
}
