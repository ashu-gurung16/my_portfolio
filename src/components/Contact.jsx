import { DiGithubBadge } from "react-icons/di";
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import transition from "../transition";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LiveChat from "./LiveChat";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "ashuto.gurung16@gmail.com";
  const subject = "I'm interested in hiring you.";
  const body = "Hi, I'd like to discuss a potential opportunity with you.";

  return (
    <>
      <div className="con_container">
        <div className="con_card">
          <div className="con_item">
            <div className="con_item_card">
              <h1>Let's get in touch!</h1>
              <p>
                I'm available for development-related work and full time job
                opportunities.
              </p>
              <p>Feel free to reach out to me via email or socials below.</p>
              <p className="con_icon">
                <a
                  href="https://github.com/ashu-gurung16"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="con_icon_link"
                >
                  <DiGithubBadge className="con_icon_hover" />
                </a>
                <a
                  href="http://www.linkedin.com/in/ashutosh-gurung-a986b6309"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="con_icon_link"
                >
                  <AiOutlineLinkedin className="con_icon_hover" />
                </a>
                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="con_icon_link"
                >
                  <AiOutlineMail className="con_icon_hover" />
                </a>
              </p>
              <p className="con_copy_mail">
                <CopyToClipboard text="ashuto.gurung16@gmail.com">
                  <div
                    className="con_mail"
                    onClick={() => {
                      setCopied(true);

                      setTimeout(() => {
                        setCopied(false);
                      }, 1500);
                    }}
                  >
                    {!copied ? "ashuto.gurung16@gmail.com" : "Done!"}
                  </div>
                </CopyToClipboard>
                <CopyToClipboard text="ashuto.gurung16@gmail.com">
                  <div
                    className="con_copy_icon"
                    onClick={() => {
                      setCopied(true);

                      setTimeout(() => {
                        setCopied(false);
                      }, 1500);
                    }}
                  >
                    <ContentCopyIcon fontSize="large" />
                  </div>
                </CopyToClipboard>
              </p>
            </div>
          </div>
          {/* <div className="con_chat">
            Online chat
            <LiveChat />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default transition(Contact);
