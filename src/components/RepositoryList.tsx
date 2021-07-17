import RepositoryItem from "./RespositoryItem";
import '../styles/repositories.scss';
// import axios from 'axios';
import { useEffect, useState } from "react";
import axios from "axios";

interface Repository {
    id: string;
    name: string;
    description: string;
    html_url: string;
}

export default function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/orgs/rocketseat/repos')
            .then(response => {
                setRepositories(response.data)
            })
    }, [])

    const repositoryName = 'unform2'

    const repository = {
        name: 'unform',
        description: 'Forms in React',
        link: 'https://github.com/unform/unform'
    }
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository} />)}
            </ul>
        </section>
    )
}