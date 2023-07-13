"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxCommon";
import {
  fetchOptionGreek,
  optionGreekData,
} from "@/redux/slices/optionGreekSlice";
import {
  fetchOptionStrategySelection,
  optionStrategiSelectionData,
} from "@/redux/slices/optionStrategySlice";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const StratergiesChart = () => {
  const [strikes, setStrikes] = useState<any>([]);
  const dispatch = useAppDispatch();
  const optionStrategiSelectionGraphData: any = useAppSelector(
    optionStrategiSelectionData
  );
  const selectedExpirationDate: any = useAppSelector(optionGreekData);
  const searchParams = useSearchParams();
  const search: string | null = searchParams.get("q");

  useEffect(() => {
    if (search) {
      dispatch(fetchOptionStrategySelection(search));
    }
  }, [search]);

  useEffect(() => {
    if (selectedExpirationDate?.length > 0) {
      let uniqueValues: Record<string, any> = {};
      selectedExpirationDate?.map((itm: any, idx: number) => {
        const trimNumber = itm.strike;
        const str_a = trimNumber.toString();
        const finalPrice = Number(str_a).toFixed(3);
        const obj = { x: itm.strike, y: finalPrice };
        uniqueValues = {
          ...uniqueValues,
          [itm.strike]: +finalPrice,
        };
      });
      const arr: any = Object.entries(uniqueValues).map(([x, y]) => ({ x, y }));
      setStrikes([{ name: "strikes", data: arr }]);
    }
  }, [selectedExpirationDate]);

  var options: any = {
    // series: [
    //   {
    //     name: "north",
    //     data: [
    //       {
    //         x: 1996,
    //         y: 322,
    //       },
    //       {
    //         x: 1997,
    //         y: 324,
    //       },
    //       {
    //         x: 1998,
    //         y: 329,
    //       },
    //       {
    //         x: 1999,
    //         y: 342,
    //       },
    //       {
    //         x: 2000,
    //         y: 348,
    //       },
    //       {
    //         x: 2001,
    //         y: 334,
    //       },
    //       {
    //         x: 2002,
    //         y: 325,
    //       },
    //       {
    //         x: 2003,
    //         y: 316,
    //       },
    //       {
    //         x: 2004,
    //         y: 318,
    //       },
    //       {
    //         x: 2005,
    //         y: 330,
    //       },
    //       {
    //         x: 2006,
    //         y: 355,
    //       },
    //       {
    //         x: 2007,
    //         y: 366,
    //       },
    //       {
    //         x: 2008,
    //         y: 337,
    //       },
    //       {
    //         x: 2009,
    //         y: 352,
    //       },
    //       {
    //         x: 2010,
    //         y: 377,
    //       },
    //       {
    //         x: 2011,
    //         y: 383,
    //       },
    //       {
    //         x: 2012,
    //         y: 344,
    //       },
    //       {
    //         x: 2013,
    //         y: 366,
    //       },
    //       {
    //         x: 2014,
    //         y: 389,
    //       },
    //       {
    //         x: 2015,
    //         y: 334,
    //       },
    //     ],
    //   },
    //   {
    //     name: "south",
    //     data: [
    //       {
    //         x: 1996,
    //         y: -162,
    //       },
    //       {
    //         x: 1997,
    //         y: -90,
    //       },
    //       {
    //         x: 1998,
    //         y: -50,
    //       },
    //       {
    //         x: 1999,
    //         y: -77,
    //       },
    //       {
    //         x: 2000,
    //         y: -35,
    //       },
    //       {
    //         x: 2001,
    //         y: -45,
    //       },
    //       {
    //         x: 2002,
    //         y: -88,
    //       },
    //       {
    //         x: 2003,
    //         y: -120,
    //       },
    //       {
    //         x: 2004,
    //         y: -156,
    //       },
    //       {
    //         x: 2005,
    //         y: -123,
    //       },
    //       {
    //         x: 2006,
    //         y: -88,
    //       },
    //       {
    //         x: 2007,
    //         y: -66,
    //       },
    //       {
    //         x: 2008,
    //         y: -45,
    //       },
    //       {
    //         x: 2009,
    //         y: -29,
    //       },
    //       {
    //         x: 2010,
    //         y: -45,
    //       },
    //       {
    //         x: 2011,
    //         y: -88,
    //       },
    //       {
    //         x: 2012,
    //         y: -132,
    //       },
    //       {
    //         x: 2013,
    //         y: -146,
    //       },
    //       {
    //         x: 2014,
    //         y: -169,
    //       },
    //       {
    //         x: 2015,
    //         y: -184,
    //       },
    //     ],
    //   },
    // ],
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "straight",
      width: 1,
      colors: ["#38AD4B", "#D12121"],
    },

    title: {
      text: "",
      align: "left",
      style: {
        fontSize: "14px",
      },
    },
    xaxis: {
      type: "categories", // Specify the x-axis type as 'category'
      categories: ["10", "20", "30", "40", "50"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      floating: false,

      labels: {
        style: {
          colors: "#8e8da4",
        },
        offsetY: -7,
        offsetX: 0,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 0.5,
      colors: ["#38AD4B", "#D93F3F"],
    },

    tooltip: {
      // x: {
      //   format: "yyyy",
      // },
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        const xValue = w.globals.seriesX[seriesIndex][dataPointIndex];
        const date = new Date(xValue).toLocaleDateString("en-US");
        const yValue = series[seriesIndex][dataPointIndex];
        // Custom tooltip function
        const tooltipContent = `<div class="custom-tooltip">${yValue} - ${date}</div>`;
        return tooltipContent;
      },
      fixed: {
        enabled: false,
        position: "topRight",
      },
    },
    grid: {
      yaxis: {
        lines: {
          offsetX: -30,
        },
      },
      padding: {
        left: 20,
      },
    },
  };

  return (
    <>
      <div id="chart-timeline">
        <ReactApexChart
          options={options}
          series={strikes}
          type="area"
          height={350}
        />
      </div>
    </>
  );
};
export default StratergiesChart;
