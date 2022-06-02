import { useRouter } from "next/router";
import { Link } from "@chakra-ui/react";
import { equals } from "ramda";
import NextLink from "next/link";

type props = {
  href: string;
  children: React.ReactNode;
};

function NavLink(props: props) {
  const { href, children, ...rest } = props;
  const router = useRouter();
  const isActive = equals(router.asPath, href);
  return (
    <NextLink href={href} passHref>
      <Link {...rest} color={isActive ? "blue.400" : "inherit"}>
        {children}
      </Link>
    </NextLink>
  );
}

export default NavLink;
