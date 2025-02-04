import React from 'react';

function HomePage() {
	return (
		<div className='bg-gray-100 min-h-screen text-gray-900 flex flex-col'>
			<header className='bg-slate-800 text-white py-4'>
				<div className='container mx-auto flex justify-between items-center px-4'>
					<h1 className='text-2xl font-bold'>Ignacio Nicolas Melo</h1>
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
						"Me apasiona el mundo de los datos, sobre todo la cantidad que se
						genera y existe hoy en día. Sabiendo que esta cantidad de
						información tiene un gran potencial si se sabe cómo recopilar,
						analizar y utilizar de manera adecuada. Creo que, al comprender los
						patrones que los datos nos muestran, podemos mejorar productos y
						servicios existentes, e incluso desarrollar soluciones innovadoras
						para necesidades que aún no han sido cubiertas. Mi enfoque está en
						explorar cómo los datos pueden ser transformados en oportunidades,
						ya sea optimizando procesos, mejorando la experiencia del usuario o
						creando nuevas ideas que impacten de manera positiva en el día a día
						de los mismos."
					</p>
				</section>

				<section
					id='projects'
					className='bg-gray-200 py-16 px-4'>
					<h2 className='text-3xl font-semibold mb-4'>Proyectos</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-xl font-bold'>Proyecto 1</h3>
							<p>Descripción del proyecto 1.</p>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-xl font-bold'>Proyecto 2</h3>
							<p>Descripción del proyecto 2.</p>
						</div>
						<div className='bg-white p-6 rounded-lg shadow-md'>
							<h3 className='text-xl font-bold'>Proyecto 3</h3>
							<p>Descripción del proyecto 3.</p>
						</div>
					</div>
				</section>

				<section
					id='contact'
					className='container mx-auto py-16 px-4'>
					<h2 className='text-3xl font-semibold mb-8'>Contacto</h2>
					<div className='space-y-6'>
						<div className='flex items-center space-x-4'>
							<span className='material-icons text-2xl'>email</span>
							<label className='block text-lg'>
								Email meloignacionicolas@gmail.com
							</label>
						</div>
						<div className='flex items-center space-x-4'>
							<span className='material-icons text-2xl '>link</span>
							<label className='block text-lg'>
								LinkedIn{' '}
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
								GitHub{' '}
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
							<label className='block text-lg'>Celular +54 221 6734354</label>
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
