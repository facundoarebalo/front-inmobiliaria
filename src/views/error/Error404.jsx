import errorImage from '../../assets/img/404alter.gif'

const Error404 = () => {
  return (
    <>
      <div className='d-flex justify-content-center w-100 h-50'>
        <img src={errorImage} alt="Error 404" className=''
        />
      </div>
      <h1 className='text-center'>Page Not Found</h1>
      <p className='text-center'>Lo sentimos, la página que buscabas no está disponible por el momento.
      </p>
    </>
  )
}

export default Error404