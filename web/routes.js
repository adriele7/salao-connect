import Agendamentos from './pages/Agendamentos';
import Clientes from './pages/Clientes';
import Colaboradores from './pages/Colaboradores';
import ServicosProdutos from './pages/ServicosProdutos';
import HorariosAtendimento from './pages/HorariosAtendimento';

const Routes = () => {
  return (
    <>
      <Header />
      <div className="container-fluid h-100">
        <div className="row h-100">
          <Router>
            <Sidebar />

            <Switch>
              <Route path="/" exact component={Agendamentos} />
              <Route path="/clientes" exact component={Clientes} />
              <Route path="/colaboradores" exact component={Colaboradores} />
              <Route
                path="/servicos-produtos"
                exact
                component={ServicosProdutos}
              />
              <Route
                path="/horarios-atendimento"
                exact
                component={HorariosAtendimento}
              />
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
};

app.listen(port, () => {
  console.log('http://localhost:3000');
});

export default Routes;