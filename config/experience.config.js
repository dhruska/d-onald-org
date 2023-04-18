const EXPERIENCE = {
  CURRENT_WORK: [
    {
      company: "Retool",
      title: "Engineering Manager",
      url: "https://www.retool.com"
    }
  ],
  FORMER_WORK: [
    {
      company: "Draftbit",
      title: "Co-Founder",
      url: "https://www.draftbit.com"
    },
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

export default EXPERIENCE;
