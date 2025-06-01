import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { environment } from 'src/environments//environment';

@Component({
  selector: 'app-cpu-monitor',
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule],
  templateUrl: './cpu-monitor.component.html',
})
export class CpuMonitorComponent {
  ip = '';
  selectedPeriod = '24h';
  interval = 300;
  intervalOptions: number[] = [];
  isLoading: boolean = false; 

  cpuData: any[] = [];

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'CPU Usage (%)',
        borderColor: '#e74c3c',
        backgroundColor: 'transparent',
        pointBackgroundColor: '#e74c3c',
        pointRadius: 3,
        pointHoverRadius: 5,
        fill: false,
        tension: 0.4,
        borderWidth: 2
      }
    ]
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 13
          }
        }
      },
      tooltip: {
        mode: 'nearest',
        intersect: false,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#666',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 20
        },
        title: {
          display: true,
          text: 'Time',
          color: '#333',
          font: { weight: 'bold' }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        suggestedMax: 5,
        ticks: {
          color: '#666'
        },
        title: {
          display: true,
          text: 'Percentage',
          color: '#333',
          font: { weight: 'bold' }
        },
        grid: {
          color: '#eee'
        }
      }
    }
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.updateIntervalOptions();
  }

  fetchCpuData() {
  this.isLoading = true;

  const to = new Date();
  let from = new Date(to);

  switch (this.selectedPeriod) {
    case '1h':
      from.setHours(from.getHours() - 1);
      break;
    case '6h':
      from.setHours(from.getHours() - 6);
      break;
    case '24h':
      from.setDate(from.getDate() - 1);
      break;
    case '7d':
      from.setDate(from.getDate() - 7);
      break;
    default:
      from.setDate(from.getDate() - 1);
  }

  const secondsRange = (to.getTime() - from.getTime()) / 1000;
  const estimatedPoints = secondsRange / this.interval;

  if (estimatedPoints > 1500) {
    alert('Too many data points. Try increasing the interval or shortening the time range.');
    this.isLoading = false;
    return;
  }

  const fromIso = from.toISOString();
  const toIso = to.toISOString();
  const url = `${environment.apiUrl}/cpu-usage?ip=${this.ip}&from=${fromIso}&to=${toIso}&interval=${this.interval}`;

  this.http.get<any[]>(url).subscribe({
    next: (data) => {
      this.cpuData = data;
      this.updateChart(data);
      this.isLoading = false;
    },
    error: (err) => {
      console.error('Error fetching CPU data:', err);
      this.isLoading = false;
    }
  });
}

  updateChart(data: any[]) {
  let labelFormat: Intl.DateTimeFormatOptions;

  switch (this.selectedPeriod) {
    case '7d':
      labelFormat = { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      break;
    default:
      labelFormat = { hour: '2-digit', minute: '2-digit' };
  }

  const labels = data.map(item =>
    new Date(item.timestamp).toLocaleString([], labelFormat)
  );

  const values = data.map(item => item.value * 100);

  this.lineChartData = {
    labels,
    datasets: [
      {
        data: values,
        label: 'CPU Usage (%)',
        fill: false,
        tension: 0.3,
        pointRadius: 2,
        borderColor: '#e74c3c',
        backgroundColor: 'transparent',
        borderWidth: 2
      }
    ]
  };
}

  updateIntervalOptions() {
    switch (this.selectedPeriod) {
      case '1h':
        this.intervalOptions = [300, 600,900];
        break;
      case '6h':
        this.intervalOptions = [600, 900, 1800];
        break;
      case '24h':
        this.intervalOptions = [900,1800, 3600];
        break;
      case '7d':
        this.intervalOptions = [1800,3600, 21600];
        break;
      default:
        this.intervalOptions = [600];
    }

    this.interval = this.intervalOptions[0];
  }

  getIntervalLabel(value: number): string {
    const map: { [key: number]: string } = {
      300: '5 minutes',
      600: '10 minutes',
      900: '15 minutes',
      1800: '30 minutes',
      3600: '1 hour',
      21600: '6 hours'
    };
    return map[value] || `${value} seconds`;
  }
}
