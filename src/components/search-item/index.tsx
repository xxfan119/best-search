import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBox } from "./styled";
import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../config/paths";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchKeys } from "../../store/searchKeys";

export default function SearchInput() {
  const params = window.location.pathname.split("/")[2];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchKeys = useAppSelector((state) => state.searchInfo.searchKeys);
  const [searchParams, setParams] = useState<string>("");

  useEffect(() => {
    if (searchKeys) {
      setParams(searchKeys);
    } else {
      if (params) {
        const curParams = params?.replaceAll("+", " ");
        dispatch(setSearchKeys(curParams));
      }
    }
  }, [dispatch, params, searchKeys]);

  const handleConfirm = useCallback(() => {
    if (!searchParams) {
      return;
    }
    dispatch(setSearchKeys(searchParams));
    const params = searchParams.trim().replaceAll(" ", "+");
    navigate(paths.search + `/${params}`);
  }, [dispatch, navigate, searchParams]);

  const changeParams = useCallback((e: any) => {
    setParams(e.target.value);
  }, []);

  return (
    <SearchBox>
      <TextField
        id="searchParams"
        value={searchParams}
        onChange={changeParams}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleConfirm();
          }
        }}
      />
      <Button variant="outlined" onClick={handleConfirm}>
        <SearchIcon style={{ color: "rgba(0, 0, 0, 0.3)" }} />
      </Button>
    </SearchBox>
  );
}
