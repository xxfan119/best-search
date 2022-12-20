import React from "react";
import { useNavigate } from "react-router-dom";
import { SearchfItem } from "./style";

export default function BestSearch() {
  const navigate = useNavigate();
  return (
    <SearchfItem
      onClick={() => {
        navigate("/");
      }}
    >
      Best<span>Search</span>
    </SearchfItem>
  );
}
