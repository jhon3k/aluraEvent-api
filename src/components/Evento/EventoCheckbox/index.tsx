import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizaEvento from '../../../State/Hooks/UseAtualizaEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const atualizaEvento = useAtualizaEvento()
  
  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo
    atualizaEvento(eventoAlterado)
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox