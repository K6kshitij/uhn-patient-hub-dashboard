
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import CareTeamCard from "@/components/dashboard/CareTeamCard";
import ExploreMoreSection from "@/components/dashboard/ExploreMoreSection";

const Index = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/30 inline-block">
        Welcome!
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
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
