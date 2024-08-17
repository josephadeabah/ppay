import ModalComponent from "@/components/modal/ModalComponent"; // Import your ModalComponent
import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import * as geoUrl from "./world-countries.json"; // Ensure correct import

interface GeoProperties {
  code: string;
  name: string;
  salary_benchmark: number;
  inflation_rate: number;
  gdp: number;
  unemployment_rate: number;
  gdp_growth_rate: number;
  debt_to_gdp_ratio: number;
  exchange_rate: number;
  current_account_balance: number;
  consumer_confidence_index: number;
  interest_rate: number;
  recession_status: string;
  fiscal_deficit: number;
  public_debt: number;
}

export default function MapComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);

  const getRegionColor = (name: string): string => {
    switch (name) {
      case "Africa":
        return "#ADD8E6";
      case "Europe":
        return "#87CEEB";
      default:
        return "#D3D3D3";
    }
  };

  const handleClick = (props: GeoProperties) => {
    setModalTitle(props.name);
    setModalContent(
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
                {props.name}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Salary Benchmark
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                ${props.salary_benchmark}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Inflation Rate
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.inflation_rate}%
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                GDP
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                ${props.gdp} million
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Unemployment Rate
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.unemployment_rate}%
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                GDP Growth Rate
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.gdp_growth_rate}%
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Debt-to-GDP Ratio
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.debt_to_gdp_ratio}%
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Exchange Rate
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.exchange_rate} USD
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Current Account Balance
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                ${props.current_account_balance} billion
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Consumer Confidence Index
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.consumer_confidence_index}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Interest Rate
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.interest_rate}%
              </td>
            </tr>
            {/* New rows for additional economic data */}
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Recession Status
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.recession_status}
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Fiscal Deficit
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.fiscal_deficit}%
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                Public Debt
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                {props.public_debt}%
              </td>
            </tr>
          </tbody>
        </table>
      </div>,
    );
    setIsModalOpen(true);
  };

  return (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 200 }}
        style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
      >
        <ZoomableGroup zoom={1} minZoom={0.5} maxZoom={10}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const props = geo.properties as GeoProperties;
                const regionColor = getRegionColor(props.name);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => handleClick(props)}
                    style={{
                      default: {
                        fill: regionColor,
                        stroke: "#fff",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#4682B4",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#5F9EA0",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Modal for displaying country details */}
      <ModalComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        {modalContent}
      </ModalComponent>
    </>
  );
}
