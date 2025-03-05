"use client";  // This marks the component to be a client-side component in Next.js

import React from "react";
import dynamic from "next/dynamic";

// Achievements data
const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

// Custom component to display numbers without animation
const StaticNumber = ({ value, postfix, prefix, metric }) => {
  return (
    <div className="flex flex-row">
      {prefix}
      <span className="text-white text-4xl font-bold">{value}</span>
      {postfix}
    </div>
  );
};

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {/* Loop through the achievements and render each with a unique "key" */}
        {achievementsList.map((achievement, index) => (
          <div
            key={`${achievement.metric}-${index}`} // Unique key for each item in the list
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold">
              <StaticNumber
                value={achievement.value}
                prefix={achievement.prefix}
                postfix={achievement.postfix}
                metric={achievement.metric}
              />
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;