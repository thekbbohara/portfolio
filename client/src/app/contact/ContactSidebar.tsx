import React from "react";
import { ExternalLinkFill, MailFill, PhoneFill } from "@/assets/spfyicons";
import SubHeader from "@/components/ui/SubHeader";

const ContactSidebar = () => {
  const extrenalLinks: { name: string; href: string }[] = [
    {
      name: "discord",
      href: "https://discord.gg/DPxfxrYJuy",
    },
    {
      name: "median",
      href: "https://thekbbohara.medium.com/",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/thekbbohara/",
    },
  ];
  return (
    <aside className="grow hidden sm:flex flex-col gap-4   min-h-full border border-transparent border-r-line">
      <div className="flex flex-col gap-2">
        <SubHeader category="contacts" />
        <ul className="px-2 flex flex-col gap-2">
          <li className="flex gap-2">
            <MailFill />
            <span>thekbbohara@gmail.com</span>
          </li>
          <li className="flex gap-2">
            <PhoneFill />
            <span>+9779864973387</span>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <SubHeader category="find-me-also-in" className="border-t-line" />
        <ul className="px-2 flex flex-col gap-2">
          {extrenalLinks.map(({ name, href }) => (
            <li key={name} className="flex">
              <ExternalLinkFill />
              <a href={href} target="_blank">{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ContactSidebar;
