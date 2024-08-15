interface Category {
  category: string;
  inflationRate: number;
}

interface Dataset {
  overallInflationRate: number;
  categories: Category[];
  label: string;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
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
  labels?: string[];
  datasets?: Dataset[];
  countries: {
    [key: string]: CountryData;
  };
}

export interface InflationData {
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
          overallInflationRate: 2.4,
          categories: [
            {
              category: "Food",
              inflationRate: 2.8,
            },
            {
              category: "Housing",
              inflationRate: -2.1,
            },
            {
              category: "Transportation",
              inflationRate: 4.0,
            },
            {
              category: "Healthcare",
              inflationRate: 2.1,
            },
            {
              category: "Education",
              inflationRate: 3.0,
            },
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          label: "Overall Inflation Rate",
          data: [],
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
              "Jun 2023",
              "Jul 2023",
              "Aug 2023",
              "Sep 2023",
              "Oct 2023",
              "Nov 2023",
              "Dec 2023",
            ],
            datasets: [
              {
                overallInflationRate: 2.5,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 3.0,
                  },
                  {
                    category: "Housing",
                    inflationRate: 1.8,
                  },
                  {
                    category: "Transportation",
                    inflationRate: 4.1,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 2.2,
                  },
                  {
                    category: "Education",
                    inflationRate: 2.9,
                  },
                ],
                borderColor: "rgba(255, 99, 132, 0.6)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
                label: "Inflation Rate per country",
                data: [],
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
                overallInflationRate: 2.4,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 2.8,
                  },
                  {
                    category: "Housing",
                    inflationRate: -2.1,
                  },
                  {
                    category: "Transportation",
                    inflationRate: 4.0,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 2.1,
                  },
                  {
                    category: "Education",
                    inflationRate: 3.0,
                  },
                  {
                    category: "Fashion",
                    inflationRate: -2.2,
                  },
                  {
                    category: "Entertainment",
                    inflationRate: 2.9,
                  },
                  {
                    category: "Real Estate",
                    inflationRate: 2.3,
                  },
                  {
                    category: "Vegetables",
                    inflationRate: -2.1,
                  },
                ],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                label: "Overall Inflation Rate",
                data: [],
              },
            ],
          },
        },
        Canada: {
          historical: {
            labels: [
              "Jan",
              "Feb",
              "Mar ",
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
                overallInflationRate: -2.5,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 3.0,
                  },
                  {
                    category: "Housing",
                    inflationRate: -1.8,
                  },
                  {
                    category: "Transportation",
                    inflationRate: 4.1,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 2.2,
                  },
                  {
                    category: "Education",
                    inflationRate: 5.9,
                  },
                ],
                borderColor: "rgba(255, 99, 132, 0.6)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                fill: true,
                label: "Inflation Rate per country",
                data: [],
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
                overallInflationRate: 2.4,
                categories: [
                  {
                    category: "Food",
                    inflationRate: -2.8,
                  },
                  {
                    category: "Housing",
                    inflationRate: 2.1,
                  },
                  {
                    category: "Transportation",
                    inflationRate: -4.0,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 2.7,
                  },
                  {
                    category: "Education",
                    inflationRate: 5.0,
                  },
                ],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                label: "Overall Inflation Rate",
                data: [],
              },
            ],
          },
        },
      },
    },
    MiddleEast: {
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
          overallInflationRate: 3.7,
          categories: [
            {
              category: "Food",
              inflationRate: 4.5,
            },
            {
              category: "Housing",
              inflationRate: 3.2,
            },
            {
              category: "Transportation",
              inflationRate: 5.0,
            },
            {
              category: "Healthcare",
              inflationRate: 2.9,
            },
            {
              category: "Education",
              inflationRate: 3.7,
            },
          ],
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          label: "Overall Inflation Rate",
          data: [],
        },
      ],
      countries: {
        UAE: {
          historical: {
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
                overallInflationRate: 3.8,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 4.4,
                  },
                  {
                    category: "Housing",
                    inflationRate: 2.8,
                  },
                  {
                    category: "Transportation",
                    inflationRate: 5.2,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 3.0,
                  },
                  {
                    category: "Education",
                    inflationRate: 3.6,
                  },
                ],
                borderColor: "rgba(153, 102, 255, 0.6)",
                backgroundColor: "rgba(153, 102, 255, 0.2)",
                fill: true,
                label: "Inflation Rate per country",
                data: [],
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
                overallInflationRate: 3.7,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 4.5,
                  },
                  {
                    category: "Housing",
                    inflationRate: 3.2,
                  },
                  {
                    category: "Transportation",
                    inflationRate: 5.0,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 2.9,
                  },
                  {
                    category: "Education",
                    inflationRate: 3.7,
                  },
                ],
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                label: "Overall Inflation Rate",
                data: [],
              },
            ],
          },
        },
      },
    },
    Europe: {
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
          overallInflationRate: 4.2,
          categories: [
            {
              category: "Food",
              inflationRate: 5.0,
            },
            {
              category: "Housing",
              inflationRate: 4.5,
            },
            {
              category: "Transportation",
              inflationRate: 4.8,
            },
            {
              category: "Healthcare",
              inflationRate: 3.2,
            },
            {
              category: "Education",
              inflationRate: 3.9,
            },
          ],
          borderColor: "rgba(255, 206, 86, 1)",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          label: "Overall Inflation Rate",
          data: [],
        },
      ],
      countries: {
        Poland: {
          historical: {
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
                overallInflationRate: 4.3,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 5.2,
                  },
                  {
                    category: "Housing",
                    inflationRate: 4.7,
                  },
                  {
                    category: "Transportation",
                    inflationRate: 4.6,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 3.4,
                  },
                  {
                    category: "Education",
                    inflationRate: 3.8,
                  },
                ],
                borderColor: "rgba(255, 206, 86, 0.6)",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                fill: true,
                label: "Inflation Rate per country",
                data: [],
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
                overallInflationRate: 4.2,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 5.0,
                  },
                  {
                    category: "Housing",
                    inflationRate: 4.5,
                  },
                  {
                    category: "Transportation",
                    inflationRate: 4.8,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 3.2,
                  },
                  {
                    category: "Education",
                    inflationRate: 3.9,
                  },
                ],
                borderColor: "rgba(255, 206, 86, 1)",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                label: "Overall Inflation Rate",
                data: [],
              },
            ],
          },
        },
      },
    },
    Africa: {
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
          overallInflationRate: -3.2,
          categories: [
            {
              category: "Food",
              inflationRate: -5.0,
            },
            {
              category: "Housing",
              inflationRate: 4.5,
            },
            {
              category: "Transportation",
              inflationRate: 2.8,
            },
            {
              category: "Healthcare",
              inflationRate: 4.2,
            },
            {
              category: "Education",
              inflationRate: 6.0,
            },
          ],
          borderColor: "rgba(255, 206, 86, 1)",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          label: "Overall Inflation Rate",
          data: [],
        },
      ],
      countries: {
        Ghana: {
          historical: {
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
                overallInflationRate: 1.3,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 5.2,
                  },
                  {
                    category: "Housing",
                    inflationRate: 4.7,
                  },
                  {
                    category: "Transportation",
                    inflationRate: -4.6,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: 3.5,
                  },
                  {
                    category: "Education",
                    inflationRate: 5.8,
                  },
                ],
                borderColor: "rgba(255, 206, 86, 0.6)",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                fill: true,
                label: "Inflation Rate per country",
                data: [],
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
                overallInflationRate: 2.2,
                categories: [
                  {
                    category: "Food",
                    inflationRate: 5.0,
                  },
                  {
                    category: "Housing",
                    inflationRate: 4.5,
                  },
                  {
                    category: "Transportation",
                    inflationRate: -4.8,
                  },
                  {
                    category: "Entertainment",
                    inflationRate: 2.9,
                  },
                  {
                    category: "Real Estate",
                    inflationRate: 2.3,
                  },
                  {
                    category: "Vegetables",
                    inflationRate: -2.1,
                  },
                  {
                    category: "Healthcare",
                    inflationRate: -3.2,
                  },
                  {
                    category: "Education",
                    inflationRate: 3.9,
                  },
                ],
                borderColor: "rgba(255, 206, 86, 1)",
                backgroundColor: "rgba(255, 206, 86, 0.2)",
                label: "Overall Inflation Rate",
                data: [],
              },
            ],
          },
        },
      },
    },
  },
};
