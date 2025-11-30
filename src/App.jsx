import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import HeroCard from './components/HeroCard';
import StatsCard from './components/StatsCard';
import StatusCard from './components/StatusCard';
import ApiEndpointCard from './components/ApiEndpointCard';
import QuickGuideCard from './components/QuickGuideCard';
import ModelList from './components/ModelList';
import FAQSection from './components/FAQSection';
import Toast from './components/Toast';
import GuideModal from './components/GuideModal';

function App() {
  const [modelCount, setModelCount] = useState(0);

  return (
    <AppProvider>
      <div className="p-4 md:p-8 pt-[100px] md:pt-[100px]">
        {/* Main Grid Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {/* Hero Card */}
          <HeroCard />

          {/* Stats Card */}
          <StatsCard modelCount={modelCount} />

          {/* Status Card */}
          <StatusCard />

          {/* API Endpoint Card */}
          <ApiEndpointCard />

          {/* Quick Guide Card */}
          <QuickGuideCard />

          {/* Model List */}
          <ModelList onModelCountChange={setModelCount} />

          {/* FAQ Section */}
          <FAQSection />
        </div>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto mt-8 text-center text-gray-400 dark:text-gray-600 text-sm pb-8">
          <p>&copy; 2025 慧智AI. 专业的 Claude API 服务商.</p>
        </footer>

        {/* Global Components */}
        <Toast />
        <GuideModal />
      </div>
    </AppProvider>
  );
}

export default App;
