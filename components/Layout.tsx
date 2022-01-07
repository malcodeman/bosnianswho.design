import { Grid } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

type props = {
  children: React.ReactNode;
};

function Layout(props: props) {
  const { children } = props;
  const backgroundColor = useColorModeValue("#ffffff", "#2f3437");
  return (
    <Grid
      backgroundColor={backgroundColor}
      gridTemplateColumns={["1fr", "1fr", "312px 1fr"]}
    >
      {children}
    </Grid>
  );
}

export default Layout;
