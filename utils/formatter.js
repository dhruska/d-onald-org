export function formatWork(work, index) {
  return (
    <div key={index}>
      {`${work.title} @ `}
      {work.url ? (
        <a href={work.url} target="_blank">
          {work.company}
        </a>
      ) : (
        work.company
      )}
    </div>
  );
}

export function formatEducation(education, index) {
  return <div key={index}>{`${education.school} - ${education.degree}`}</div>;
}
