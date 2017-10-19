module.exports = {
  CURRENT_WORK: [
    {
      company: "Orchard",
      title: "Co-Founder",
      url: "https://www.orchard.ai"
    }
  ],
  FORMER_WORK: [
    {
      company: "DRIVIN",
      title: "Software Engineer",
      additionalInfo: {
        linkContext: link => {
          return <span> ({link})</span>;
        },
        text: "Acquired",
        url:
          "http://www.chicagotribune.com/bluesky/originals/ct-drivin-acquired-kar-bsi-20170419-story.html"
      }
    },
    {
      company: "The Tie Bar",
      title: "Software Engineer"
    },
    {
      company: "One North Interactive",
      title: "Software Developer"
    },
    {
      company: "Project Leadership Associates",
      title: "Software Developer"
    },
    {
      company: "Produce Pro Software",
      title: "Mobile Developer Intern"
    }
  ],
  EDUCATION: [
    {
      degree: "B.S. Computer Engineering",
      school: "University of Illinois at Urbana-Champaign"
    }
  ]
};
