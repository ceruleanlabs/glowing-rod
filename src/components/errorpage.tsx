import React from 'react';

const ErrorPage = (props: any) =>
{
  return <>
    <h1>Error Page</h1>
    <p>{props.location ? props.location.state.message : "404 Not Found"}</p>
  </>
};

export default ErrorPage;