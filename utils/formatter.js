export function formatWork(work, index) {
  return (
    <div key={index}>
      {`${work.title} @ `}
      {formatTextOrLink({ text: work.company, url: work.url })}
      {work.additionalInfo && formatTextOrLink(work.additionalInfo)}
    </div>
  );
}

export function formatEducation(education, index) {
  return <div key={index}>{`${education.school} - ${education.degree}`}</div>;
}

function formatTextOrLink({ text, url, linkContext }) {
  if (url) {
    const link = (
      <a href={url} target="_blank">
        {text}
      </a>
    );

    if (linkContext) {
      return linkContext(link);
    } else {
      return link;
    }
  } else {
    return text;
  }
}
