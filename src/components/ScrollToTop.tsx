import { ReactNode, useEffect } from "react";
import { withRouter } from "react-router-dom";

interface ScrollToTopProps {
  location: any;
  children: ReactNode;
}
const ScrollToTop = (props: ScrollToTopProps) => {
  const {
    location: { pathname },
    children,
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
