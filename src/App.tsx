import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import JoinUsForm from "./components/JoinUsForm";
import MembershipForm from "./components/MembershipForm";
import AboutPage from "./components/AboutPage";
import MeetingsPage from "./components/MeetingsPage";
import ContactPage from "./components/ContactPage";
import ResourcesPage from "./components/ResourcesPage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<JoinUsForm />} />
        <Route path="/membership" element={<MembershipForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources/*" element={<ResourcesPage />} />
        <Route path="/events/*" element={<MeetingsPage />} />
        <Route path="/member/*" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
