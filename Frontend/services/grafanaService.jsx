// src/services/grafanaService.js
import axios from 'axios';

const GRAFANA_URL = 'https://krishnafauj02.grafana.net/api'; // Replace with your Grafana URL
const API_KEY = 'your_api_key'; // Replace with your API Key

const grafanaClient = axios.create({
  baseURL: GRAFANA_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export const getDashboard = async (dashboardId) => {
  try {
    const response = await grafanaClient.get(`/dashboards/uid/${dashboardId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching dashboard:', error);
    throw error;
  }
};
