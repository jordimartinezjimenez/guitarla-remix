import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
    { title: "GuitarLA - Sobre Nosotros" },
    { description: 'Venta de guitarras, blog de música' }
  ];
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Morbi varius ex risus, a vulputate sapien consectetur id. Proin ultrices lacinia est, id tincidunt risus convallis a. Praesent maximus purus non nulla rutrum, in cursus nulla semper. Nulla in dignissim eros. Phasellus rutrum facilisis cursus. In interdum ante interdum convallis sollicitudin. Vestibulum efficitur sapien a nibh porta, sit amet condimentum nulla eleifend. Aenean arcu mi, suscipit quis facilisis non, fringilla pulvinar ipsum. Nullam dui dolor, rutrum ut ante eu, mattis laoreet risus. Nullam malesuada massa vitae auctor sagittis.</p>
          <p>Mauris ultricies lobortis lacus, in interdum odio lobortis sed. Ut rutrum pellentesque pretium. Maecenas ac ipsum aliquam, accumsan leo id, venenatis tellus. Proin faucibus dui a efficitur sollicitudin. Vestibulum ultricies posuere augue quis cursus. Vestibulum sollicitudin turpis a justo cursus, sit amet pretium justo porta. Fusce ex nibh, euismod nec metus non, pellentesque mollis orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce in eleifend risus</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros