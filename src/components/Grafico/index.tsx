import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IConsulta from "~/types/IConsulta";
import IProfissional from "~/types/IProfissional";
import useDadosGrafico from "./useDadosGrafico";
import { styled } from "styled-components";

interface Props {
  profissionais: IProfissional[] | null;
  consultas: IConsulta[] | null;
}
interface IDados {
  nome: string;
  consultas: number;
}

const SecaoEstilizada = styled.section`
  background-color:'#fff';

`;
function Grafico({ profissionais, consultas }: Props) {
  const dados: Array<IDados> = useDadosGrafico({ profissionais, consultas });
  return (
    <SecaoEstilizada>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={dados}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type="number"></XAxis>
          <YAxis type="category" dataKey="nome"></YAxis>
          <Bar dataKey="consultas" fill="#083806" barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
}

export default Grafico;
