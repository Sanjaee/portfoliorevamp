import { BackMe } from "../Componenst/backMe/BeckMe";
import Contact from "../Componenst/contact/Contact";
import LoaderMe from "../Componenst/loaderMe/LoaderMe";
import MoreInfo from "../Componenst/moreInfoMe/MoreInfoMe";

export const Me = () => {
  return (
    <div>
      <LoaderMe />
      <MoreInfo />
      <BackMe />
      <Contact />
    </div>
  );
};
