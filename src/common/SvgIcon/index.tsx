import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <img src={`/cio-che-cri-app/img/svg/${src}`} alt={src} width={width} height={height} />
);
