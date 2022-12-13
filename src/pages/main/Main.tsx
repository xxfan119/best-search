import React from "react";

import SearchInput from "../../components/search-item";
import { InputContainer } from "./style";
export default function Main() {
  return (
    <InputContainer>
      <div className="trends">Search Trends</div>
      <SearchInput />
    </InputContainer>
  );
}
