import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Context/userContext';
import { Navigate, useNavigate } from 'react-router-dom';
import logo from "../img/logoAqua.jpg"

const IniciarSesion = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonClicked(true);
  };

  useEffect(() => {
    if (submitButtonClicked) {
      if (formData.email === user.email && formData.password === user.password) {
        navigate('/inicio')
        console.log('Inicio de sesión exitoso');
        // Aquí podrías realizar acciones adicionales, como almacenar el usuario en el estado global de tu aplicación
      } else {
        setError('El email o la contraseña son incorrectos');
      }
      // Restablecer el estado del botón después de realizar la verificación
      setSubmitButtonClicked(false);
    }
  }, [submitButtonClicked]);
 

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
          Iniciar Sesion
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className=" text-black font-semibold text-indigo-600 hover:text-indigo-500">
                  Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Iniciar Sesion
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          No tienes una cuenta?{' '}
          <a href="#" className="text-red-500 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Probala Gratis ¡Aca!
          </a>
        </p>
      </div>
    </div>
  );
};

export default IniciarSesion;
