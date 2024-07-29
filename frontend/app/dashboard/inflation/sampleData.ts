export const inflationData = {
  historical: {
    NorthAmerica: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
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
    Europe: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
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
    Asia: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.0, 2.2, 2.4, 2.3, 2.5],
          borderColor: "rgba(75, 192, 192, 0.6)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    },
    Africa: {
      labels: ["Jan 2023", "Feb 2023", "Mar 2023", "Apr 2023", "May 2023"],
      datasets: [
        {
          label: "Inflation Rate",
          data: [2.3, 2.5, 2.7, 2.6, 2.8],
          borderColor: "rgba(255, 159, 64, 0.6)",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
          fill: true,
        },
      ],
    },
  },
  current: {
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
          label: "Current Year Inflation Rate",
          data: [1.8, 2.0, 2.2, 2.1, 2.3, 2.4, 2.3, 2.5, 2.6, 2.7, 2.8, 2.9],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
        },
      ],
    },
    Asia: {
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
          data: [3.1, 3.0, 2.9, 3.2, 3.3, 3.1, 3.0, 3.2, 3.4, 3.3, 3.2, 3.1],
          borderColor: "rgba(255, 159, 64, 1)",
          backgroundColor: "rgba(255, 159, 64, 0.2)",
        },
      ],
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
          label: "Current Year Inflation Rate",
          data: [4.2, 4.1, 4.3, 4.2, 4.4, 4.5, 4.3, 4.4, 4.6, 4.5, 4.4, 4.6],
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
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
          data: [3.5, 3.4, 3.3, 3.6, 3.7, 3.5, 3.4, 3.6, 3.8, 3.7, 3.6, 3.5],
          borderColor: "rgba(255, 206, 86, 1)",
          backgroundColor: "rgba(255, 206, 86, 0.2)",
        },
      ],
    },
    Australia: {
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
          data: [2.1, 2.2, 2.3, 2.4, 2.5, 2.3, 2.2, 2.4, 2.5, 2.3, 2.2, 2.1],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    },
    Antarctica: {
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
          data: [0.8, 0.7, 0.6, 0.9, 0.8, 0.7, 0.6, 0.8, 0.9, 0.8, 0.7, 0.6],
          borderColor: "rgba(201, 203, 207, 1)",
          backgroundColor: "rgba(201, 203, 207, 0.2)",
        },
      ],
    },
  },
  regional: {
    labels: [
      "NorthAmerica",
      "Europe",
      "Asia",
      "Africa",
      "SouthAmerica",
      "Australia",
    ],
    datasets: [
      {
        label: "Regional Inflation Rates",
        data: [2.5, 2.0, 3.1, 4.2], // Average rates or other relevant metrics
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
};

// Function to generate a random inflation rate between min and max
function generateRandomInflationRate(min: number, max: number) {
  return (Math.random() * (max - min) + min).toFixed(1) + "%";
}

// Updated categoryData with random inflation rates
export const categoryData: {
  [key: string]: {
    country: string;
    overallInflationRate: string; // Added this line
    categories: { category: string; inflationRate: string }[];
  }[];
} = {
  NorthAmerica: [
    {
      country: "USA",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Canada",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Mexico",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Brazil",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Argentina",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
  ],
  Europe: [
    {
      country: "Germany",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "France",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "UK",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Italy",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
    {
      country: "Spain",
      overallInflationRate: generateRandomInflationRate(2.0, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
      ],
    },
  ],
  Asia: [
    {
      country: "China",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "India",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "Japan",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
    {
      country: "South Korea",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
    {
      country: "Indonesia",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
  ],
  Africa: [
    {
      country: "Nigeria",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "South Africa",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "Kenya",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "Egypt",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
    {
      country: "Ethiopia",
      overallInflationRate: generateRandomInflationRate(4.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Healthcare",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
        {
          category: "Education",
          inflationRate: generateRandomInflationRate(4.0, 5.0),
        },
      ],
    },
  ],
  SouthAmerica: [
    {
      country: "Brazil",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "Colombia",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "Peru",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
  ],
  Australia: [
    {
      country: "Australia",
      overallInflationRate: generateRandomInflationRate(3.0, 4.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(3.0, 4.0),
        },
      ],
    },
    {
      country: "New Zealand",
      overallInflationRate: generateRandomInflationRate(2.5, 3.5),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(2.5, 3.5),
        },
      ],
    },
    {
      country: "Fiji",
      overallInflationRate: generateRandomInflationRate(5.0, 6.2),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(5.2, 6.4),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.0, -3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.0, 4.0),
        },
      ],
    },
  ],

  Antarctica: [
    {
      country: "Paraguay",
      overallInflationRate: generateRandomInflationRate(-1.0, 2.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(1.2, 2.1),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.0, 3.0),
        },
      ],
    },
    {
      country: "Chile",
      overallInflationRate: generateRandomInflationRate(-1.0, 2.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(1.3, 2.1),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(2.0, 3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.0, 3.0),
        },
      ],
    },
    {
      country: "Uruguay",
      overallInflationRate: generateRandomInflationRate(-1.0, 5.0),
      categories: [
        {
          category: "Food",
          inflationRate: generateRandomInflationRate(3.3, 2.1),
        },
        {
          category: "Housing",
          inflationRate: generateRandomInflationRate(7.0, 3.0),
        },
        {
          category: "Transportation",
          inflationRate: generateRandomInflationRate(1.2, 3.0),
        },
      ],
    },
  ],
};
