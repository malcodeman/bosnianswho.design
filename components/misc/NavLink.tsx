import { useRouter } from "next/router";
import { equals } from "ramda";
import NextLink from "next/link";

type props = {
  href: string;
  children: React.ReactNode;
};

function NavLink(props: props) {
  const { href, children } = props;
  const router = useRouter();
  const isActive = equals(router.asPath, href);
  return (
    <NextLink
      href={href}
      passHref
      style={{ color: isActive ? "var(--chakra-colors-blue-400)" : "inherit" }}
    >
      {children}
    </NextLink>
  );
}

export default NavLink;
