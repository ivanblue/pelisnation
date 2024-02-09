import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@/pages/Layout';

import HomePage from '@/pages/Home';
import SeriesPage from '@/pages/Series';
import TrailersPage from '@/pages/Trailers';
import RankingsPage from '@/pages/Rankings';
import CommunityPage from '@/pages/Community';
import FaqPage from '@/pages/Faq';
import PrivacyPolicyPage from '@/pages/PrivacyPolicy';
import TermsConditionsPage from '@/pages/TermsConditions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/trailers" element={<TrailersPage />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicyPage />} />
          <Route path="/termsconditions" element={<TermsConditionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
