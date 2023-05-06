import { useParams} from "react-router-dom";

const CustomerPage = () => {
    const { id } = useParams();

  return (
    <div className="row">
        <div className="col">
            <h1>Customer Page</h1>
            {id}
        </div>
    </div>
  )
}

export default CustomerPage