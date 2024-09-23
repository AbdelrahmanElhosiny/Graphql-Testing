import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
  mutation {
    createUser(
      input: { name: "hello", username: "ana", email: "ana@hello.com" }
    ) {
      id
      name
      username
      email
    }
  }
`;

const AddUser = () => {
  const [addUser, { data, loading }] = useMutation(MUTATION);

  return (
    <>
      <button onClick={() => addUser()}>Add User</button>
      {loading && <p>Loading ...</p>}
      {data && <h1>Hello {data.name}!</h1>}
    </>
  );
};

export default AddUser;
