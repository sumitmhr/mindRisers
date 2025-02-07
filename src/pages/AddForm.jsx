import { Button, Checkbox, Input, Option, Radio, Rating, Select, Switch, Textarea, Typography } from '@material-tailwind/react'
import { Field, Formik } from 'formik'
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
          locate: '',
          genres: [],
          country: '',
          imageReview: '',
          isOn: false,
        }}

        onSubmit={(values, { resetForm, setValues }) => {
          alert(`Switch is ${values.isOn ? "ON" : "OFF"}`);
          // console.log(val);

          //resetForm();
          // nav(-1);

        }}
      >

        {({ handleChange, values, errors, touched, handleSubmit, setFieldValue }) => (
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
              <Typography>Select Genres</Typography>
              <div>
                <Checkbox label='Action' name='genres' onChange={handleChange} value={'action'} />
                <Checkbox label='Comedy' onChange={handleChange} name='genres' value={'comedy'} />
                <Checkbox label='Drama' onChange={handleChange} name='genres' value={'drama'} />
              </div>
            </div>

            <div>
             <Select
              name='country'
              onChange={(e) => setFieldValue('country', e)}
              label='Select Your Country'>
                <Option value='Nepal'>Nepal</Option>
                <Option value='China'>China</Option>
                <Option value='India'>India</Option>
             </Select>
            </div>
             

             {/* Switch Field */}
            <div>
              <label>Enable Feature</label>
                <Field name = "isOn">
                  {({ field }) => (
                    <Switch
                      color='blue'
                      checked = {values.isOn}
                      onChange={() => setFieldValue("isOn", !values.isOn)}
                      ripple = {true}
                    />
                  )}
                </Field>
            </div>

            {/* Display Current State */}
            <p>
              Switch is <span>{values.isOn ? "ON" : "OFF"}</span>
            </p>

            {/* Submit Button */}
            {/* <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button> */}

            <div>
              <h1>Rating: </h1><Rating unratedColor='amber' ratedColor='amber' value={4} /> 
              <h1>Rating: </h1><Rating unratedColor='red' ratedColor='red' value={2} /> 
              <h1>Rating: </h1><Rating unratedColor='blue' ratedColor='blue' value={1} /> 
              <h1>Rating: </h1><Rating unratedColor='green' ratedColor='green' value={5} /> 
            </div>

            <div>
              <Input
              onChange={(e) => {
                const file = e.target.files[0];
                setFieldValue('imageReview', URL.createObjectURL(file))
              }}
              type='file' label='Choose a File' />

              {
              values.imageReview &&
              <img 
              className='mt-3' 
              src={values.imageReview}
              alt=''
              />
              }
            </div>

            <div>
              <Textarea
                onChange={handleChange}
                value={values.detail}
                name='detail'
                label='Detail'
                // placeholder='Details Here'
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