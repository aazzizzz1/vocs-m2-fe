import React, { useCallback, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const seriesData = [
  { name: "CPU Usage", data: [23, 100, 65, 70, 52, 73, 83], color: "#31C48D" },
  {
    name: "Memory Usage",
    data: [43, 13, 65, 12, 42, 73, 89],
    color: "#7E3AF2",
  },
  {
    name: "CPU Temperature",
    data: [78, 43, 45, 22, 12, 83, 90],
    color: "#FACA15",
  },
];

const checkboxOptions = [
  { id: "cpu-usage", label: "CPU Usage" },
  { id: "memory-usage", label: "Memory Usage" },
  { id: "cpu-temperature", label: "CPU Temperature" },
];

const StatusServerChart = () => {
  const chartRef = useRef(null);
  const chart = useRef(null); // Use useRef for mutable value

  const cleanupChart = useCallback(() => {
    if (chartRef.current) {
      chartRef.current.innerHTML = "";
    }
  }, [chartRef]);

  const handleCheckboxChange = () => {
    const updatedSeries = checkboxOptions.reduce(
      (acc, { id, label }, index) => {
        if (document.getElementById(id).checked) {
          acc.push({
            name: label,
            data: seriesData[index].data,
            color: seriesData[index].color,
          });
        }
        return acc;
      },
      []
    );

    if (updatedSeries.length === 0) {
      chart.current.updateSeries(seriesData);
    } else {
      chart.current.updateSeries(updatedSeries);
    }
  };

  useEffect(() => {
    const options = {
      series: seriesData,
      chart: {
        height: 300,
        type: "area",
        toolbar: {
          show: true,
          tools: {
            download: `<svg class="w-[19px] h-[19px] mt-[2px] ml-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/></svg>`,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: `<svg class="w-[19px] h-[19px] mt-[2px] ml-0 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 96c38.4 0 73.7 13.5 101.3 36.1l-32.6 32.6c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H448c8.8 0 16-7.2 16-16V64c0-6.5-3.9-12.3-9.9-14.8s-12.9-1.1-17.4 3.5l-34 34C363.4 52.6 312.1 32 256 32c-10.9 0-21.5 .8-32 2.3V99.2c10.3-2.1 21-3.2 32-3.2zM132.1 154.7l32.6 32.6c4.6 4.6 11.5 5.9 17.4 3.5s9.9-8.3 9.9-14.8V64c0-8.8-7.2-16-16-16H64c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l34 34C52.6 148.6 32 199.9 32 256c0 10.9 .8 21.5 2.3 32H99.2c-2.1-10.3-3.2-21-3.2-32c0-38.4 13.5-73.7 36.1-101.3zM477.7 224H412.8c2.1 10.3 3.2 21 3.2 32c0 38.4-13.5 73.7-36.1 101.3l-32.6-32.6c-4.6-4.6-11.5-5.9-17.4-3.5s-9.9 8.3-9.9 14.8V448c0 8.8 7.2 16 16 16H448c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4l-34-34C459.4 363.4 480 312.1 480 256c0-10.9-.8-21.5-2.3-32zM256 416c-38.4 0-73.7-13.5-101.3-36.1l32.6-32.6c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9H64c-8.8 0-16 7.2-16 16l0 112c0 6.5 3.9 12.3 9.9 14.8s12.9 1.1 17.4-3.5l34-34C148.6 459.4 199.9 480 256 480c10.9 0 21.5-.8 32-2.3V412.8c-10.3 2.1-21 3.2-32 3.2z"/></svg>`,
            customIcons: [
              // {
              //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-gray-700 dark:text-gray-300" viewBox="0 0 16 16"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zm0 12a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm1.5-6.5H8V4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1z"/></svg>',
              //   title: "Change to Dark Mode",
              //   class: "custom-icon",
              //   index: 0,
              //   click: function () {
              //     document.querySelector("html").classList.toggle("dark");
              //   },
              // },
            ],
          },
          export: {
            // Customize the download options
            csv: {
              filename: "status-server",
            },
            svg: {
              filename: "status-server",
            },
            png: {
              filename: "status-server-png",
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    if (
      document.getElementById("labels-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      chart.current = new ApexCharts(
        document.getElementById("labels-chart"),
        options
      );
      chart.current.render();

      const checkboxes = document.querySelectorAll(
        '#status input[type="checkbox"]'
      );
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", handleCheckboxChange);
      });
    }

    return cleanupChart;
  }, [cleanupChart]);

  return (
    <div className="w-full dark:bg-gray-800">
      <div className="flex justify-center items-center mt-4" id="status">
        {checkboxOptions.map(({ id, label }) => (
          <div className="flex items-center mr-4" key={id}>
            <input
              id={id}
              type="checkbox"
              defaultValue={id}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor={id}
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {label}
            </label>
          </div>
        ))}
      </div>
      <div id="labels-chart" ref={chartRef} />
    </div>
  );
};

export default StatusServerChart;
