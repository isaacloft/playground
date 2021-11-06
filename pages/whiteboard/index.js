import React from 'react';
import styled from 'styled-components';
import fetch from 'node-fetch';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

const publicPage = (props) => {
  return (
    <>
      <h1>whiteboard</h1>
    </>
  );
};

export async function getServerSideProps({}) {
  console.info('###################################');
  console.info('Show node js server side logs');

  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()

  // Pass post data to the page via props
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default publicPage;
