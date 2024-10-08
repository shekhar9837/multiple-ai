import Image from "next/image";
import React from "react";
import { Check } from "lucide-react";

const HomePageFeatures = () => {
  const contentTypes = [
    {
      name: "Blog Title Wizard",
      title: "Generate Eye-Catching Blog Titles",
      description: [
        "Unleash your creativity with our Blog Title Wizard!",
        "Effortlessly generate captivating blog titles that grab attention and are primed to go viral.",
        "Create catchy titles in any language, tailored to your audience.",
        "Craft irresistible headlines that readers can't resist, ensuring your content stands out in a crowded digital landscape!",
      ],
    },
    {
      name: "Your Personal Title Generator",
      title: "Create Catchy Titles Effortlessly",
      description: [
        "Say goodbye to writer's block!",
        "Your Personal Title Generator makes it simple to create catchy titles for your blog in any language.",
        "With just a few clicks, you can access a treasure trove of title options that resonate with your readers.",
        "Boost your chances of engagement and shares across social media platforms!",
      ],
    },
    {
      name: "Viral Title Creator",
      title: "Craft Irresistible Blog Titles",
      description: [
        "Transform your blog with our Viral Title Creator!",
        "Design titles that are not only catchy but also optimized for virality.",
        "This tool helps you tap into trending topics and keywords.",
        "Ensure your blog posts attract clicks and keep readers coming back for more.",
        "Elevate your content strategy and watch your audience grow!",
      ],
    },
  ];

  return (
    <div className="flex justify-center items-center w-full mx-auto px-4 py-8 ">
      <div className="w-full max-w-7xl ">
        {contentTypes.map((item, idx) => (
          <div
            key={item.title}
            className={`flex flex-col-reverse md:flex-row items-center justify-between md:p-8 p-4 mb-10  ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text section */}
            <div className="w-full md:w-1/2 md:p-8  ">
              <h5 className="text-1xl font-light tracking-wider uppercase text-start md:text-left my-4">
                {item.name}
              </h5>
              <h3 className="text-3xl font-light tracking-wider text-green-500 text-start md:text-left mb-4">
                {item.title}
              </h3>
              <ul className="text-md text-gray-700 dark:text-white list-none tracking-widest">
                {item.description.map((desc, index) => (
                  <li key={index} className="flex items-start py-2">
                    {/* Ensuring consistent size and spacing for the icon */}
                    <Check className="text-blue-500 w-5 h-5 flex-shrink-0 md:mx-4 mx-2 bg-green-100 rounded-full p-1" />
                    <span className="">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image section */}
            <div className="w-full md:w-1/2 flex justify-start md:justify-center ">
              <Image
                src="/assets/features.jpeg"
                width={500}
                height={500}
                alt="feature illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageFeatures;
