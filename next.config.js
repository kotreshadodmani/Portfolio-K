/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Hi, I'm Kotresha Dodmani 👋</h1>
        <p className="text-lg text-gray-400">DevOps Engineer | Cloud Architect | Kubernetes Enthusiast</p>
      </header>
      
      {/* Skills Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <p className="text-gray-400 mt-2">Docker | Kubernetes | Terraform | AWS | CI/CD | Python | Bash</p>
      </section>
      
      {/* Projects Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">Python on AWS Code Pipline</h3>
            <p className="text-gray-400">This project demonstrates a fully automated CI/CD pipeline using AWS CodePipeline, CodeBuild, and CodeDeploy to deploy a web application. The pipeline integrates with GitHub for version control, runs tests, builds the application</p>
            <a href="#" className="text-blue-400">https://github.com/kotreshadodmani/aws-code-pipline.git</a>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">2-Tier Application Deployment on AWS</h3>
            <p className="text-gray-400">This project demonstrates the deployment of a 2-Tier Web Application on AWS using best practices for scalability, security, and automation. The application consists of a frontend for user interaction and a backend for business logic, both deployed using AWS services</p>
            <a href="#" className="text-blue-400">https://github.com/kotreshadodmani/Jenkins-Sonarqube-Docker.git</a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">Let's Connect</h2>
        <p className="text-gray-400">Email: Kotreshabca@gmail.com</p>
        <p className="text-gray-400">LinkedIn: https://www.linkedin.com/in/kotresha-d-b0760126a/</p>
      </section>
    </div>
  );
}
