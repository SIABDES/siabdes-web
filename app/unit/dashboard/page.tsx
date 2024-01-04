import Sidebar from '@/components/sidebar/sidebar';
import Header from '@/components/header/header-dashboard';
import Layout from '@/components/layout/layout';
import DashboardChard01 from '@/components/pages/dashboard/dashboard-chard-01';
import DashboardChard02 from '@/components/pages/dashboard/dashboard-chard-02';
import DashboardChard03 from '@/components/pages/dashboard/dashboard-chard-03';

export default function Dashboard() {
  return (
    <Layout>
      <section>
        <header>
          <h1 className="text-2xl font-bold mb-4 text-left underline">
            RINGKASAN BISNIS - UNIT JASA WISATA
          </h1>
        </header>

        <section className="grid grid-cols-12 gap-6">
          <DashboardChard01 />
          <DashboardChard02 />
          <DashboardChard03 />
        </section>
      </section>
    </Layout>
  );
}