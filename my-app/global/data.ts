import { ADOBE, ADOBEXD, COINTSTACK, FIGMALOGO, LOCATION, SIDEBARMATCHES, SIDEBARMESSAGE, SIDEBARPEOPLE, SIDEBARVIEW } from "@/public";

// data.ts
export const jobData = {
    title: "Senior Product Designer",
    location: {
      place:"Delaware, USA",
      img:LOCATION,
    },
    salary: {
      val:"$300k-$400k",
      img:COINTSTACK,
    },
    status: "Open",
    postedDate: "2 days ago",
    skills: [{name:"Figma",img:FIGMALOGO}, {name:"Adobe Illustrator",img:ADOBE}, {
      name:"Adobe XD",img:ADOBEXD
    }],
    preferredLanguage: "English",
    jobType: "Full time",
    experience: "3+ Years of Experience",
    benefits: [
      "Health insurance",
      "Provident Fund",
    ],
    schedule: "Day shift",
    payTypes: [
      "Performance bonus",
      "Yearly bonus",
    ],
    workLocation: "In person",
    company: {
      name: "Atlassian",
      size: "1k - 2k Employees",
      type: "Private",
      industry: "Information Technology, Infrastructure",
      foundedIn: "2019",
      founders: ["Scott Farquhar", "Mike Cannon-Brookes"],
      funding:"Bootstrapped",
    },
    stats: {
      applicants:{
        stat:400,
        img:SIDEBARPEOPLE,
      },
      Matches:{
        stat:100,
        img:SIDEBARMATCHES,
      },
      messages: {
        stat:147,
        img:SIDEBARMESSAGE
      },
      views:{
        stat: 800,
        img:SIDEBARVIEW,
      },
    },
  };
  