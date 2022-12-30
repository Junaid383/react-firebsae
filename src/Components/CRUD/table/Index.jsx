import React from "react";
import Header from "./Header";
import Body from "./Body";
import "./index.css";

function Index({ users, deleteCallback, updateCallback }) {
  return (
    <>
      <Header />
      <Body
        users={users}
        willDelete={deleteCallback}
        willUpdate={updateCallback}
      />
    </>
  );
}

export default Index;
