import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';

export default function Article() {
    const { id } = useParams(); //the id is a property on the params object |we destructured it|
    const url = 'http://localhost:8000/articles/' + id;
    const {data: article, isPending, error} = useFetch(url);
    const history = useHistory();

    useEffect(() => {
        if(error){
            //redirect
            setTimeout(() => {
                history.push('/');
            }, 2000);
        }
    }, [error, history])
    return (
        <div>
            {isPending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <p>By {article.author}</p>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
