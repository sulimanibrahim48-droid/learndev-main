import { Server } from "lucide-react";
import Layout from "@/components/Layout";
import TutorialPage from "@/components/TutorialPage";
import { pythonTutorials } from "@/data/tutorials";

const PythonPage = () => {
  return (
    <Layout>
      <TutorialPage
        title="Python Tutorials"
        description="Learn the most versatile programming language for backend and data science"
        icon={<Server className="w-8 h-8 text-primary" />}
        tutorials={pythonTutorials}
      />
    </Layout>
  );
};

export default PythonPage;
