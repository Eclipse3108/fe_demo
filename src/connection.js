import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Đổi URL này thành URL Backend của bạn
  timeout: 10000, // Timeout sau 10 giây
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
