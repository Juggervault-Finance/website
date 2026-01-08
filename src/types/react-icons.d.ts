// Fix for react-icons TypeScript issues with React 18
// React 18 requires JSX components to return JSX.Element, not ReactNode
// This overrides the IconType definition to work with React 18

import type { IconBaseProps } from 'react-icons/lib';

// Override the IconType to return JSX.Element instead of ReactNode
declare module 'react-icons/lib' {
  export type IconType = (props: IconBaseProps) => JSX.Element;
}

// Type for icons that returns JSX.Element
type IconComponent = (props: IconBaseProps) => JSX.Element;

declare module 'react-icons/fa' {
  export const FaArrowRight: IconComponent;
  export const FaCheckCircle: IconComponent;
  export const FaNetworkWired: IconComponent;
  export const FaExchangeAlt: IconComponent;
  export const FaLock: IconComponent;
  export const FaIndustry: IconComponent;
  export const FaBuilding: IconComponent;
  export const FaGlobe: IconComponent;
  export const FaLandmark: IconComponent;
  export const FaShieldAlt: IconComponent;
  export const FaBolt: IconComponent;
  export const FaHandshake: IconComponent;
  export const FaLinkedin: IconComponent;
  export const FaGithub: IconComponent;
  export const FaPaperPlane: IconComponent;
  export const FaEnvelope: IconComponent;
  export const FaPhone: IconComponent;
  export const FaMapMarkerAlt: IconComponent;
  export const FaTimes: IconComponent;
  export const FaBars: IconComponent;
  export const FaClipboardCheck: IconComponent;
  export const FaProjectDiagram: IconComponent;
  export const FaOilCan: IconComponent;
  export const FaChartLine: IconComponent;
  export const FaMoneyBillWave: IconComponent;
  export const FaEye: IconComponent;
  export const FaCode: IconComponent;
  export const FaFileContract: IconComponent;
}

declare module 'react-icons/go' {
  export const GoDotFill: IconComponent;
}

declare module 'react-icons/fa6' {
  export const FaXTwitter: IconComponent;
  export const FaChevronDown: IconComponent;
}

