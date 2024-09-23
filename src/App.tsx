import styled from "styled-components";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./clientConfig";
import AddUser from "./Components/AddUser";
import GetUser from "./Components/GetUser";

function App() {
  return (
    <ApolloProvider client={client}>
      <Holder>
        <GetUser />
        <AddUser />
      </Holder>
    </ApolloProvider>
  );
}

const Holder = styled.div``;

export default App;
