import ModalComponent from "@/components/modal/ModalComponent";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

// Add your Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9zZXBoYWRkIiwiYSI6ImNsaWRsd3Y5NjByZHEzZnFvbnhncGZtdnEifQ.dU-GFHpmYt4n4O7JEgc9wQ";

const countryData = [
  {
    code: "USA",
    name: "United States",
    salary_benchmark: 75000,
    inflation_rate: 3.1,
    gdp: 22675000, // in million USD
    unemployment_rate: 3.6,
    gdp_growth_rate: 2.3,
    debt_to_gdp_ratio: 107.3,
    exchange_rate: 1, // USD to USD
    current_account_balance: -484, // in billion USD
    consumer_confidence_index: 114.8,
    interest_rate: 4.25, // Fed Funds Rate in %
    recession_status: "No", // New field for recession status
    fiscal_deficit: 7.5, // New field for fiscal deficit as percentage of GDP
    public_debt: 30.2, // New field for public debt as percentage of GDP
    color: "#FF0000",
  },
  {
    code: "CAN",
    name: "Canada",
    salary_benchmark: 65000,
    inflation_rate: 2.2,
    gdp: 2100000, // in million USD
    unemployment_rate: 5.0,
    gdp_growth_rate: 1.8,
    debt_to_gdp_ratio: 88.5,
    exchange_rate: 1.35, // USD to CAD
    current_account_balance: -51, // in billion USD
    consumer_confidence_index: 90.1,
    interest_rate: 4.5, // BoC Rate in %
    recession_status: "No", // New field for recession status
    fiscal_deficit: 6.5, // New field for fiscal deficit as percentage of GDP
    public_debt: 9.2, // New field for public debt as percentage of GDP
    color: "#00FF00",
  },
  {
    code: "GBR",
    name: "United Kingdom",
    salary_benchmark: 55000,
    inflation_rate: 1.8,
    gdp: 3100000, // in million USD
    unemployment_rate: 4.2,
    gdp_growth_rate: 1.9,
    debt_to_gdp_ratio: 103.7,
    exchange_rate: 1.22, // USD to GBP
    current_account_balance: -35, // in billion USD
    consumer_confidence_index: 99.3,
    interest_rate: 5.0, // BoE Rate in %
    recession_status: "No", // New field for recession status
    fiscal_deficit: 7.5, // New field for fiscal deficit as percentage of GDP
    public_debt: 10.2, // New field for public debt as percentage of GDP
    color: "#0000FF",
  },
  {
    code: "AUS",
    name: "Australia",
    salary_benchmark: 70000,
    inflation_rate: 2.5,
    gdp: 1600000, // in million USD
    unemployment_rate: 3.7,
    gdp_growth_rate: 2.6,
    debt_to_gdp_ratio: 41.8,
    exchange_rate: 0.67, // USD to AUD
    current_account_balance: 13, // in billion USD
    consumer_confidence_index: 102.4,
    interest_rate: 4.1, // RBA Rate in %
    recession_status: "No", // New field for recession status
    fiscal_deficit: 7.5, // New field for fiscal deficit as percentage of GDP
    public_debt: 5.2, // New field for public debt as percentage of GDP
    color: "#FFFF00",
  },
];

const MapComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>({});

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current as HTMLElement,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [0, 0],
        zoom: 2,
      });

      mapRef.current = map;

      map.addControl(new mapboxgl.NavigationControl());

      map.on("load", () => {
        map.addSource("countries", {
          type: "vector",
          url: "mapbox://mapbox.country-boundaries-v1",
        });

        map.addLayer({
          id: "country-fills",
          type: "fill",
          source: "countries",
          "source-layer": "country_boundaries",
          paint: { "fill-color": "#627BC1", "fill-opacity": 0.5 },
        });

        map.addLayer({
          id: "country-borders",
          type: "line",
          source: "countries",
          "source-layer": "country_boundaries",
          paint: { "line-color": "#000", "line-width": 1 },
        });

        map.on("click", "country-fills", (e: any) => {
          const clickedCountryISO =
            e.features[0]?.properties?.iso_3166_1_alpha_3;
          const countryInfo = countryData.find(
            (country) => country.code === clickedCountryISO,
          );

          if (countryInfo) {
            setModalContent(countryInfo);
            setIsModalOpen(true);
          } else {
            setModalContent({});
            setIsModalOpen(true);
          }
        });

        map.on("mouseenter", "country-fills", () => {
          map.getCanvas().style.cursor = "pointer";
        });

        map.on("mouseleave", "country-fills", () => {
          map.getCanvas().style.cursor = "";
        });

        map.setPaintProperty("country-fills", "fill-color", [
          "match",
          ["get", "iso_3166_1_alpha_3"],
          "USA",
          "#FF0000",
          "CAN",
          "#00FF00",
          "GBR",
          "#0000FF",
          "AUS",
          "#FFFF00",
          "#627BC1",
        ]);
      });

      const resizeObserver = new ResizeObserver(() => {
        if (mapRef.current) {
          mapRef.current.resize();
        }
      });

      resizeObserver.observe(mapContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        map.remove();
      };
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
      <ModalComponent
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Country Information"
      >
        {modalContent && (
          <div className="max-h-96 overflow-y-auto [&::-moz-scrollbar-thumb]:rounded-full [&::-moz-scrollbar-thumb]:bg-gray-200 [&::-moz-scrollbar-track]:m-1 [&::-moz-scrollbar]:w-2 [&::-ms-scrollbar-thumb]:rounded-full [&::-ms-scrollbar-thumb]:bg-gray-200 [&::-ms-scrollbar-track]:m-1 [&::-ms-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-track]:m-1 [&::-webkit-scrollbar]:w-2">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Attribute
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Country
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.name}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Salary Benchmark
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    ${modalContent.salary_benchmark}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Inflation Rate
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.inflation_rate}%
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    GDP
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    ${modalContent.gdp} million
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Unemployment Rate
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.unemployment_rate}%
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    GDP Growth Rate
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.gdp_growth_rate}%
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Debt-to-GDP Ratio
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.debt_to_gdp_ratio}%
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Exchange Rate
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.exchange_rate} USD
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Current Account Balance
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    ${modalContent.current_account_balance} billion
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Consumer Confidence Index
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.consumer_confidence_index}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Interest Rate
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.interest_rate}%
                  </td>
                </tr>
                {/* New rows for additional economic data */}
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Recession Status
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.recession_status}
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Fiscal Deficit
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.fiscal_deficit}%
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    Public Debt
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {modalContent.public_debt}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </ModalComponent>
    </>
  );
};

export default MapComponent;
