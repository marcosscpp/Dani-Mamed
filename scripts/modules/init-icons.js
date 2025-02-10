import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

export default function initializeIcons() {
  library.add(faArrowUp, faArrowDown, faArrowRight, faStar);
  dom.watch();
}
