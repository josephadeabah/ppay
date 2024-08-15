interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  fill?: boolean;
}

interface HistoricalData {
  labels: string[];
  datasets: Dataset[];
}

interface CurrentData {
  labels: string[];
  datasets: Dataset[];
}

interface CountryData {
  historical: HistoricalData;
  current: CurrentData;
}

interface RegionalData {
  labels?: string[]; // This is optional in case you only want it in some cases
  datasets?: Dataset[];
  countries: {
    [key: string]: CountryData;
  };
}

interface InflationData {
  regional: {
    [key: string]: RegionalData;
  };
}

export const inflationData: InflationData = {
  regional: {
    NorthAmerica: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Current Year Inflation Rate",
          data: [2.3, 2.5, 2.1, 2.4, 2.6, 2.3, 2.5, 2.4, 2.7, 2.6, 2.8, 2.9],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
      countries: {
        USA: {
          historical: {
            labels: [
              "Jan 2023",
              "Feb 2023",
              "Mar 2023",
              "Apr 2023",
              "May 2023",
            ],
            datasets: [
              {
                label: "Inflation Rate",
                data: [2.1, 2.3, 2.5, 2.4, 2.6],
                borderColor: "rgba(255, 99, 132, 0.6)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
              },
            ],
          },
          current: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Current Year Inflation Rate",
                data: [
                  2.3, 2.5, 2.1, 2.4, 2.6, 2.3, 2.5, 2.4, 2.7, 2.6, 2.8, 2.9,
                ],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
              },
            ],
          },
        },
        Canada: {
          historical: {
            labels: [
              "Jan 2023",
              "Feb 2023",
              "Mar 2023",
              "Apr 2023",
              "May 2023",
            ],
            datasets: [
              {
                label: "Inflation Rate",
                data: [1.8, 2.0, 2.2, 2.1, 2.3],
                borderColor: "rgba(54, 162, 235, 0.6)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                fill: true,
              },
            ],
          },
          current: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Current Year Inflation Rate",
                data: [
                  1.9, 2.1, 2.3, 2.2, 2.4, 2.2, 2.1, 2.3, 2.5, 2.4, 2.3, 2.2,
                ],
                borderColor: "rgba(153, 102, 255, 1)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
              },
            ],
          },
        },
      },
    },
    SouthAmerica: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Current Year Inflation Rate",
          data: [3.0, 3.2, 3.1, 3.4, 3.6, 3.5, 3.7, 3.6, 3.8, 3.7, 3.9, 4.0],
          borderColor: "rgba(255, 159, 64, 1)",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
        },
      ],
      countries: {
        Brazil: {
          historical: {
            labels: [
              "Jan 2023",
              "Feb 2023",
              "Mar 2023",
              "Apr 2023",
              "May 2023",
            ],
            datasets: [
              {
                label: "Inflation Rate",
                data: [3.2, 3.4, 3.6, 3.5, 3.7],
                borderColor: "rgba(255, 159, 64, 0.6)",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
                fill: true,
              },
            ],
          },
          current: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Current Year Inflation Rate",
                data: [
                  3.1, 3.3, 3.5, 3.6, 3.7, 3.8, 3.6, 3.7, 3.9, 4.0, 4.1, 4.2,
                ],
                borderColor: "rgba(255, 159, 64, 1)",
                backgroundColor: "rgba(255, 159, 64, 0.2)",
              },
            ],
          },
        },
        Argentina: {
          historical: {
            labels: [
              "Jan 2023",
              "Feb 2023",
              "Mar 2023",
              "Apr 2023",
              "May 2023",
            ],
            datasets: [
              {
                label: "Inflation Rate",
                data: [4.5, 4.7, 4.8, 4.6, 4.9],
                borderColor: "rgba(75, 192, 192, 0.6)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
              },
            ],
          },
          current: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Current Year Inflation Rate",
                data: [
                  4.6, 4.8, 5.0, 5.1, 5.2, 5.3, 5.5, 5.6, 5.7, 5.8, 5.9, 6.0,
                ],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
              },
            ],
          },
        },
      },
    },
    Oceania: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Current Year Inflation Rate",
          data: [1.2, 1.3, 1.4, 1.5, 1.6, 1.5, 1.7, 1.8, 1.6, 1.7, 1.8, 1.9],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
        },
      ],
      countries: {
        Australia: {
          historical: {
            labels: [
              "Jan 2023",
              "Feb 2023",
              "Mar 2023",
              "Apr 2023",
              "May 2023",
            ],
            datasets: [
              {
                label: "Inflation Rate",
                data: [1.3, 1.4, 1.5, 1.6, 1.7],
                borderColor: "rgba(153, 102, 255, 0.6)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                fill: true,
              },
            ],
          },
          current: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Current Year Inflation Rate",
                data: [
                  1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.7, 1.8, 1.9, 2.0, 2.1,
                ],
                borderColor: "rgba(153, 102, 255, 1)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
              },
            ],
          },
        },
        NewZealand: {
          historical: {
            labels: [
              "Jan 2023",
              "Feb 2023",
              "Mar 2023",
              "Apr 2023",
              "May 2023",
            ],
            datasets: [
              {
                label: "Inflation Rate",
                data: [1.0, 1.2, 1.3, 1.4, 1.5],
                borderColor: "rgba(75, 192, 192, 0.6)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
              },
            ],
          },
          current: {
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Current Year Inflation Rate",
                data: [
                  1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.6, 1.7, 1.8, 1.9, 2.0,
                ],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
              },
            ],
          },
        },
      },
    },
  },
};
