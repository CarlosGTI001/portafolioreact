import './product.css'
import PropTypes from "prop-types";


export function ProductoExportado({ title }) {
  console.log(title)
  return (
    <>
      <h1 className='btn btn-sucess'>{ title }</h1>
    </>
  );
}

ProductoExportado.propTypes = {
  title: PropTypes.string.isRequired
}