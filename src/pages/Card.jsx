import { useState } from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import ContactModal from "components/Modals/ContactModal";

export default function CardPage() {
  const [open, setOpen] = useState(false)

  const onWebsite = () => {
    window.location.href = 'https://nexious.co/'; 
  }

  const onFacebook = () => {
    window.location.href = 'https://facebook.com/NexiousDigitalSolutions'; 
  }

  const onChat = () => {
    window.location.href = 'http://m.me/NexiousDigitalSolutions';
  }

  return (
    <div className="px-12 lg:px-24 pt-0 pb-12 lg:pb-24">
      <div className="h-84 w-auto flex justify-center">
        <img className="h-84 w-auto object-cover" src="/img/nexious_logo_v2.png" alt="" />
      </div>
      <div className="flex justify-center items-center flex-wrap">
        <div className="w-full md:w-2/4 lg:w-1/4 p-4">
          <Contact
            text="www.nexious.co"
            icon={"globe-americas"}
            iconColor="#2A3B80"
            onClick={onWebsite}
          />
        </div>
        <div className="w-full md:w-2/4 lg:w-1/4 p-4">
          <Contact
            text="Nexious Digital Solutions"
            icon={["fab", "facebook"]}
            iconColor="#4267B2"
            onClick={onFacebook}
          />
        </div>
        <div className="w-full md:w-2/4 lg:w-1/4 p-4">
          <Contact
            text="Chat with us"
            icon={["fab", "facebook-messenger"]}
            iconColor="#006AFF"
            onClick={onChat}
          />
        </div>
        <div className="w-full md:w-2/4 lg:w-1/4 p-4">
          <Contact
            text="Contact us"
            icon={"address-card"}
            iconColor="#2A3B80"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
      <ContactModal open={open} setOpen={setOpen} />
    </div>
  );
}

function Contact({ 
  icon, 
  iconColor, 
  text,
  onClick = () => {}, 
}) {
  return (
    <div className="text-center cursor-pointer" onClick={onClick}>
      <Icon icon={icon} color={iconColor} size="6x" />
      <div className="mt-4">
        <h6>{text}</h6>
      </div>
    </div>
  );
}
