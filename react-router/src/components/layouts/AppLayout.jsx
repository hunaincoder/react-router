import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Loading } from "./loading";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
