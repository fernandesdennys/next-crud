import Cliente from '../core/Cliente';
import Layout from './../components/Layout';
import Tabela from './../components/Tabela';


export default function Home() {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Pedro', 23, '3'),
    new Cliente('Carlos', 54, '6')
  ]


  return (
    <div className={`
    flex justify-center
    items-center
    h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
     `}>
      <Layout titulo="Cadastro Simples" >
        <Tabela clientes={clientes}></Tabela>
      </Layout>     
    </div>
  );
}
