import React, { useState } from "react";

function Jobs() {
  const [jobList, setJobList] = useState([
    {
      employer: "Loomis Armored",
      title: "Compliance Auditor (Internal)",
      location: {
        city: "Charlotte",
        state: "NC",
      },
      dates: {
        start: "April 2018",
        end: "Present",
      },
      duties: [
        {
          duty:
            "Auditing independent departments to ensure compliance with corporate and customer guidelines and reporting audit findings to branch and department managers for resolution",
        },
        {
          duty:
            "Assisting in matters requiring experienced troubleshooting skills and problem solving skills",
        },
        {
          duty:
            "Researching and implementing changes to policy and procedure to ensure compliance",
        },
        {
          duty:
            "Creating audit programs, performance spreadsheets, audit reports and proposed changes for errors noted",
        },
        {
          duty:
            "Developing training materials, support documentation, including job aids that support process/functional communication and learning",
        },
        {
          duty:
            "Maintaining maintenance documentation of fleet vehicles and heavy equipment",
        },
        {
          duty:
            "Tracking, ordering and distribution of facility office and operational supplies for all departments",
        },
      ],
    },
    {
      employer: "Kelly Services",
      title: "Tier I Tech Support (Temp)",
      location: {
        city: "Charlotte",
        state: "NC",
      },
      dates: {
        start: "December 2017",
        end: "February 2018",
      },
      duties: [
        {
          duty:
            "Created support tickets with software and hardware issues, evaluated, determined root cause, collaborated with internal technical support to ensure 100% problem resolution",
        },
        {
          duty:
            "Interacting with customers in response to inquiries, concerns, and requests about products or services",
        },
        {
          duty:
            "Gathered customer/product information and determine the issue by analyzing the symptoms involving connectivity, application stability, and hardware malfunction",
        },
        {
          duty:
            "Research using available resources, including article database systems",
        },
        
      ],
    },
  ]);

  const listings = jobList.map((j) => {
    return (
      <div className="job">
        <h2 className="job__employer">{j.employer}</h2>
        <p className="job__title">{j.title}</p>
        <p className="job__dates">
          {j.dates.start} - {j.dates.end}
        </p>
        <p className="job__location">
          {j.location.city}, {j.location.state}
        </p>
        <div className="job__duties" >
          {j.duties.map((x) => {
            return <li>{x.duty}</li>;
          })}
        </div>
      </div>
    );
  });
  return <div>{listings}</div>;
}

export default Jobs;
