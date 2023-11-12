
import React from "react";

import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

interface ShareBtnValues {
  title : string,
  url: string
}


const ShareButtons: React.FC<ShareBtnValues> = ({ title, url }) => {
  return (
    <div className="space-x-3">
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  );
};
export default ShareButtons;
