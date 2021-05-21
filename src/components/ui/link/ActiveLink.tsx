import { useRouter } from "next/router";
import { LinkProps } from "./types";

const activeClassName: string = "active";

function ActiveLink(props: LinkProps) {
  const { children, href, className: customClassName, setToggleNav } = props;
  const router = useRouter();
  const className =
    router.asPath === href
      ? `${customClassName} ${activeClassName}`
      : customClassName;

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(href);
    setToggleNav();
  };

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ActiveLink;
