
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import CareTeamCard from "@/components/dashboard/CareTeamCard";
import ExploreMoreSection from "@/components/dashboard/ExploreMoreSection";

const Index = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Welcome!</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <WelcomeBanner />
          <ExploreMoreSection />
        </div>
        <div>
          <CareTeamCard />
        </div>
      </div>
    </div>
  );
};

export default Index;
