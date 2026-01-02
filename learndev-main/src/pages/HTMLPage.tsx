import { Code2 } from "lucide-react";
import Layout from "@/components/Layout";
import TutorialPage from "@/components/TutorialPage";
import { htmlTutorials } from "@/data/tutorials";

const HTMLPage = () => {
  return (
    <Layout>
      <TutorialPage
        title="HTML Tutorials"
        description="Learn the fundamentals of HTML - the building blocks of the web"
        icon={<Code2 className="w-8 h-8 text-primary" />}
        tutorials={htmlTutorials}
      />
    </Layout>
  );
};

export default HTMLPage;
