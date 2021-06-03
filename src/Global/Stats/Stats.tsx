import { StatsBar, Container } from "./Stats_style";

interface StatsProps {
  stats: string;
  color: string | undefined;
  value: number;
}

const Stats: React.FC<StatsProps> = ({ stats, color, value }) => {
  return (
    <Container>
      {/* posicionamento */}
      <div>{stats}</div>
      <StatsBar color={color} width={value} />
      {value}
    </Container>
  );
};

export default Stats;
