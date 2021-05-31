import { GlassContainer, StyledImg, StyledH1 } from "./GlassCard_style";
import { useSpring, config } from "react-spring";

const calc = (x: any, y: any) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];

const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface GlassCardProps {
  sprite: any;
}

const GlassCard: React.FC<GlassCardProps> = ({ sprite }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));

  return (
    <GlassContainer
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
      }}
    >
      <StyledImg src={sprite} />
    </GlassContainer>
  );
};

export default GlassCard;
