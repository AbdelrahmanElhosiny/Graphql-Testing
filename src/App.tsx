import styled from "styled-components";
import "./App.css";

const QUERY = `query {
  country(code: "EG") {
    code
    emoji
  }
}`;

const fetchGraphql = async () => {
  const response = await fetch("https://countries.trevorblades.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
    }),
  });

  const data = await response.json();
  console.log(data);
  return data;
};

fetchGraphql();

function App() {
  return <Holder></Holder>;
}

const Holder = styled.div``;

export default App;
