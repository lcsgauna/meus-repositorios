import { useParams } from "react-router-dom"
import { Container, Owner, Loading,BackButton } from "./styles";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import api from "../../services/api";


export default function Repositorio(){
    const { repositorio } = useParams();
    const [repo,setRepo] = useState({});
    const [issues,setIssues] = useState([]);
    const [loading,setLoading] = useState(true);


    useEffect(() => {
        async function load(){
            const nomeRepo = decodeURI(repositorio);
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`), 
                api.get(`/repos/${nomeRepo}/issues`,{
                    params : {
                        state : 'open',
                        per_page: 5
                    }
                })
            ]);
            setRepo(repositorioData.data);
            setIssues(issuesData.data);
            setLoading(false);
        }

        load();
    },[repositorio]);
    useState


    if(loading){
        return(<Loading><h1>Carregando...</h1></Loading>)
    }


    return(
       <Container>
        <BackButton to="/">
           <FaArrowLeft color="#000"/> 
        </BackButton>
            <Owner>
                <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
                <h1>
                    {repo.name}
                </h1>
                <p>
                    {repo.description}
                </p>
            </Owner>
       </Container>
    )
}