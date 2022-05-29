import { Grid } from "@chakra-ui/layout";

type props = {
  children: React.ReactNode;
};

function Layout(props: props) {
  const { children } = props;
  return (
    <Grid gridTemplateColumns={["1fr", "1fr", "312px 1fr"]}>{children}</Grid>
  );
}

export default Layout;
