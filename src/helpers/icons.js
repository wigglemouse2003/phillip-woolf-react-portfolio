import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faTimes,
  faRedoAlt,
  faPlusCircle,
  faPhone,
  faEnvelope,
  faMapMarkedAlt,
  faGrimace,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faTimes,
    faRedoAlt,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faGrimace,
    faLock
  );
};

export default Icons;
