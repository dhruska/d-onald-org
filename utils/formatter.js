export function formatWork(work, index) {
  return (
    <div key={index}>
      {work.url ? (
        <a href={work.url} target="_blank">
          {work.company}
        </a>
      ) : (
        work.company
      )}
      {` - ${work.title} - ${work.dateStart && work.dateEnd
        ? `${work.dateStart} - ${work.dateEnd}`
        : work.dateStart}`}
    </div>
  );
}

export function formatEducation(education, index) {
  return <div key={index}>{`${education.school} - ${education.degree}`}</div>;
}
