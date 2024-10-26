import React from 'react';

function Landingpage() {
  const grafanaURL =
    'https://krishnafauj02.grafana.net/public-dashboards/9942ae56688b4a73b89370d6040bb2d6';

  return (
    <div className="w-full h-screen bg-zinc-900 text-white font-[Founders_Grotesk] p-10">
      {/* First Section (1/4 height) */}
      <div className="flex flex-1/4 justify-between mb-10">
       <iframe src="https://krishnafauj02.grafana.net/d-solo/ce1vde1ptw7pcb/luminous-dashboard?from=1729843698289&to=1729865298290&timezone=browser&showCategory=Panel%20options&orgId=1&panelId=5&__feature.dashboardSceneSolo" width="450" height="200" frameborder="0"></iframe>
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '200px' }}
          title="Grafana Panel 2"
        />
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '200px' }}
          title="Grafana Panel 3"
        />
      </div>

      {/* Middle Section (1/2 height) */}
      <div className="flex flex-1/2 justify-between mb-10">
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '300px' }}
          title="Grafana Panel 4"
        />
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '300px' }}
          title="Grafana Panel 5"
        />
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '300px' }}
          title="Grafana Panel 6"
        />
      </div>

      {/* Third Section (1/4 height) */}
      <div className="flex flex-1/4 justify-between">
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '200px' }}
          title="Grafana Panel 7"
        />
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '200px' }}
          title="Grafana Panel 8"
        />
        <iframe
          src={grafanaURL}
          className="flex-1 mx-2 border border-zinc-200"
          style={{ height: '100%', minHeight: '200px' }}
          title="Grafana Panel 9"
        />
      </div>
    </div>
  );
}

export default Landingpage;
