import React, { useCallback, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import TrendItem from "./TrendItem";
import { Box, Grid, Skeleton, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchNewList } from "../../store/searchKeys";

export default function Search() {
  const params = useParams();

  const dispatch = useAppDispatch();
  const { itemList, loading } = useAppSelector((state) => state.searchInfo);

  const handleFetch = useCallback(async () => {
    const curParams = params.searchParams?.replaceAll("+", " ") || "";
    dispatch(fetchNewList(curParams));
  }, [dispatch, params.searchParams]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const preView = useMemo(() => {
    const temp = new Array(4).fill(0);
    return (
      <>
        {temp.map((item, index) => {
          return (
            <Stack
              spacing={1}
              key={index}
              style={{ marginRight: 20, marginTop: 10 }}
            >
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <Skeleton variant="rectangular" width={210} height={60} />
              <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
          );
        })}
      </>
    );
  }, []);

  return (
    <div>
      <div style={{ marginLeft: 20, fontSize: 25, marginBottom: 20 }}>
        Related product trends
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} columns={16}>
          {itemList.length && !loading
            ? itemList.map((item, index) => (
                <Grid item xs={14} sm={14} md={8} lg={5} xl={4} key={index}>
                  <TrendItem data={item} params={params.searchParams} />
                </Grid>
              ))
            : preView}
        </Grid>
      </Box>
    </div>
  );
}
