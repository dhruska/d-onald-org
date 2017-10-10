export function formatWork(work) {
  return (
    <div>
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

export function formatEducation(education) {
  return <div>{`${education.school} - ${education.degree}`}</div>;
}
