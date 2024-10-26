import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', height: '90vh' }}> {/* Use a viewport height for the main container */}
      {/* First Part: 25-35-40 Ratio */}
      <div style={{ display: 'flex', width: '100%', height: '45%' }}>
        <div style={{ flex: '50%', border: '1px solid #ccc', padding: '10px' }}>
          <iframe src="http://localhost:3000/d-solo/ae1ylquoka5tsf/consumption?from=1719804999786&to=1720197364335&timezone=browser&refresh=5s&orgId=1&panelId=6&__feature.dashboardSceneSolo" width="700" height="350" frameborder="0"></iframe>
        </div>
        <div style={{ flex: '35%', border: '1px solid #ccc', padding: '10px' }}>
          <iframe src="http://localhost:3000/d-solo/ae1ylquoka5tsf/consumption?from=1719804999786&to=1720197364335&timezone=browser&refresh=5s&orgId=1&panelId=2&__feature.dashboardSceneSolo" width="450" height="350" frameborder="0"></iframe>
        </div>
        <div style={{ flex: '15%', border: '1px solid #ccc', padding: '10px' }}>
          <iframe src="http://localhost:3000/d-solo/ae1ylquoka5tsf/consumption?from=1719804999786&to=1720197364335&timezone=browser&refresh=5s&orgId=1&panelId=3&__feature.dashboardSceneSolo" width="450" height="350" frameborder="0"></iframe>
        </div>
      </div>

      {/* Second Part: 35-65 Ratio */}
      <div style={{ display: 'flex', width: '100%', marginTop: '20px', height: '45%' }}>
        <div style={{ flex: '15%', border: '1px solid #ccc', padding: '10px' }}>
          <iframe src="http://localhost:3000/d-solo/ae1ylquoka5tsf/consumption?from=1719804999786&to=1720197364335&timezone=browser&refresh=5s&orgId=1&panelId=5&__feature.dashboardSceneSolo" width="450" height="350" frameborder="0"></iframe>
        </div>
        <div style={{ flex: '35%', border: '1px solid #ccc', padding: '10px' }}>
          <iframe src="http://localhost:3000/d-solo/ae1ylquoka5tsf/consumption?from=1719804999786&to=1720197364335&timezone=browser&refresh=5s&orgId=1&panelId=4&__feature.dashboardSceneSolo" width="500" height="350" frameborder="0"></iframe>
        </div>
        <div style={{ flex: '50%', border: '1px solid #ccc', padding: '10px' }}>
          <iframe src="http://localhost:3000/d-solo/ae1ylquoka5tsf/consumption?from=1719804999786&to=1720197364335&timezone=browser&refresh=5s&orgId=1&panelId=1&__feature.dashboardSceneSolo" width="680" height="350" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
