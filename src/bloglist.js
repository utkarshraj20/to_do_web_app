import { Link } from 'react-router-dom' ;
import BlogDetails from './BlogDetails';

const BlogList = ({tasks , title}) => {
    return (
        <div className="task-list">
            <h2>{title}</h2>
            { tasks.map((task)=>(
                <div className="blog-preview" key ={task.id} >
                    <BlogDetails id = {task.id} />
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;