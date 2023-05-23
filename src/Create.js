import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus ] = useState(false); 
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = { body , status };

        setIsPending(true);

        fetch('http://localhost:8000/task', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        })
            .then(() => {
                console.log('Blog added');
                setIsPending(false);
                history.go();
            })
    }

    return (
        <div className="create">
            <form onSubmit={handleSubmit} >
                <div className="form-design">
                    <div>
                        <textarea
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        {!isPending && <button>Add</button>}
                        {isPending && <button disabled>Adding task...</button>}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Create;
