import React from 'react'

import { useLang } from '../../hooks/useLang'

const Cv = () => {
	return (

		<>
			<section className="cv">

				<div className="cv__description">

					<h2 className="cv__title">
						{
							useLang()
								? "Acerca de mi."
								: "About me."
						}
					</h2>

					<p className="cv__introduce">
						{useLang()
							? "Hola, soy Emmanuel Méndez, un desarrollador web residente en Caracas, Venezuela."
							: "Hello, I'm Emmanuel Méndez, a web developer based in Caracas, Venezuela."
						}
					</p>

					<p>
						{useLang()
							? <span>Soy un estudiante de la <a className="cv__unexca" href="http://www.unexca.edu.ve/">Universidad Nacional Experimental de la Gran Caracas</a> que ama crear landing pages, single-page applications, ecommerce, progressive web apps, bases de datos SQL y NoSQL,  APISs REST y APIs GraphQL.</span>
							: <span>I'm a student at <a className="cv__unexca" href="http://www.unexca.edu.ve/">Universidad Nacional Experimental de la Gran Caracas</a> that love create landing pages, single-page applications, ecommerce, progressive web apps, SQL and NoSQL databases, REST APISs and GraphQL APIs.</span>
						}</p>

				</div>

			</section>
		</>

	)
}

export default Cv