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
                    <label htmlFor="cantidadChicotes" className='block'>Cantidad de Chicotes:</label>
                    <input type="number" id="cantidadChicotes" name="cantidadChicotes" value={formData.cantidadChicotes} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="cantidadSectores" className='block'>Cantidad de Sectores:</label>
                    <input type="number" id="cantidadSectores" name="cantidadSectores" value={formData.cantidadSectores} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="longitudSector" className='block'>Longitud promedio del Sector:</label>
                    <input type="number" id="longitudSector" name="longitudSector" value={formData.longitudSector} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="cajaValvulas" className='block'>Tamaño del Colector:</label>
                    <input type="number" id="cajaValvulas" name="cajaValvulas" value={formData.cajaValvulas} onChange={handleChange} className='w-full py-2 px-4 rounded border focus:outline-none focus:border-indigo-500' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="solenoide" className='flex items-center'>
                        <input type="checkbox" id="solenoide" name="solenoide" checked={formData.solenoide} onChange={handleChange} className='mr-2' />
                        Eléctrico
                    </label>
                </div>
                <div className='mb-4'>
                    <label htmlFor="cilindrica" className='flex items-center'>
                        <input type="checkbox" id="cilindrica" name="cilindrica" checked={formData.cilindrica} onChange={handleChange} className='mr-2' />
                        Manual
                    </label>
                </div>
                    

                <div className='mb-4'>
                    <label htmlFor="instalacionBomba" className=' text-2xl flex items-center'>
                        <input type="checkbox" id="instalacionBomba" name="instalacionBomba" checked={formData.instalacionBomba} onChange={handleChange} className=' mr-2' />
                        Instalación de bomba
                    </label>
                </div>
                <div className='mb-4'>
                    <label htmlFor="instalacionTablero" className='text-2xl flex items-center'>
                        <input type="checkbox" id="instalacionTablero" name="instalacionTablero" checked={formData.instalacionTablero} onChange={handleChange} className='mr-2' />
                        Instalación de tablero
                    </label>
                </div>
                <div className='mb-4'>
                    <label htmlFor="domotizacion" className='text-2xl flex items-center'>
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

