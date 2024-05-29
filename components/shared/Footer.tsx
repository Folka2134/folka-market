import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import facebook from "../../public/assets/images/facebook.svg";
import instagram from "../../public/assets/images/instagram.svg";
import twitter from "../../public/assets/images/twitter.svg";

const Footer = () => {
  return (
    <footer className="flexCenter mb-12 mt-24">
      <div className="padding-container max-container flex w-full flex-col gap-10">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn title={columns.title} key={index}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, index) => (
                    <Link href="/" key={index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <div
                    key={index}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title="Socials">
                <ul className="regular-14 flex gap-4 text-gray-30">
                  <Link href="/">
                    <Image src={facebook} alt="logo" width={24} height={24} />
                  </Link>
                  <Link href="/">
                    <Image src={instagram} alt="logo" width={24} height={24} />
                  </Link>
                  <Link href="/">
                    <Image src={twitter} alt="logo" width={24} height={24} />
                  </Link>
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2024 Folka Market | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
