import { Link, useParams } from 'react-router-dom';
import itemsData from '../../data/mock_data.json';
import "../../componentes/Insumos List/InsumosList.css"

const InsumosList = () => {
    
    const { categoria } = useParams(); // Obtener el parámetro de la URL

    // Filtrar los productos por la categoría seleccionada
    const productosCategoria = itemsData.filter(item => item.categoria === categoria);

    // Obtener categorías únicas
    const categoriasUnicas = new Set();
    itemsData.forEach(item => {
        categoriasUnicas.add(item.categoria);
    });
    const categoriasArray = Array.from(categoriasUnicas);

    return (
        <>
            <div className='container'>
                <div className='category-container'>
                    <h2 className='category-title'>Categorías</h2>
                    <ul className='category-list'>
                        {categoriasArray.map(categoria => (
                            <li key={categoria} className='category-item'>
                                <Link to={`/insumos/${categoria}`} className='category-link'>
                                    {categoria}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default InsumosList;











