import { gql, useLazyQuery } from "@apollo/client";

const QUERY = gql`
  query {
    user(id: "11") {
      name
      username
      email
    }
  }
`;

const GetUser = () => {
  const [getUser, { loading, data }] = useLazyQuery(QUERY);

  return (
    <>
      <button onClick={() => getUser()}>Get User</button>
      {loading && <p>Loading ...</p>}
      {data && (
        <h1>
          Hello {data.user.name} {data.user.username}!
        </h1>
      )}
    </>
  );
};

export default GetUser;
