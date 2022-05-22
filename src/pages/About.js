import React from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

function About() {
  const features = [
    {
      name: "Shorten URLs",
      description:
        "User can shorten the long URL in single click & copied to clip-board by click to the clipboard icon after he/she use shorten function.",
      icon: GlobeAltIcon,
    },
    {
      name: "Recently shortened URLs",
      description:
        "Can view & navigate to the recently created/shortened URLs by clicking on the buttons chips on the main page.",
      icon: ScaleIcon,
    },
    {
      name: "Drill-down all the shortened URLs",
      description:
        "Can drill-down all the URLs by clicking on the Statistics menu on the page header.",
      icon: LightningBoltIcon,
    },
    {
      name: "Clicks counting available",
      description:
        "Full statistics including Clicks counting available. User can view the full statistics by clicking on the Show Statistics links on Actions column in the Statistics page.",
      icon: AnnotationIcon,
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-amber-500 font-semibold tracking-wide uppercase">
            Swftbox URL Shortner
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A best way to shortened the longest URLs.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This project has designed & developed by{" "}
            <a
              className="text-amber-500 font-semibold tracking-tight"
              href="https://github.com/shiyad"
            >
              Shiyad Ismail
            </a>{" "}
            for the test request purposes from Swftbox. This system has
            developed using these technologies such as ReactJS, NodeJs, Express,
            TypeScript, ES6, MongoDB etc. The following libraries used to
            develop this system the libraries are @react-router-dom,
            @body-parser, @cors, @mongoose, @shortid etc. The following
            mentioned feautures are available in this system:
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default About;
