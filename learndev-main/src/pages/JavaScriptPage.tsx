import { Zap } from "lucide-react";
import Layout from "@/components/Layout";
import TutorialPage from "@/components/TutorialPage";
import { javascriptTutorials } from "@/data/tutorials";

const JavaScriptPage = () => {
  return (
    <Layout>
      <TutorialPage
        title="JavaScript Tutorials"
        description="Add interactivity and dynamic features to your websites"
        icon={<Zap className="w-8 h-8 text-primary" />}
        tutorials={javascriptTutorials}
      />
    </Layout>
  );
};

export default JavaScriptPage;
