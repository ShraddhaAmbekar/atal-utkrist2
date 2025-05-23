import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StatSection.css'; // Custom styles (defined below)

const stats = [
  { value: '20', label: 'Teaching Staff' },
  { value: '5', label: 'Support Staff' },
  { value: '180', label: 'Total Number of Students' },
];

const StatSection = () => {
  return (
    <section className="stat-section py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-4">
              <div className="stat-box p-4 shadow rounded-4 h-100">
                <h3 className="stat-value text-primary fw-bold display-5 mb-2">{stat.value}</h3>
                <p className="stat-label fw-semibold text-dark">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
