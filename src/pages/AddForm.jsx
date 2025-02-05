import { Button, Input, Radio, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router'

const AddForm = () => {
  const nav = useNavigate();
  return (
    <div className='p-5 max-w-[400px]'>

      <Formik
        initialValues={{
          title: '',
          detail: '',
          locate: ''
        }}

        onSubmit={(val, { resetForm, setValues }) => {
          // console.log(val);

          //resetForm();
          // nav(-1);

        }}
      >

        {({ handleChange, values, errors, touched, handleSubmit }) => (
          <form onSubmit={handleSubmit} className='space-y-6'>

            <div>
              <Input
                onChange={handleChange}
                value={values.title}
                name='title'
                label='Title'
                placeholder='Title Here'
              />
            </div>

            <div>
              <Typography>Select One of these</Typography>
              <div>
                <Radio label='Indoor' name='locate' onChange={handleChange} value={'indoor'} color='green' />
                <Radio label='Outdoor' onChange={handleChange} name='locate' value={'outdoor'} color='red' />
              </div>
            </div>

            <div>
              <Textarea
                onChange={handleChange}
                value={values.detail}
                name='detail'
                label='Detail'
                placeholder='Details Here'
              />
            </div>

            <Button type='submit'>Submit</Button>
          </form>
        )}



      </Formik>



    </div>
  )
}

export default AddForm