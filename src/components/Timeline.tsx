import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "MexicaNFT",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Sep-2024 - Present
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            As a Full Stack Developer at MexicaNFT, I work on creating and
            maintaining AI-powered web and mobile applications using modern
            tools like Next.js, React Native Expo, Tailwind CSS, Python,
            TypeScript, and GraphQL. I build fast and responsive websites and
            apps that work well on all devices. I use Tailwind CSS to design
            clean and user-friendly interfaces, and TypeScript helps me write
            better, more reliable code. I collaborate closely with design and
            product teams to ensure clean, maintainable code and intuitive,
            user-friendly applications.
          </div>
        </div>
      ),
    },
    {
      title: "Easework AI",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            May-2024 - Aug-2024
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            At Easework AI, I develop sophisticated user interfaces using React
            and Material-UI (MUI), leveraging a component-based architecture to
            create modular, scalable, and maintainable front-end applications.
            My role focuses on building dynamic, responsive layouts while
            ensuring seamless data integration through robust API connections. I
            am responsible for integrating and testing RESTful APIs, utilizing
            tools like Postman to rigorously validate endpoints and ensure
            reliable data exchange between the front-end and backend services.
            Although I do not create backend services, I work closely with
            FastAPI to populate data and enhance the interaction between our
            front-end systems and existing backend infrastructure. Additionally,
            I handle the occasional deployment of our applications on AWS EC2
            instances, ensuring they are hosted in scalable and secure
            environments. My work also includes developing data-driven
            applications using Streamlit, where I create interactive dashboards
            and visualizations to provide actionable insights for our clients.
          </div>
        </div>
      ),
    },
    {
      title: "The Trendy",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Oct-2021 - Dec-2023
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            Founded and operated an e-commerce store specializing in sneaker
            sales. Single-handedly conceptualized, designed, and developed the
            entire website on WordPress, seamlessly integrating Shiprocket for
            logistics efficiency and Stripe payment gateway for secure
            transactions. Hosted the site on Hostinger. Implemented various
            plugins to enhance website performance and user experience. Over two
            years, cultivated a thriving online presence, achieving an overall
            revenue of 80 lac plus. Effectively managed the complete web
            development lifecycle, consistently adapting to market trends and
            user feedback to optimize the site for peak performance.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
