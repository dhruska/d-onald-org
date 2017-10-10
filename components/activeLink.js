import { withRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ href, router, text }) => {
  if (router.pathname === href) {
    return <span>{text}</span>;
  } else {
    return (
      <Link prefetch href={href}>
        <a>{text}</a>
      </Link>
    );
  }
};

export default withRouter(ActiveLink);
