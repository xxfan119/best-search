import React, { useCallback, useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

import { TrendBox } from "./style";
import { dateFormat } from "../../utils/time";
import useEventListener from "../../components/hooks/useEventListener";
import { ListItem } from "../../store/searchKeys/interface";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

interface Props {
  data: ListItem;
  params?: string;
}
export default function TrendItem(props: Props) {
  const { data, params } = props;
  const ref = useRef<any>();
  const echartRef = useRef<any>(null);

  const getOption = useCallback(() => {
    return {
      xAxis: {
        type: "time",
        show: false,
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          type: "line",
          smooth: true,
          areaStyle: {},
          symbol: "none",
          data: data.search_msv.map((item) => {
            return [item.date, item.sv];
          }),
        },
      ],
    };
  }, [data]);

  useEffect(() => {
    if (!ref.current) return;
    if (!echartRef.current) {
      echartRef.current = echarts.init(ref.current);
    }
    const options = getOption();
    echartRef.current.setOption(options, true);
  }, [getOption]);

  const handleResize = useCallback(() => {
    echartRef.current.resize();
  }, [echartRef]);

  useEventListener({
    type: "resize",
    handler: handleResize,
  });

  const curName = useMemo(() => {
    let res = data.name;
    const keys = params?.split("+");
    keys?.forEach((key) => {
      res = res.replaceAll(key, `<span>${key}</span>`);
    });
    return res;
  }, [data.name, params]);
  
  return (
    <TrendBox>
      <div
        className="name"
        dangerouslySetInnerHTML={{
          __html: curName,
        }}
      />
      <div className="growth">Growth {data.growth}%</div>
      <div ref={ref} className="chart" />
      <div className="time">
        {dateFormat(data.created_at) + "-" + dateFormat(data.updated_at)}
      </div>
    </TrendBox>
  );
}
