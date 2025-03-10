import React from "react";
import { useNavigate } from "react-router-dom";
import { Pie, Line, Bar } from "react-chartjs-2";
import styles from "./PersonalAttendance.module.css";
import { 
  Chart as ChartJS, ArcElement, Tooltip, Legend, 
  CategoryScale, LinearScale, PointElement, LineElement, BarElement 
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const PersonalAttendance = () => {
  const navigate = useNavigate();

  // Pie Chart Data (Subjects PersonalAttendance)
  const pieData = {
    labels: ["LAPT", "MS", "DMA", "CNS", "CD"],
    datasets: [
      {
        data: [5, 35, 35, 10, 15], 
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
      },
    ], 
  };

  // Line Chart Data (PersonalAttendance Over Days)
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Attendance",
        data: [20, 85, 58, 90, 88],
        fill: false,
        borderColor: "#36a2eb",
        tension: 0.2,
      },
    ],
  };

  // Horizontal Bar Chart (Classes Attended Late)
  const barData = {
    labels: ["LAPT", "MS", "DMA", "CNS", "CD"],
    datasets: [
      {
        label: "Classes Attended Late",
        data: [15, 9, 17, 12, 10], 
        backgroundColor: ["#FF5733", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  // Larger Clone of the Above Bar Chart
  const largeBarData = {
    labels: ["Suryansh", "Saurav", "Aman", "Prince", "Satyam"],
    datasets: [
      {
        label: "Classes Attended Late (Expanded)",
        data: [20, 5, 7, 6, 2],
        backgroundColor: ["#FF5733", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  return (
    <div className={styles.container}>
      {/* Dashboard Button */}
      <button onClick={() => navigate("/dashboard")} className={styles.dashboardButton}>
        ← Dashboard
      </button>

      <div className={styles.card}>
        <h3>Personal Attendance Breakdown</h3>
        <Pie data={pieData} />
      </div>

      <div className={styles.card}>
        <h3>Personal Attendance Trend</h3>
        <Line data={lineData} />
        <h3>Late Personal Attendance</h3>
        <Bar data={barData} options={{ indexAxis: "y" }} />
      </div>

      <div className={styles.largeCard}>
        <h3>Attendance Leaderboard</h3>
        <Bar data={largeBarData} options={{ indexAxis: "y" }} />
      </div>
    </div>
  );
};

export default PersonalAttendance;
