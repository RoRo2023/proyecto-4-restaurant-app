//import '../index.css'
import Form from 'react-bootstrap/Form';

function Campo({type, text, as, rows, innerRef}){
    
    return(
        <>
        <Form.Group >
            <Form.Control as ={as} type={type} placeholder={text} rows={rows}
            ref={innerRef}
            />
            <Form.Text className="text-muted">
            &nbsp;
            </Form.Text>
        </Form.Group>
    {/*<input type="text" placeholder={text} size="40"></input>*/}
    </>
    )
}

export default Campo;