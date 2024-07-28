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
      overallInflationRate: "2.5%", // Added this line
      categories: [
        { category: "Food", inflationRate: "2.4%" },
        { category: "Housing", inflationRate: "3.1%" },
        { category: "Transportation", inflationRate: "2.8%" },
        { category: "Healthcare", inflationRate: "3.3%" },
        { category: "Education", inflationRate: "2.7%" },
      ],
    },
    {
      country: "Canada",
      overallInflationRate: "2.4%", // Added this line
      categories: [
        { category: "Food", inflationRate: "2.1%" },
        { category: "Housing", inflationRate: "2.8%" },
        { category: "Transportation", inflationRate: "2.5%" },
        { category: "Healthcare", inflationRate: "3.0%" },
        { category: "Education", inflationRate: "2.6%" },
      ],
    },
    {
      country: "Mexico",
      overallInflationRate: "2.2%", // Added this line
      categories: [
        { category: "Food", inflationRate: "1.9%" },
        { category: "Housing", inflationRate: "2.6%" },
        { category: "Transportation", inflationRate: "2.3%" },
        { category: "Healthcare", inflationRate: "2.8%" },
        { category: "Education", inflationRate: "2.4%" },
      ],
    },
    {
      country: "Brazil",
      overallInflationRate: "2.1%", // Added this line
      categories: [
        { category: "Food", inflationRate: "1.7%" },
        { category: "Housing", inflationRate: "2.4%" },
        { category: "Transportation", inflationRate: "2.1%" },
        { category: "Healthcare", inflationRate: "2.6%" },
        { category: "Education", inflationRate: "2.2%" },
      ],
    },
    {
      country: "Argentina",
      overallInflationRate: "2.0%", // Added this line
      categories: [
        { category: "Food", inflationRate: "1.6%" },
        { category: "Housing", inflationRate: "2.3%" },
        { category: "Transportation", inflationRate: "2.0%" },
        { category: "Healthcare", inflationRate: "2.5%" },
        { category: "Education", inflationRate: "2.1%" },
      ],
    },
  ],
  Europe: [
    {
      country: "Germany",
      overallInflationRate: "2.3%", // Added this line
      categories: [
        { category: "Food", inflationRate: "2.2%" },
        { category: "Housing", inflationRate: "2.7%" },
        { category: "Transportation", inflationRate: "2.5%" },
        { category: "Healthcare", inflationRate: "2.8%" },
        { category: "Education", inflationRate: "2.4%" },
      ],
    },
    {
      country: "France",
      overallInflationRate: "2.2%", // Added this line
      categories: [
        { category: "Food", inflationRate: "2.0%" },
        { category: "Housing", inflationRate: "2.5%" },
        { category: "Transportation", inflationRate: "2.3%" },
        { category: "Healthcare", inflationRate: "2.7%" },
        { category: "Education", inflationRate: "2.3%" },
      ],
    },
    {
      country: "UK",
      overallInflationRate: "2.1%", // Added this line
      categories: [
        { category: "Food", inflationRate: "1.9%" },
        { category: "Housing", inflationRate: "2.4%" },
        { category: "Transportation", inflationRate: "2.2%" },
        { category: "Healthcare", inflationRate: "2.6%" },
        { category: "Education", inflationRate: "2.2%" },
      ],
    },
    {
      country: "Italy",
      overallInflationRate: "2.0%", // Added this line
      categories: [
        { category: "Food", inflationRate: "1.8%" },
        { category: "Housing", inflationRate: "2.3%" },
        { category: "Transportation", inflationRate: "2.1%" },
        { category: "Healthcare", inflationRate: "2.5%" },
        { category: "Education", inflationRate: "2.1%" },
      ],
    },
    {
      country: "Spain",
      overallInflationRate: "1.9%", // Added this line
      categories: [
        { category: "Food", inflationRate: "1.7%" },
        { category: "Housing", inflationRate: "2.2%" },
        { category: "Transportation", inflationRate: "2.0%" },
        { category: "Healthcare", inflationRate: "2.4%" },
        { category: "Education", inflationRate: "2.0%" },
      ],
    },
  ],
  Asia: [
    {
      country: "China",
      overallInflationRate: "3.5%", // Added this line
      categories: [
        { category: "Food", inflationRate: "3.4%" },
        { category: "Housing", inflationRate: "3.7%" },
        { category: "Transportation", inflationRate: "3.6%" },
        { category: "Healthcare", inflationRate: "3.8%" },
        { category: "Education", inflationRate: "3.5%" },
      ],
    },
    {
      country: "India",
      overallInflationRate: "3.2%", // Added this line
      categories: [
        { category: "Food", inflationRate: "3.1%" },
        { category: "Housing", inflationRate: "3.4%" },
        { category: "Transportation", inflationRate: "3.3%" },
        { category: "Healthcare", inflationRate: "3.5%" },
        { category: "Education", inflationRate: "3.2%" },
      ],
    },
    {
      country: "Japan",
      overallInflationRate: "3.0%", // Added this line
      categories: [
        { category: "Food", inflationRate: "2.9%" },
        { category: "Housing", inflationRate: "3.2%" },
        { category: "Transportation", inflationRate: "3.1%" },
        { category: "Healthcare", inflationRate: "3.3%" },
        { category: "Education", inflationRate: "3.0%" },
      ],
    },
    {
      country: "South Korea",
      overallInflationRate: "2.9%", // Added this line
      categories: [
        { category: "Food", inflationRate: "2.8%" },
        { category: "Housing", inflationRate: "3.1%" },
        { category: "Transportation", inflationRate: "3.0%" },
        { category: "Healthcare", inflationRate: "3.2%" },
        { category: "Education", inflationRate: "2.9%" },
      ],
    },
    {
      country: "Indonesia",
      overallInflationRate: "2.8%", // Added this line
      categories: [
        { category: "Food", inflationRate: "2.7%" },
        { category: "Housing", inflationRate: "3.0%" },
        { category: "Transportation", inflationRate: "2.9%" },
        { category: "Healthcare", inflationRate: "3.1%" },
        { category: "Education", inflationRate: "2.8%" },
      ],
    },
  ],
  Africa: [
    {
      country: "Nigeria",
      overallInflationRate: "4.5%", // Added this line
      categories: [
        { category: "Food", inflationRate: "4.4%" },
        { category: "Housing", inflationRate: "4.7%" },
        { category: "Transportation", inflationRate: "4.6%" },
        { category: "Healthcare", inflationRate: "4.8%" },
        { category: "Education", inflationRate: "4.5%" },
      ],
    },
    {
      country: "South Africa",
      overallInflationRate: "4.3%", // Added this line
      categories: [
        { category: "Food", inflationRate: "4.2%" },
        { category: "Housing", inflationRate: "4.5%" },
        { category: "Transportation", inflationRate: "4.4%" },
        { category: "Healthcare", inflationRate: "4.6%" },
        { category: "Education", inflationRate: "4.3%" },
      ],
    },
    {
      country: "Kenya",
      overallInflationRate: "4.2%", // Added this line
      categories: [
        { category: "Food", inflationRate: "4.1%" },
        { category: "Housing", inflationRate: "4.4%" },
        { category: "Transportation", inflationRate: "4.3%" },
        { category: "Healthcare", inflationRate: "4.5%" },
        { category: "Education", inflationRate: "4.2%" },
      ],
    },
    {
      country: "Egypt",
      overallInflationRate: "4.1%", // Added this line
      categories: [
        { category: "Food", inflationRate: "4.0%" },
        { category: "Housing", inflationRate: "4.3%" },
        { category: "Transportation", inflationRate: "4.2%" },
        { category: "Healthcare", inflationRate: "4.4%" },
        { category: "Education", inflationRate: "4.1%" },
      ],
    },
    {
      country: "Ethiopia",
      overallInflationRate: "4.0%", // Added this line
      categories: [
        { category: "Food", inflationRate: "3.9%" },
        { category: "Housing", inflationRate: "4.2%" },
        { category: "Transportation", inflationRate: "4.1%" },
        { category: "Healthcare", inflationRate: "4.3%" },
        { category: "Education", inflationRate: "4.0%" },
      ],
    },
  ],
  SouthAmerica: [
    {
      country: "Brazil",
      overallInflationRate: "3.8%",
      categories: [
        { category: "Food", inflationRate: "4.0" },
        { category: "Housing", inflationRate: "4.6" },
        { category: "Transportation", inflationRate: "3.2" },
      ],
    },
    {
      country: "Colombia",
      overallInflationRate: "3.7%",
      categories: [
        { category: "Food", inflationRate: "3.9" },
        { category: "Housing", inflationRate: "4.5" },
        { category: "Transportation", inflationRate: "3.1" },
      ],
    },
    {
      country: "Peru",
      overallInflationRate: "3.6%",
      categories: [
        { category: "Food", inflationRate: "3.8" },
        { category: "Housing", inflationRate: "4.4" },
        { category: "Transportation", inflationRate: "3.0" },
      ],
    },
  ],
  Australia: [
    {
      country: "Australia",
      overallInflationRate: "3.6%",
      categories: [
        { category: "Food", inflationRate: "2.4" },
        { category: "Housing", inflationRate: "3.0" },
        { category: "Transportation", inflationRate: "1.7" },
      ],
    },
    {
      country: "New Zealand",
      overallInflationRate: "2.5%",
      categories: [
        { category: "Food", inflationRate: "2.3" },
        { category: "Housing", inflationRate: "2.9" },
        { category: "Transportation", inflationRate: "1.6" },
      ],
    },
    {
      country: "Fiji",
      overallInflationRate: "5.4%",
      categories: [
        { category: "Food", inflationRate: "2.2" },
        { category: "Housing", inflationRate: "2.8" },
        { category: "Transportation", inflationRate: "1.5" },
      ],
    },
  ],
  Antarctica: [
    {
      country: "Paraguay",
      overallInflationRate: "-3.5%",
      categories: [
        { category: "Food", inflationRate: "1.0" },
        { category: "Housing", inflationRate: "1.5" },
        { category: "Transportation", inflationRate: "0.8" },
      ],
    },
    {
      country: "Chile",
      overallInflationRate: "1.4%",
      categories: [
        { category: "Food", inflationRate: "0.9" },
        { category: "Housing", inflationRate: "1.4" },
        { category: "Transportation", inflationRate: "0.7" },
      ],
    },
    {
      country: "Uruguay",
      overallInflationRate: "-2.3%",
      categories: [
        { category: "Food", inflationRate: "0.8" },
        { category: "Housing", inflationRate: "1.3" },
        { category: "Transportation", inflationRate: "0.6" },
      ],
    },
  ],
};
