import './App.css'
import Card from './components/Card'
import CounterContainer from './components/CounterContainer'

function App() {
  return (
    <div className='container'>
      <h1>Componentes</h1>
      <div className="row">
        {/* Renderiza la primera tarjeta */}
        <div className="col-3">
          <Card 
            title="Titulo"
            description="Descrp"
            img="https://picsum.photos/id/237/300/300"
          />
        </div>

        {/* Renderiza la segunda tarjeta */}
        <div className="col-3">
          <Card title="Titulo2" description="Descrp2" img="https://picsum.photos/id/27/300/300" />
        </div>
        
        {/* Renderiza la tercera tarjeta */}
        <div className="col-3">
          <Card title="Titulo3" description="Descrp3"  img="https://picsum.photos/id/7/300/300"/>
        </div>
      </div>

      {/* Renderiza el componente CounterContainer */}
      <CounterContainer />
    </div>
  )
}

export default App
