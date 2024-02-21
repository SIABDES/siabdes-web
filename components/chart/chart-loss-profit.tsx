import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card, CardContent } from '../ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export const dataLabaRugi: ChartData<'bar', number[], string> = {
  labels: ['Pendapatan', 'Beban'],
  datasets: [
    {
      label: 'Beban',
      data: [0, 17700000],
      backgroundColor: 'rgb(53, 162, 235)',
    },
    {
      label: 'Pendapatan',
      data: [24122000, 0],
      backgroundColor: 'rgb(255, 99, 132)',
    },
  ],
};

export default function ChartLossProfit() {
  return (
    <Card>
      <p className="p-3">Laba/Rugi</p>
      <CardContent>
        <Bar data={dataLabaRugi} />
      </CardContent>
    </Card>
  );
}
