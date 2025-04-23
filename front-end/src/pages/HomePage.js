import React from 'react';

function HomePage() {
	return (
		<div className='bg-gray-100 min-h-screen text-gray-900 flex flex-col'>
			<header className='bg-slate-800 text-white py-4'>
				<div className='container mx-auto flex justify-between items-center px-4'>
					<h1 className='text-2xl font-bold mb-4 md:mb-0 mr-2'>
						Ignacio Nicolas Melo
					</h1>
					<nav>
						<ul className='flex space-x-4'>
							<li>
								<a
									href='#about'
									className='hover:text-blue-200'>
									Sobre mí
								</a>
							</li>
							<li>
								<a
									href='#projects'
									className='hover:text-blue-200'>
									Proyectos
								</a>
							</li>
							<li>
								<a
									href='#courses'
									className='hover:text-blue-200'>
									Cursos
								</a>
							</li>
							<li>
								<a
									href='#contact'
									className='hover:text-blue-200'>
									Contacto
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main className='flex-grow'>
				<section
					id='about'
					className='container mx-auto py-16 px-4'>
					<h2 className='text-3xl font-semibold mb-4'>Sobre mí</h2>
					<p className='text-lg'>
						"Soy estudiante de Informática en la UNLP y estoy cursando ATIC. 
						Me gusta mucho todo lo relacionado con los datos y la automatización de procesos. 
						Hoy en día se genera muchísima información, y creo que tiene un gran valor si se sabe cómo recopilarla, analizarla y usarla bien. 
						Al entender los patrones que nos muestran los datos, podemos mejorar productos y servicios, e incluso crear soluciones nuevas para problemas que todavía no fueron resueltos.
						Me interesa descubrir cómo aprovechar los datos para hacer las cosas más simples y eficientes, mejorar la experiencia de las personas o dar forma a ideas que puedan tener un impacto positivo en lo cotidiano."
					</p>
				</section>

				<section
					id='projects'
					className='bg-gray-200 py-16 px-4'>
					<h2 className='text-3xl font-semibold mb-4'>Proyectos</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>calculate</span>
								<h3 className='text-xl font-bold'>
									Automatización de Facturación para Estudio Contable
								</h3>
							</div>
							<p>
								Esta es un pequeño programa para un estudio contable que
								necesitaba procesar archivos y subir ciertos datos de los mismos
								a una hoja de google spreadsheets.
							</p>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded hover:bg-gray-300'>
									Python
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Selenium
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Google Spreadsheets API
								</span>
							</div>
							<a
								href='https://github.com/nadienuncanada/FacturacionCalculator'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline mt-4'>
								Ver código
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>
									construction
								</span>
								<h3 className='text-xl font-bold'>Pagina Web Ferreteria</h3>
							</div>
							<p>
								Proyecto realizado en la materia Ingenieria de Software,
								aplicacion web creada para gestionar intercambio de productos de
								ferreteria y compras dentro de la misma app con la API de
								Mercado Pago{' '}
							</p>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									React
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Node.js
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Express.js
								</span>
							</div>
							<a
								href='https://github.com/ImportFromCBastian/fedeteria-front'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								Ver código
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>analytics</span>
								<h3 className='text-xl font-bold'>Ejercitacion en BigData</h3>
							</div>
							<p>
								Ejercicios y Trabajos Practicos de la materia Conceptos y
								Aplicaciones en BigData, en donde se utilizaron herramientas
								como Spark, SparkStreaming y Hadoop MapReduce.
							</p>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Python
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Spark
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded hover:bg-gray-300'>
									Hadoop MapReduce
								</span>
							</div>
							<a
								href='https://github.com/nadienuncanada/BigData'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								Ver código
							</a>
						</div>
					</div>
				</section>

				<section
					id='courses'
					className='bg-gray-200 py-16 px-4 mt-8'>
					<h2 className='text-3xl font-semibold mb-4'>Cursos</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>html</span>
								<h3 className='text-xl font-bold'>
									Argentina Programa 4.0 – Introducción a Lógica de Programación
								</h3>
							</div>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded hover:bg-gray-300'>
									Ruby
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Java
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									HTML
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									CSS
								</span>
							</div>
							<a
								href='https://www.linkedin.com/in/ignacio-melo-b2297a265/details/education/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								Ver cerificado
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>css</span>
								<h3 className='text-xl font-bold'>
									Argentina Programa 4.0 – Primeros pasos desarrollo frontend
								</h3>
							</div>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									HTML
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									CSS
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									JavaScript
								</span>
							</div>
							<a
								href='https://www.linkedin.com/in/ignacio-melo-b2297a265/details/education/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								Ver cerificado
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>
									insert_chart
								</span>
								<h3 className='text-xl font-bold'>
									Argentina Programa 4.0 – Procesamiento de datos con Python
								</h3>
							</div>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Python
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Pandas
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Machine Learning
								</span>
							</div>
							<a
								href='https://www.linkedin.com/in/ignacio-melo-b2297a265/details/education/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								Ver cerificado
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>bar_chart</span>
								<h3 className='text-xl font-bold'>
									Santander Open Academy – BigData
								</h3>
							</div>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Python
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Data Analytics
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									Pandas
								</span>
							</div>
							<a
								href='https://www.linkedin.com/in/ignacio-melo-b2297a265/details/education/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								Ver cerificado
							</a>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
							<div className='flex items-center'>
								<span className='material-icons text-2xl mr-2'>javascript</span>
								<h3 className='text-xl font-bold'>Alura Oracle One</h3>
							</div>
							<div className='flex space-x-2 mt-4'>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									HTML
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									CSS
								</span>
								<span className='bg-gray-200 text-gray-800 text-sm font-semibold px-2 py-1 rounded  hover:bg-gray-300'>
									JavaScript
								</span>
							</div>
							<a
								href='https://www.linkedin.com/in/ignacio-melo-b2297a265/details/education/'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'>
								Ver cerificado
							</a>
						</div>
					</div>
				</section>

				<section
					id='contact'
					className='container mx-auto py-16 px-4'>
					<h2 className='text-3xl font-semibold mb-8'>Contacto</h2>
					<div className='space-y-6'>
						<div className='flex items-center space-x-4'>
							<span className='material-icons text-2xl '>email</span>
							<label className='block text-lg'>
								Email:
								<div>
									<p>meloignacionicolas@gmail.com</p>
								</div>
							</label>
						</div>
						<div className='flex items-center space-x-4'>
							<span className='material-icons text-2xl '>link</span>
							<label className='block text-lg'>
								LinkedIn:
								<div>
									<a
										href='https://www.linkedin.com/in/ignacio-melo-b2297a265/'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 hover:underline'>
										linkedin.com/in/ignacio-melo
									</a>
								</div>
							</label>
						</div>
						<div className='flex items-center space-x-4'>
							<span className='material-icons text-2xl '>code</span>
							<label className='block text-lg'>
								GitHub:
								<div>
									<a
										href='https://github.com/nadienuncanada'
										target='_blank'
										rel='noopener noreferrer'
										className='text-blue-600 hover:underline'>
										github.com/nadienuncanada
									</a>
								</div>
							</label>
						</div>
						<div className='flex items-center space-x-4'>
							<span className='material-icons text-2xl'>phone</span>
							<label className='block text-lg'>
								Celular:
								<div>
									<p>+54 221 6734354</p>
								</div>
							</label>
						</div>
					</div>
				</section>
			</main>

			<footer className='bg-slate-800 text-white py-4'>
				<div className='container mx-auto text-center px-4'>
					<p>&copy; 2025 Ignacio Nicolas Melo</p>
				</div>
			</footer>
		</div>
	);
}

export default HomePage;
