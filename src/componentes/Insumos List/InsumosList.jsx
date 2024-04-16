
import itemsData from '../../data/mock_data.json';
import './InsumosList.css';
import Header from "../Header"
import { Link } from 'react-router-dom';


const InsumosList = () => {

    const categorias = Object.keys(itemsData);
    console.log("categorias: ", categorias);
    


    return (
        <>
            <Header />
            <div className='container'>
                <div className='category-container'>
                    <h2 className='category-title'>Categorías</h2>
                    <ul className='category-list'>
                    {categorias.map(categoria => (
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








