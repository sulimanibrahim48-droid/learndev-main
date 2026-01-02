import { Cloud } from "lucide-react";
import Layout from "@/components/Layout";
import TutorialPage from "@/components/TutorialPage";
import { az104Tutorials } from "@/data/tutorials";

const AZ104Page = () => {
  return (
    <Layout>
      <TutorialPage
        title="AZ-104 Tutorials"
        description="Master Azure Administration and pass the certification exam"
        icon={<Cloud className="w-8 h-8 text-primary" />}
        tutorials={az104Tutorials}
      />
    </Layout>
  );
};

export default AZ104Page;
