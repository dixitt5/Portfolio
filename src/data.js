//  icons
import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiDribbble,
  FiEye,
  FiCodesandbox,
  FiDollarSign,
  FiUserCheck,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Parivartan from "./assets/img/projects/Parivartan.png";
import DEX from "./assets/img/projects/DEX.png";
import ICO from "./assets/img/projects/ICO.png";
import InvoiceManager from "./assets/img/projects/InvoiceManager.png";
import MdownBlog from "./assets/img/projects/MdownBlog.png";
import NFTCollection from "./assets/img/projects/NFTCollection.png";
import SmartHive from "./assets/img/projects/SmartHive.png";
import Tatrix from "./assets/img/projects/Tatrix.jpg";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/ethers.png";
import SkillImg9 from "./assets/img/skills/web3.png";
import SkillImg10 from "./assets/img/skills/solidity.png";
import SkillImg11 from "./assets/img/skills/hardhat.png";
import SkillImg12 from "./assets/img/skills/truffle.png";
import SkillImg13 from "./assets/img/skills/ipfs.png";
import SkillImg14 from "./assets/img/skills/firebase.png";
import SkillImg15 from "./assets/img/skills/wagmi.png";
import SkillImg16 from "./assets/img/skills/livepeer.png";
import SkillImg17 from "./assets/img/skills/material.png";
import SkillImg18 from "./assets/img/skills/chakra.png";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "Interests",
    href: "interests",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/dixitt5",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/boldixit",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/dixit5",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Parivartan,
    name: "Parivartan NFTs",
    category: "blockchain",
    href: "https://parivartan-nfts.web.app/",
  },
  {
    id: "2",
    image: Tatrix,
    name: "Tatrix - A Web3 GameFi Engagement Platform",
    category: "blockchain",
    href: "https://tatrix-web3-linux369.vercel.app/",
  },
  {
    id: "3",
    image: SmartHive,
    name: "SmartHive- DAO for Housing Societies",
    category: "blockchain",
    href: "https://smarthive-13f36.web.app/",
  },
  {
    id: "4",
    image: DEX,
    name: "Decentralised Exchange",
    category: "blockchain",
    href: "http://dex-demo.vercel.app/",
  },
  {
    id: "5",
    image: InvoiceManager,
    name: "Invoice Manager",
    category: "blockchain",
    href: "http://invoice-manager-red.vercel.app/",
  },
  {
    id: "6",
    image: MdownBlog,
    name: "Blogging In Mark-Down",
    category: "web development",
    href: "https://github.com/dixitt5/Markdown-Blog-Project",
  },
  {
    id: "7",
    image: NFTCollection,
    name: "Mint an NFT",
    category: "blockchain",
    href: "https://nft-collection-dixitt5.vercel.app/",
  },
  {
    id: "8",
    image: ICO,
    name: "Initial Coin Offering",
    category: "blockchain",
    href: "https://nft-collection-dixitt5.vercel.app/",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Blockchain",
  },
  {
    name: "web development",
  },
  // {
  //   name: 'branding',
  // },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },
  {
    image: SkillImg14,
  },
  {
    image: SkillImg15,
  },
  {
    image: SkillImg16,
  },
  {
    image: SkillImg17,
  },
  {
    image: SkillImg18,
  },
];

// services
export const services = [
  {
    icon: <FiCodesandbox />,
    name: "Layer-2 Chains",
    description:
      "Layer-2 chains are secondary blockchain protocols built on top of existing blockchains, designed to improve scalability, speed and efficiency of transactions.",
  },
  {
    icon: <FiEye />,
    name: "Abstraction in Web3-Interfaces",
    description:
      "Abstraction simplifies complex technical details in web3 interfaces, improving accessibility and usability of blockchain technology for non-technical users.",
  },
  {
    icon: <FiDollarSign />,

    name: "De-Fi",
    description:
      "DeFi (Decentralized Finance) is a set of blockchain-based financial applications that operate on a decentralized, open-source, and permissionless network.",
  },
  {
    icon: <FiUserCheck />,
    name: "Self-Sovereign identity (SSI)",
    description:
      "The SSI model is a digital identity system that empowers individuals with control over their personal information and its usage.",
  },
];

// testimonials
// export const testimonials = [
//   {
//     authorImg: TestiImage1,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage2,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
//   {
//     authorImg: TestiImage3,
//     authorText:
//       "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
//     authorName: "Olivia Doe",
//     authorPosition: "Head of Design, Google",
//   },
// ];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at tilajidixit@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Surat, Gujarat, India.",
    description: "Living the Fullest.",
  },
];
