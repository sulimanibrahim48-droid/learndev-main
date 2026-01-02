import { Cloud } from "lucide-react";
import Layout from "@/components/Layout";
import TutorialPage from "@/components/TutorialPage";
import { az900Tutorials } from "@/data/tutorials";

const AZ900Page = () => {
  return (
    <Layout>
      <TutorialPage
        title="AZ-900 Tutorials"
        description="Prepare for Azure Fundamentals certification exam"
        icon={<Cloud className="w-8 h-8 text-primary" />}
        tutorials={az900Tutorials}
      />
    </Layout>
  );
};

export default AZ900Page;
