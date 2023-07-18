import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

const socLink = [
  { inst: "https://www.instagram.com/" },
  { face: "https://www.facebook.com/" },
  { tel: "+380632320670" },
  { teleg: "https://web.telegram.org/k/" },
];

export function IconComponent() {
  return (
    <ul>
      <li>
        <a href="https://www.facebook.com/">
          <TiSocialFacebook />
        </a>
      </li>
    </ul>
  );
}
