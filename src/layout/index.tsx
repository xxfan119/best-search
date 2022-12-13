import React from "react";
import { useLocation } from "react-router-dom";
import BestSearch from "../components/best-seach";
import SearchInput from "../components/search-item";
import { paths } from "../config/paths";
import Router from "../router";
import { LayoutBox, TopBar } from "./style";

export default function Layout() {
  const location = useLocation();

  return (
    <LayoutBox>
      <TopBar>
        <BestSearch />
        {location.pathname.includes(paths.search) && <SearchInput />}
      </TopBar>
      <div>
        <Router />
      </div>
    </LayoutBox>
  );
}
