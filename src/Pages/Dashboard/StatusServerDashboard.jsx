import React, { useContext, useEffect } from "react";
import Memory from "../../Assets/Svg/Memory";
import MemoryAlt from "../../Assets/Svg/MemoryAlt";
import Thermostat from "../../Assets/Svg/Thermostat";
import ApexCharts from "apexcharts";
import CpuUsageHijau from "../../Assets/Svg/StatusServer/CpuUsageHijau";
import MemoryUsagePurple from "../../Assets/Svg/StatusServer/MemoryUsagePurple";
import CpuTemperatureYellow from "../../Assets/Svg/StatusServer/CpuTemperatureYellow";
import { StatusServerContext } from "../../StateManagements/StatusServerContext";
import { Modal } from "flowbite-react";
// import { io } from "socket.io-client";

const StatusServerDashboard = () => {
  const { stateStatusServer } =
    useContext(StatusServerContext);
  const {
    //Account Setting
    openModal,
    setOpenModal,
  } = stateStatusServer;

  // const { } =
  //   handleFunctionStatusServer;
  // const [cpuData, setCpuData] = useState([]);

  // useEffect(() => {
  //   const socket = io("http://localhost:8000/api/v1/dashboard/cpu-usage");

  //   // Menangani peristiwa data yang diterima dari socket
  //   socket.on("cpuData", (data) => {
  //     setCpuData(data); // Menyimpan data yang diterima dari socket ke dalam state
  //   });

  //   // Membersihkan socket saat komponen unmount
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []); // useEffect hanya akan dipanggil sekali setelah komponen dipasang

  useEffect(() => {
    // ApexCharts options and config
    let options = {
      // Konfigurasi sumbu X
      xaxis: {
        show: true, // Menampilkan sumbu X
        categories: [
          // Label pada sumbu X
          "1 s",
          "2 s",
          "3 s",
          "4 s",
          "5 s",
          "6 s",
          "7 s",
        ],
        labels: {
          // Konfigurasi label pada sumbu X
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false, // Menyembunyikan border pada sumbu X
        },
        axisTicks: {
          show: false, // Menyembunyikan tanda sumbu pada sumbu X
        },
      },
      // Konfigurasi sumbu Y
      yaxis: {
        show: true, // Menampilkan sumbu Y
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
          formatter: function (value) {
            // Mengatur format label pada sumbu Y
            return value + "%"; // Menambahkan simbol dolar ke nilai label
          },
        },
      },
      // Konfigurasi data series (grafik)
      series: [
        {
          name: "CPU Usage", // Nama seri pertama
          // data: cpuData, // Menggunakan data yang diterima dari socket // Data untuk seri pertama
          data: [23, 100, 65, 70, 52, 73], // Data untuk seri pertama
          color: "#31C48D", // Warna grafik untuk seri pertama
        },
        {
          name: "Memory Usage", // Nama seri kedua
          data: [43, 13, 65, 12, 42, 73], // Data untuk seri kedua
          color: "#7E3AF2", // Warna grafik untuk seri kedua
        },
        {
          name: "CPU Temperature", // Nama seri ketiga
          data: [78, 43, 45, 22, 12, 83], // Data untuk seri ketiga
          color: "#FACA15", // Warna grafik untuk seri ketiga
        },
      ],
      // Konfigurasi grafik secara umum
      chart: {
        sparkline: {
          enabled: false, // Menyembunyikan efek sparkline pada grafik
        },
        height: "100%", // Tinggi grafik
        width: "100%", // Lebar grafik
        type: "area", // Jenis grafik (area chart)
        fontFamily: "Inter, sans-serif", // Jenis font teks pada grafik
        dropShadow: {
          enabled: false, // Menonaktifkan efek bayangan pada grafik
        },
        tooltip: {
          enabled: true,
          x: {
            show: false, // Menyembunyikan informasi sumbu X pada tooltip
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false, // Menyembunyikan label data pada grafik
        },
        stroke: {
          width: 6, // Ketebalan garis pada grafik
        },
        legend: {
          show: false, // Menyembunyikan legenda grafik
        },
        grid: {
          show: false, // Menyembunyikan grid pada grafik
        },
      },
    };

    console.log(options.series[0].data);
    // console.log(cpuData)

    // Menggambar grafik menggunakan ApexCharts jika elemen dengan id "labels-chart" tersedia dan ApexCharts diinisialisasi
    if (
      document.getElementById("labels-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("labels-chart"), // Memilih elemen HTML tempat grafik akan dirender
        options // Menggunakan konfigurasi yang telah ditentukan sebelumnya
      );

      // Mendapatkan semua checkbox berdasarkan nama kelas mereka
      const checkboxes = document.querySelectorAll(
        '#status input[type="checkbox"]'
      );

      // Fungsi untuk menangani peristiwa perubahan checkbox
      function handleCheckboxChange(_event, chart) {
        const updatedSeries = [];

        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            switch (checkbox.value) {
              case "cpu-usage":
                updatedSeries.push({
                  name: "CPU Usage",
                  data: options.series[0].data,
                  color: "#31C48D",
                });
                break;
              case "memory-usage":
                updatedSeries.push({
                  name: "Memory Usage",
                  data: options.series[1].data,
                  color: "#7E3AF2",
                });
                break;
              case "cpu-temperature":
                updatedSeries.push({
                  name: "CPU Temperature",
                  data: options.series[2].data,
                  color: "#FACA15",
                });
                break;
              default:
                break;
            }
          }
        });

        if (updatedSeries.length === 0) {
          // If no checkboxes are checked, set the series array to empty
          chart.updateSeries([
            {
              name: "CPU Usage", // Nama seri pertama
              data: options.series[0].data, // Data untuk seri pertama
              color: "#31C48D", // Warna grafik untuk seri pertama
            },
            {
              name: "Memory Usage", // Nama seri kedua
              data: options.series[1].data, // Data untuk seri kedua
              color: "#7E3AF2", // Warna grafik untuk seri kedua
            },
            {
              name: "CPU Temperature", // Nama seri ketiga
              data: options.series[2].data, // Data untuk seri ketiga
              color: "#FACA15", // Warna grafik untuk seri ketiga
            },
          ]);
        } else {
          // Update the chart with the selected series data
          chart.updateSeries(updatedSeries);
        }
      }

      // Attach the event listener to each checkbox
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) =>
          handleCheckboxChange(event, chart)
        );
      });
      chart.render(); // Merender grafik
    }
  }, []);
  // }, [cpuData]);

  return (
    <>
      <button
        type="button"
        data-modal-target="statusserver-modal"
        data-modal-toggle="statusserver-modal"
        className="grid gap-0 mb-8 grid-cols-1 md:grid-cols-3 w-full"
      >
        <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
          <div className="flex justify-start items-center">
            <Memory />
            <div className="flex flex-col ml-5">
              <p className="text-base text-gray-900">CPU Usage</p>
              <p className="leading-none text-3xl font-bold text-gray-900">
                42.57%
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
          <div className="flex justify-start items-center">
            <MemoryAlt />
            <div className="flex flex-col ml-5">
              <p className="text-base text-gray-900">Memory Usage</p>
              <p className="leading-none text-3xl font-bold text-gray-900">
                10.57%
              </p>
            </div>
          </div>
        </div>
        <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
          <div className="flex justify-start items-center">
            <Thermostat />
            <div className="flex flex-col ml-5">
              <p className="text-base text-gray-900">CPU Temperature</p>
              <p className="leading-none text-3xl font-bold text-gray-900">
                52°C
              </p>
            </div>
          </div>
        </div>
      </button>
      {/* Status Server Modal */}
      <Modal
        size={"5xl"}
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        {/* {errorMessageUpdate && (
          <ErrorToastAuth message={errorMessageUpdate} className="mb-4" />
        )} */}
        <Modal.Header>Add New User</Modal.Header>
        <Modal.Body className="p-0 space-y-0 bg-gray-50">
          {/* Modal body */}
        </Modal.Body>
      </Modal>
      <div
        id="statusserver-modal"
        tabIndex={-1}
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-5xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Status Server
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="statusserver-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="">
              <div className=" w-full dark:bg-gray-800">
                <div className="flex justify-center items-center mt-4" id="status">
                  <div className="flex items-center mr-4">
                    <input
                      id="cpu-usage"
                      type="checkbox"
                      defaultValue="cpu-usage"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="cpu-usage"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Cpu Usage
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="memory-usage"
                      type="checkbox"
                      defaultValue="memory-usage"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="memory-usage"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Memory Usage
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="cpu-temperature"
                      type="checkbox"
                      defaultValue="cpu-temperature"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="cpu-temperature"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Cpu Temperature
                    </label>
                  </div>
                </div>
                {/* Chart Di Tampilkan */}
                <div id="labels-chart" className="px-2.5" />
                {/* Chart Di Tampilkan */}
                <div className="grid grid-cols-1 items-center border-gray-200 dark:border-gray-700 justify-between mt-5 p-4 md:p-6 pt-0 md:pt-0">
                  <div className="grid gap-0 mt-2 grid-cols-1 md:grid-cols-3 w-full">
                    <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                      <div className="flex justify-start items-center">
                        <CpuUsageHijau />
                        <div className="flex flex-col ml-5">
                          <p className="text-base text-gray-900">CPU Usage</p>
                          <p className="leading-none text-3xl font-bold text-gray-900">
                            42.57%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                      <div className="flex justify-start items-center">
                        <MemoryUsagePurple />
                        <div className="flex flex-col ml-5">
                          <p className="text-base text-gray-900">
                            Memory Usage
                          </p>
                          <p className="leading-none text-3xl font-bold text-gray-900">
                            10.57%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-auto rounded border-[1px] bg-white dark:bg-gray-800 p-5">
                      <div className="flex justify-start items-center">
                        <CpuTemperatureYellow />
                        <div className="flex flex-col ml-5">
                          <p className="text-base text-gray-900">
                            CPU Temperature
                          </p>
                          <p className="leading-none text-3xl font-bold text-gray-900">
                            52°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusServerDashboard;