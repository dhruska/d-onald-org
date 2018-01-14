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
      company: "The Tie Bar"
    },
    {
      company: "One North Interactive"
    },
    {
      company: "Project Leadership Associates"
    },
    {
      company: "Produce Pro Software"
    }
  ],
  EDUCATION: [
    {
      degree: "B.S. Computer Engineering",
      school: "University of Illinois at Urbana-Champaign"
    }
  ]
};
