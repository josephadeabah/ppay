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
  },
  regional: {
    labels: ["NorthAmerica", "Europe", "Asia", "Africa"],
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
    categories: { category: string; inflationRate: string }[];
  }[];
} = {
  NorthAmerica: [
    {
      country: "USA",
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
      categories: [
        { category: "Food", inflationRate: "1.5%" },
        { category: "Housing", inflationRate: "2.2%" },
        { category: "Transportation", inflationRate: "2.0%" },
        { category: "Healthcare", inflationRate: "2.4%" },
        { category: "Education", inflationRate: "2.0%" },
      ],
    },
    {
      country: "Colombia",
      categories: [
        { category: "Food", inflationRate: "1.3%" },
        { category: "Housing", inflationRate: "2.0%" },
        { category: "Transportation", inflationRate: "1.8%" },
        { category: "Healthcare", inflationRate: "2.2%" },
        { category: "Education", inflationRate: "1.9%" },
      ],
    },
    {
      country: "Peru",
      categories: [
        { category: "Food", inflationRate: "1.1%" },
        { category: "Housing", inflationRate: "1.8%" },
        { category: "Transportation", inflationRate: "1.6%" },
        { category: "Healthcare", inflationRate: "1.9%" },
        { category: "Education", inflationRate: "1.7%" },
      ],
    },
  ],
  Europe: [
    {
      country: "Germany",
      categories: [
        { category: "Food", inflationRate: "2.1%" },
        { category: "Housing", inflationRate: "2.8%" },
        { category: "Transportation", inflationRate: "2.5%" },
        { category: "Healthcare", inflationRate: "3.0%" },
        { category: "Education", inflationRate: "2.6%" },
      ],
    },
    {
      country: "France",
      categories: [
        { category: "Food", inflationRate: "1.9%" },
        { category: "Housing", inflationRate: "2.6%" },
        { category: "Transportation", inflationRate: "2.3%" },
        { category: "Healthcare", inflationRate: "2.8%" },
        { category: "Education", inflationRate: "2.4%" },
      ],
    },
    {
      country: "UK",
      categories: [
        { category: "Food", inflationRate: "2.0%" },
        { category: "Housing", inflationRate: "2.7%" },
        { category: "Transportation", inflationRate: "2.4%" },
        { category: "Healthcare", inflationRate: "3.2%" },
        { category: "Education", inflationRate: "2.6%" },
      ],
    },
    {
      country: "Italy",
      categories: [
        { category: "Food", inflationRate: "2.2%" },
        { category: "Housing", inflationRate: "2.9%" },
        { category: "Transportation", inflationRate: "2.6%" },
        { category: "Healthcare", inflationRate: "3.4%" },
        { category: "Education", inflationRate: "2.8%" },
      ],
    },
    {
      country: "Russia",
      categories: [
        { category: "Food", inflationRate: "2.4%" },
        { category: "Housing", inflationRate: "3.1%" },
        { category: "Transportation", inflationRate: "2.8%" },
        { category: "Healthcare", inflationRate: "3.6%" },
        { category: "Education", inflationRate: "3.0%" },
      ],
    },
    {
      country: "Spain",
      categories: [
        { category: "Food", inflationRate: "2.3%" },
        { category: "Housing", inflationRate: "3.0%" },
        { category: "Transportation", inflationRate: "2.7%" },
        { category: "Healthcare", inflationRate: "3.5%" },
        { category: "Education", inflationRate: "2.9%" },
      ],
    },
    {
      country: "Portugal",
      categories: [
        { category: "Food", inflationRate: "2.4%" },
        { category: "Housing", inflationRate: "3.1%" },
        { category: "Transportation", inflationRate: "2.8%" },
        { category: "Healthcare", inflationRate: "3.6%" },
        { category: "Education", inflationRate: "3.0%" },
      ],
    },
  ],
  Asia: [
    {
      country: "China",
      categories: [
        { category: "Food", inflationRate: "1.8%" },
        { category: "Housing", inflationRate: "2.5%" },
        { category: "Transportation", inflationRate: "2.2%" },
        { category: "Healthcare", inflationRate: "3.0%" },
        { category: "Education", inflationRate: "2.4%" },
      ],
    },
    {
      country: "India",
      categories: [
        { category: "Food", inflationRate: "2.0%" },
        { category: "Housing", inflationRate: "2.7%" },
        { category: "Transportation", inflationRate: "2.4%" },
        { category: "Healthcare", inflationRate: "3.2%" },
        { category: "Education", inflationRate: "2.6%" },
      ],
    },
    {
      country: "Japan",
      categories: [
        { category: "Food", inflationRate: "2.2%" },
        { category: "Housing", inflationRate: "2.9%" },
        { category: "Transportation", inflationRate: "2.6%" },
        { category: "Healthcare", inflationRate: "3.4%" },
        { category: "Education", inflationRate: "2.8%" },
      ],
    },
    {
      country: "Korea",
      categories: [
        { category: "Food", inflationRate: "2.3%" },
        { category: "Housing", inflationRate: "3.0%" },
        { category: "Transportation", inflationRate: "2.7%" },
        { category: "Healthcare", inflationRate: "3.5%" },
        { category: "Education", inflationRate: "2.9%" },
      ],
    },
  ],
  Africa: [
    {
      country: "Nigeria",
      categories: [
        { category: "Food", inflationRate: "2.5%" },
        { category: "Housing", inflationRate: "3.2%" },
        { category: "Transportation", inflationRate: "2.6%" },
        { category: "Healthcare", inflationRate: "3.8%" },
        { category: "Education", inflationRate: "2.7%" },
      ],
    },
    {
      country: "South Africa",
      categories: [
        { category: "Food", inflationRate: "2.3%" },
        { category: "Housing", inflationRate: "3.0%" },
        { category: "Transportation", inflationRate: "2.4%" },
        { category: "Healthcare", inflationRate: "3.5%" },
        { category: "Education", inflationRate: "2.5%" },
      ],
    },
    {
      country: "Ghana",
      categories: [
        { category: "Food", inflationRate: "2.4" },
        { category: "Housing", inflationRate: "1.5" },
        { category: "Transportation", inflationRate: "2.6" },
        { category: "Healthcare", inflationRate: "3.8" },
        { category: "Education", inflationRate: "2.7" },
      ],
    },
    {
      country: "Ethiopia",
      categories: [
        { category: "Food", inflationRate: "2.4" },
        { category: "Housing", inflationRate: "1.5" },
        { category: "Transportation", inflationRate: "2.6" },
        { category: "Healthcare", inflationRate: "3.8" },
        { category: "Education", inflationRate: "2.7" },
      ],
    },
    {
      country: "Kenya",
      categories: [
        { category: "Food", inflationRate: "2.4" },
        { category: "Housing", inflationRate: "1.5" },
        { category: "Transportation", inflationRate: "2.6" },
        { category: "Healthcare", inflationRate: "3.8" },
        { category: "Education", inflationRate: "2.7" },
      ],
    },
  ],
};
