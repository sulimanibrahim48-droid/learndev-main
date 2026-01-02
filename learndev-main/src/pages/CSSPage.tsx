import { Palette } from "lucide-react";
import Layout from "@/components/Layout";
import TutorialPage from "@/components/TutorialPage";
import { cssTutorials } from "@/data/tutorials";

const CSSPage = () => {
  return (
    <Layout>
      <TutorialPage
        title="CSS Tutorials"
        description="Master styling and create beautiful user interfaces"
        icon={<Palette className="w-8 h-8 text-primary" />}
        tutorials={cssTutorials}
      />
    </Layout>
  );
};

export default CSSPage;
