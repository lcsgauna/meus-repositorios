import { useState } from 'react';
import { FaGithub , FaPlus} from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default function Main(){
    const [newRepo, setNewRepo] = useState('');

    function handleInputChange(event){
        setNewRepo(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(newRepo)
    }

    return(
        <Container>
            <h1>
                <FaGithub size={40}/>    
                Meus repositórios
            </h1>
            <Form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Adicionar repositorio'
                    value={newRepo}
                    onChange={handleInputChange}
                />
                <SubmitButton>
                    <FaPlus color='#FFF' size={14}/>
                </SubmitButton>
            </Form>
        </Container>
    )
}