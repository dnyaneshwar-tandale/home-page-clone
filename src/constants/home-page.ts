import HandMobile from "../assets/mobile-hand.webp";
import SecureTechImg from "../assets/secure_tech.webp";
import UserIcon from "../assets/User_logo.webp";
import GameIcon from "../assets/game_icon.webp";
import CloudIcon from "../assets/Cloud_Icon.webp";
import DevOpsIcon from "../assets/Dev_Ops.webp";
import GlobalNetworIcon from "../assets/Global_Network.webp";
import BasicWhite from "../assets/Zero_Tier_black_White_bg.webp";
import ProfessionalOrange from "../assets/Zero_Tier_black_Orange_bg.webp";
import BusinessBlack from "../assets/Zero_Tier_blue_bg.webp";
import SecureTech from "../assets/secure_tech.webp";
import Sales from "../assets/Sales_Graphs.webp";
import { BUTTON_SIZES, BUTTON_STATES } from "./button";
export const RELEASE_NOTES = [{
  title: "It just works",
  description:
    "ZeroTier combines the capabilities of <strong>VPN</strong> and <strong>SD-WAN</strong>, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.",
  buttonText: "Learn more",
  imgSrc:HandMobile,
  buttonType:"btn-outline-white",
  buttonSize:BUTTON_SIZES.btnMedium,
  buttonStyle:BUTTON_STATES.btnPrimary,
  isReverse:false,
},{
    title: "Speed, flexibility, and security",
    description:
      "Set up ZeroTier in minutes with remote, automated deployment.<br><br>Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities.<br><br>ZeroTier’s zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.",
    buttonText: "Get ZeroTier",
    imgSrc:SecureTechImg,
    buttonType:"btn-outline-white",
    buttonSize:BUTTON_SIZES.btnMedium,
    buttonStyle:BUTTON_STATES.btnPrimary,
    isReverse:true,
  }];

  export const INNOVATIVE_TEAM = [{
      title: "It just works",
  description:
  `"Metropolis deploys computer vision in parking lots & car wash facilities across the US, integrating ZeroTier to eliminate the complexity of managing multiple, disparate networks to deliver a seamless, groundbreaking and world-class customer experience." <br><br>TODD SHIPWAY, HEAD OF TECHNICAL OPERATIONS, METROPOLIS`,
  imgSrc:UserIcon,
},{
    title: "It just works",
    description:
    `"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us."
    
    <br><br>PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY`,
    imgSrc:UserIcon,
},{
    title: "It just works",
    description:
    `"In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us."
    
    <br><br>PETER BOIN, PRINCIPAL SOFTWARE ENGINEER, ALLUME ENERGY`,
    imgSrc:UserIcon,
}];

export const NETWORK_TEAM = [{
  title: "Individuals",
  description:
    `Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere<br><br>

    Conveniently share files and data, or even play LAN games with others<br><br>
    
    Manage secure network access to users of choice`,
  imgSrc:GameIcon,
},{
    title: "IT Teams",
    description:
      `Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution<br><br>

      Build, manage, and observe any number of remote, on premise, or cloud networks with one management interface<br><br>
      
      Easily provision remote access for all of your users`,
    imgSrc:CloudIcon,
  },{
    title: "DevOps",
    description:
      `Quickly build backplane networks spanning multiple cloud providers<br><br>

      Save on performance, storage, and bandwidth<br><br>
      
      Administrate and debug from anywhere<br><br>
      
      Secure corporate network overlay and failover layer`,
    imgSrc:DevOpsIcon,
  },
  {
    title: "Embedded",
    description:
      `Enjoy vastly superior network control and functionality<br><br>

      Develop and manage products or services running on their own decentralized networks<br><br>
      
      Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM`,
    imgSrc:GlobalNetworIcon,
  }];

  export const PRICING_TEAM = [{
  title: "Basic",
  description:
    `For Everyone / ZeroTier Hosted Controller<br><br>
    ✓ 1 Admin<br>
    
    ✓ 25 Nodes<br>
    
    ✓ Unlimited Networks<br>
    
    ✖ Business SSO: n/a<br>
    
    ✓ Community Support<br>
    
    FREE`,
  imgSrc:BasicWhite,
  buttonName:'Free Sign Up',
  buttonSize:BUTTON_SIZES.btnMedium,
  buttonStyle:BUTTON_STATES.btnPrimaryWhite,
},{
    title: "Professional",
    description:
      `Licensed Only For Individuals and Testing<br><br>
      ✓ Admins | $10 USD/mo each<br>
      
      ✓ 25 Node Packs | $5 USD/mo<br>
      
      ✓ Unlimited Networks<br>
      
      ✓ Business SSO | $5 USD/mo per seat<br>
      
      ✓ Community Support<br>
      
      Starting at $5 USD/month`,
    imgSrc:ProfessionalOrange,
    buttonName:'Sign Up',
    buttonSize:BUTTON_SIZES.btnMedium,
    buttonStyle:BUTTON_STATES.btnPrimary,

  },{
    title: "Business",
    description:
      `Licensed for Commercial Deployments<br><br>
      Use Cases Include:<br>
      
      ∙ IoT/IIoT<br>
      
      ∙ SD-WAN<br>
      
      ∙ VPN<br>
      
      ∙ Remote Monitoring and Management<br>
      
      Contact Sales for Pricing`,
      imgSrc:BusinessBlack,
      buttonName:'Contact Sales',
      buttonSize:BUTTON_SIZES.btnMedium,
      buttonStyle:BUTTON_STATES.btnPrimary,
  }];


  export const CONTACT_SALES = [{
    title: "ZeroTier Enterprise",
    description:
      "For high-volume VPN, IoT, IIoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.",
    buttonText: "Contact Sales",
    imgSrc:SecureTech,
    buttonType:"btn-outline",
    buttonSize:BUTTON_SIZES.btnMedium,
    buttonStyle:BUTTON_STATES.btnOutline,
    isReverse:true,
  },{
      title: "Service Providers",
      description:
        "For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators.",
      buttonText: "Contact SP Sales",
      imgSrc:Sales,
      buttonType:"btn-outline",
      buttonSize:BUTTON_SIZES.btnMedium,
      buttonStyle:BUTTON_STATES.btnPrimary,
      isReverse:false,
    }];