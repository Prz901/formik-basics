import { Formik, Field } from 'formik'
import * as Yup from 'yup'
import './index.css'

export default function FormRefatorado() {
  return (
    <div className='container'>
      <h1 className='title-form'>Dados</h1>
      <Formik
        initialValues={{ name: '', lastName: '', state: '', nationality: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('Insira um nome').min(3, 'nome precisa ter no minimo 6 caracteres'),
          lastName: Yup.string().required('Insira um Sobrenome').min(6, 'Sobrenome precisa ter no minimo 6 caracteres'),
          state: Yup.string().required(''),
          nationality: Yup.string().required('Insira Nacionalidade'),
        })}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <div className=''>
            <div className='inputs-content'>
              <div className='inputs'>
                <label className='label' htmlFor='name'>
                  Nome
                </label>
                <input
                  type='name'
                  id='name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='No minimo 3 caracteres'
                  className='input-style'
                />
                {errors.name && touched.name && <h5 className='error'>{errors.name}</h5>}
              </div>
              <div className='inputs'>
                <label className='label' htmlFor='lastName'>
                  Sobrenome Completo
                </label>
                <input
                  type='lastName'
                  id='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='No minimo 3 caracteres'
                  className='input-style'
                />
                {errors.lastName && touched.lastName && <h5 className='error'>{errors.lastName}</h5>}
              </div>
            </div>
            <div className='inputs-content'>
              <div className='inputs'>
                <label className='label' htmlFor='name'>
                  Nacionalidade
                </label>
                <Field as='select' name='nationality'>
                  <option value='brasileira'>Brasileira</option>
                  <option value='estrangeira'>Estrangeira</option>
                </Field>
                {errors.name && touched.name && <h5 className='error'>{errors.name}</h5>}
              </div>
              <div className='inputs'>
                <label className='label' htmlFor='lastName'>
                  Sobrenome Completo
                </label>
                <input
                  type='lastName'
                  id='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='No minimo 3 caracteres'
                  className='input-style'
                />
                {errors.lastName && touched.lastName && <h5 className='error'>{errors.lastName}</h5>}
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  )
}
