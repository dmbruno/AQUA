import React, { useState } from 'react';

const Formulario = () => {
    const [formData, setFormData] = useState({
        cantidadChicotes: '',
        cantidadSectores: '',
        longitudSector: '',
        cajaValvulas: '',
        solenoide: false,
        cilindrica: false,
        entreRoscas: '',
        tapon: '',
        instalacionBomba: false,
        instalacionTablero: false,
        domotizacion: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = () => {
        console.log(formData);

    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-zinc-700'>
            <form className='flex flex-col justify-center bg-gray-100 p-8'>
                <h2 className='text-3xl font-bold underline mb-6'>Datos del Formulario</h2>
                <div className='mb-4'>
                    <label htmlFor="cantidadChicotes" className='block'>Cantidad de Chicotes/Aspersores:</label>
                    <input type="number" id="cantidadChicotes" name="cantidadChicotes" value={formData.cantidadChicotes} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="cantidadSectores" className='block'>Cantidad de Sectores:</label>
                    <input type="number" id="cantidadSectores" name="cantidadSectores" value={formData.cantidadSectores} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="longitudSector" className='block'>Longitud Sector:</label>
                    <input type="number" id="longitudSector" name="longitudSector" value={formData.longitudSector} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="cajaValvulas" className='block'>Caja de Válvulas:</label>
                    <input type="number" id="cajaValvulas" name="cajaValvulas" value={formData.cajaValvulas} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <h2 className='text-2xl font-semibold mb-3'>Colector :</h2>
                    <label htmlFor="solenoide" className='flex items-center'>
                        <input type="checkbox" id="solenoide" name="solenoide" checked={formData.solenoide} onChange={handleChange} className='mr-2' />
                        Válvula Solenoide
                    </label>
                </div>
                <div className='mb-4'>
                    <label htmlFor="cilindrica" className='flex items-center'>
                        <input type="checkbox" id="cilindrica" name="cilindrica" checked={formData.cilindrica} onChange={handleChange} className='mr-2' />
                        Válvula Cilíndrica
                    </label>
                </div>
                <div className='mb-4'>
                    <label htmlFor="entreRoscas" className='block'>Entre Roscas de 1":</label>
                    <input type="number" id="entreRoscas" name="entreRoscas" value={formData.entreRoscas} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="unionesDobles" className='block'>Uniones Dobles":</label>
                    <input type="number" id="unionesDobles" name="unionesDobles" value={formData.unionesDobles} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="tapon" className='block'>Tapones:</label>
                    <input type="number" id="tapon" name="tapon" value={formData.tapon} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="instalacionBomba" className='flex items-center'>
                        <input type="checkbox" id="instalacionBomba" name="instalacionBomba" checked={formData.instalacionBomba} onChange={handleChange} className='mr-2' />
                        Instalación de bomba
                    </label>
                </div>
                <div className='mb-4'>
                    <label htmlFor="instalacionTablero" className='flex items-center'>
                        <input type="checkbox" id="instalacionTablero" name="instalacionTablero" checked={formData.instalacionTablero} onChange={handleChange} className='mr-2' />
                        Instalación de tablero
                    </label>
                </div>
                <div className='mb-4'>
                    <label htmlFor="domotizacion" className='flex items-center'>
                        <input type="checkbox" id="domotizacion" name="domotizacion" checked={formData.domotizacion} onChange={handleChange} className='mr-2' />
                        Domotización
                    </label>
                </div>
                <div className="flex justify-center">
                    <button type="submit" onSubmit={handleSubmit} className='bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600 transition duration-300'>Calcular</button>
                </div>
            </form>

        </div>
    );
};

export default Formulario;

