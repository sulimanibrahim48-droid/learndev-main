import { Server } from "lucide-react";
import Layout from "@/components/Layout";
import TutorialPage from "@/components/TutorialPage";
import { djangoTutorials } from "@/data/tutorials";

const DjangoPage = () => {
  return (
    <Layout>
      <TutorialPage
        title="Django Tutorials"
        description="Build powerful web applications with Python's most popular framework"
        icon={<Server className="w-8 h-8 text-primary" />}
        tutorials={djangoTutorials}
      />
    </Layout>
  );
};

export default DjangoPage;
