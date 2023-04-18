import { withRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ href, router, style, children }) => {
  if (router.pathname === href) {
    return <span style={style}>{children}</span>;
  } else {
    return (
      <Link href={href} style={style}>
        {children}
      </Link>
    );
  }
};

export default withRouter(ActiveLink);
