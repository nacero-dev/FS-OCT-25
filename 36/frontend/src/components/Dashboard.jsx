import { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/dashboard`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          window.location.href = '/login';
        } else {
          response.json().then(data => {
            setData(data);
          });
        }
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
};

export default Dashboard;
