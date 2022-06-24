import {FiTrash2,fiPlus} from 'react-icons/fi'
import './list.styles.css'
const List = () => {
    return(
     <section className='list'>
        <header>
            <h2> O que Tenho que fazer:</h2>

            <div className='imput-container'>
                <input 
                type='text'
                placeholder='Adicione a tarefa Aqui!!'
                title='Bem Vinda Ao Meu Site'
                /> 
                <button className='add-task'>
                    <fiPlus size={18} color='#fff' />
                </button>

            </div>
        </header>
     </section>
    )
}


export default List    