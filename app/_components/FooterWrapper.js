"use client";

import React from "react";

// Data structure for the footer links. This is an efficient way to
// manage the content.
// const footerLinksData = [
//   {
//     title: "Product",
//     links: [
//       {
//         label: "Agents",
//         href: "#",
//         target: "_blank",
//       },
//       {
//         label: "Media server",
//         href: "#",
//         target: "_blank",
//       },
//       {
//         label: "SDKs",
//         href: "#",
//         target: "_blank",
//       },
//       {
//         label: "Cloud dashboard",
//         href: "#",
//         target: "_blank",
//       },
//     ],
//   },
//   {
//     title: "Developers",
//     links: [
//       {
//         label: "Documentation",
//         href: "#",
//         target: "_blank",
//       },
//       { label: "Security", href: "#" },
//       {
//         label: "LLMs.txt",
//         href: "#",
//         target: "_blank",
//       },
//     ],
//   },
//   {
//     title: "Resources",
//     links: [
//       { label: "Brand assets", href: "#" },
//       { label: "Video codecs", href: "#" },
//       { label: "Codec bitrates", href: "#" },
//       { label: "WebRTC browser test", href: "#" },
//       { label: "Connection test", href: "#" },
//     ],
//   },
//   {
//     title: "Solutions",
//     links: [
//       { label: "Robotics", href: "#" },
//       { label: "Livestreaming", href: "#" },
//       { label: "Video conferencing", href: "#" },
//     ],
//   },
//   {
//     title: "Company",
//     links: [
//       { label: "Blog", href: "#", target: "_blank" },
//       { label: "Careers", href: "#" },
//       { label: "About", href: "#" },
//       {
//         label: "Open source",
//         href: "#",
//         target: "_blank",
//       },
//     ],
//   },
// ];
const footerLinksData = [
  {
    title: "Product",
    links: [
      { label: "AI Assistant", href: "#" },
      { label: "Legal Research", href: "#" },
      { label: "Strategic Analytics", href: "#" },
      { label: "Workflow Automation", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Small Law Firms", href: "#" },
      { label: "Mid-Sized Firms", href: "#" },
      { label: "Litigation Teams", href: "#" },
      { label: "Transactional Teams", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Customer Stories", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Security Center", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

// A reusable component for the LiveKit logo SVG.
const LiveKitLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    className="h-5 w-5"
  >
    <path
      d="M14.4004 9.59961H9.59961V14.4004H14.4004V9.59961Z"
      fill="#745EFF"
    ></path>
    <path
      d="M19.2011 4.80078H14.4004V9.60153H19.2011V4.80078Z"
      fill="#745EFF"
    ></path>
    <path
      d="M19.2011 14.4004H14.4004V19.2011H19.2011V14.4004Z"
      fill="#745EFF"
    ></path>
    <path d="M24 0H19.1992V4.80075H24V0Z" fill="#745EFF"></path>
    <path d="M24 19.1992H19.1992V24H24V19.1992Z" fill="#745EFF"></path>
    <path
      d="M4.80075 19.1992V14.4004V9.59962V4.80075V0H0V4.80075V9.59962V14.4004V19.1992V24H4.80075H9.59963H14.4004V19.1992H9.59963H4.80075Z"
      fill="#E6E8EB"
    ></path>
  </svg>
);

// A reusable component for social media icons.
const SocialIcon = ({ title, path, href }) => (
  <a
    aria-label={title}
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    className="p-0.5"
  >
    <svg
      role="presentation"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4 hover:text-[#E6E8EB]"
    >
      <title>{title}</title>
      <path fill="currentColor" d={path}></path>
    </svg>
  </a>
);

// A reusable component for a single column of footer links.
const FooterLinkSection = ({ title, links }) => (
  <div className="flex flex-col space-y-4">
    <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A0A3A8]">
      {title}
    </p>
    {links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target={link.target || "_self"}
        className="text-sm hover:underline"
      >
        {link.label}
      </a>
    ))}
  </div>
);

const Footer = () => {
  const socialIcons = [
    {
      title: "GitHub",
      href: "#",
      path: "M8.61133 0C4.19133 0 0.611328 3.58 0.611328 8C0.611328 11.54 2.90133 14.53 6.08133 15.59C6.48133 15.66 6.63133 15.42 6.63133 15.21C6.63133 15.02 6.62133 14.39 6.62133 13.72C4.61133 14.09 4.09133 13.23 3.93133 12.78C3.84133 12.55 3.45133 11.84 3.11133 11.65C2.83133 11.5 2.43133 11.13 3.10133 11.12C3.73133 11.11 4.18133 11.7 4.33133 11.94C5.05133 13.15 6.20133 12.81 6.66133 12.6C6.73133 12.08 6.94133 11.73 7.17133 11.53C5.39133 11.33 3.53133 10.64 3.53133 7.58C3.53133 6.71 3.84133 5.99 4.35133 5.43C4.27133 5.23 3.99133 4.41 4.43133 3.31C4.43133 3.31 5.10133 3.1 6.63133 4.13C7.27133 3.95 7.95133 3.86 8.63133 3.86C9.31133 3.86 9.99133 3.95 10.6313 4.13C12.1613 3.09 12.8313 3.31 12.8313 3.31C13.2713 4.41 12.9913 5.23 12.9113 5.43C13.4213 5.99 13.7313 6.7 13.7313 7.58C13.7313 10.65 11.8613 11.33 10.0813 11.53C10.3713 11.78 10.6213 12.26 10.6213 13.01C10.6213 14.08 10.6113 14.94 10.6113 15.21C10.6113 15.42 10.7613 15.67 11.1613 15.59C14.3213 14.53 16.6113 11.53 16.6113 8C16.6113 3.58 13.0313 0 8.61133 0Z",
    },
    {
      title: "X",
      href: "#",
      path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
    },
    {
      title: "Slack",
      href: "#",
      path: "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
    },
  ];

  return (
    <footer className="w-full border-t border-[#26282E] py-16 bg-[#0E1012] text-white font-sans">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          {/* Main info section */}
          <div className="min-w-52 flex-1 space-y-6">
            <a aria-label="LiveKit homepage" href="/" className="inline-block">
              {/* Using the new LiveKitLogo component */}
              {/* <LiveKitLogo /> */}
              RossAi
            </a>
            {/* <p className="text-balance text-sm text-[#A0A3A8]"> */}
            <p className=" text-sm text-[#A0A3A8]">
              AI-powered solutions transforming the legal industry.
            </p>
            <div className="space-y-3">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#A0A3A8]">
                Keep in touch
              </h2>
              <div className="flex items-center gap-3 text-white">
                {/* Dynamically rendering social media links */}
                {socialIcons.map((icon) => (
                  <SocialIcon
                    key={icon.title}
                    title={icon.title}
                    path={icon.path}
                    href={icon.href}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Dynamically rendered link columns using a new component */}
          <div className="grid w-full max-w-4xl grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-5 text-[#E6E8EB]">
            {footerLinksData.map((section, index) => (
              <FooterLinkSection
                key={`${section.title}-${index}`}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
        {/* Bottom section with copyright and legal links */}
        <div className="mt-16 flex flex-col gap-3 border-t border-[#26282E] pt-3 text-xs text-[#A0A3A8] lg:flex-row lg:justify-between">
          <div className="flex flex-col flex-wrap gap-3 lg:flex-row lg:gap-1">
            <p>
              &copy; 2025 RossAi. Engineered and designed worldwide.
              <br className="md:hidden" /> All rights reserved.
            </p>
            <div className="mr-4 whitespace-nowrap">
              <a target="_blank" className="hover:underline" href="#">
                Terms of Service
              </a>
              <span className="mx-1">|</span>
              <a target="_blank" className="hover:underline" href="#">
                Cookie Policy
              </a>
              <span className="mx-1">|</span>
              <a target="_blank" className="hover:underline" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
          <div>
            <a target="_blank" href="/#">
              <div className="flex items-center gap-2 whitespace-nowrap text-[#4FE08A]">
                <span className="relative block size-1.5">
                  <span className="absolute left-0 top-0 z-50 block size-1.5 origin-center animate-ping rounded-full duration-1000 bg-[#4FE08A]"></span>
                  <span className="block size-1.5 rounded-full duration-1000 bg-[#4FE08A]"></span>
                </span>
                <span className="font-mono text-xxs font-bold uppercase tracking-wider">
                  all systems operational
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
