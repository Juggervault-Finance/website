// Fix for react-icons TypeScript issues with React 18
import { ComponentType } from 'react';

type IconProps = {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
  [key: string]: any;
};

declare module 'react-icons/fa' {
  export const FaArrowRight: ComponentType<IconProps>;
  export const FaCheckCircle: ComponentType<IconProps>;
  export const FaNetworkWired: ComponentType<IconProps>;
  export const FaExchangeAlt: ComponentType<IconProps>;
  export const FaLock: ComponentType<IconProps>;
  export const FaIndustry: ComponentType<IconProps>;
  export const FaBuilding: ComponentType<IconProps>;
  export const FaGlobe: ComponentType<IconProps>;
  export const FaLandmark: ComponentType<IconProps>;
  export const FaShieldAlt: ComponentType<IconProps>;
  export const FaBolt: ComponentType<IconProps>;
  export const FaHandshake: ComponentType<IconProps>;
  export const FaLinkedin: ComponentType<IconProps>;
  export const FaGithub: ComponentType<IconProps>;
  export const FaPaperPlane: ComponentType<IconProps>;
  export const FaEnvelope: ComponentType<IconProps>;
  export const FaPhone: ComponentType<IconProps>;
  export const FaMapMarkerAlt: ComponentType<IconProps>;
  export const FaTimes: ComponentType<IconProps>;
  export const FaBars: ComponentType<IconProps>;
  export const FaClipboardCheck: ComponentType<IconProps>;
  export const FaProjectDiagram: ComponentType<IconProps>;
  export const FaOilCan: ComponentType<IconProps>;
  export const FaChartLine: ComponentType<IconProps>;
  export const FaMoneyBillWave: ComponentType<IconProps>;
  export const FaEye: ComponentType<IconProps>;
  export const FaCode: ComponentType<IconProps>;
  export const FaFileContract: ComponentType<IconProps>;
}

declare module 'react-icons/go' {
  export const GoDotFill: ComponentType<IconProps>;
}

declare module 'react-icons/fa6' {
  export const FaXTwitter: ComponentType<IconProps>;
  export const FaChevronDown: ComponentType<IconProps>;
}

