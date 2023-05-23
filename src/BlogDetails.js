import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const BlogDetails = ({ id }) => {

    const { data , error, isPending } = useFetch('http://localhost:8000/task/' + id);
    const history = useHistory();
    const [updatedStatus, setUpdatedStatus] = useState(data);
    const [showDeleteButton, setShowDeleteButton] = useState(false);

    // console.log(task);
    const handleClick = () => {
        fetch('http://localhost:8000/task/' + data.id, {
            method: "DELETE"
        }).then(() => {
            history.go(0);
        })
    }
    const handleMark = (e) => {
        e.preventDefault();
        const updatedTask = { ...data, status: !data[0]?.status };
        fetch('http://localhost:8000/task/' + data.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask)
        }).then((res) => {
            setUpdatedStatus(prev => !prev);
        }).catch((error) => {   
        });
    };

    const showButton = () => {
        setShowDeleteButton(true);
    };

    const hideButton = () => {
        setShowDeleteButton(false);
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <div className="task-container">
                        <input type="checkbox"
                            onChange={handleMark}
                            value={updatedStatus}
                        />
                        <div className="task-content" onMouseEnter={showButton} onMouseLeave={hideButton}>
                            {data.body}
                            {showDeleteButton && (
                                <button className="delete-button" onClick={handleClick}>
                                    <i className="fa-sharp fa-solid fa-xmark"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;