import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import styles from './userForm.module.scss'

const schema = yup.object().shape({
  name: yup.string().required(),
  work: yup.string().required(),
  address: yup.string().required(),
  birthDate: yup.mixed().required()
})

const Index = ({ onSubmit, onCancel, initialValue }) => {

  const { control, handleSubmit, register, setValue, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  })

  const submit = (value) => {
    onSubmit(value)
    onCancel()
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.formWrapper}>
          <div>
            <label htmlFor="name">Nama</label>
            <input type="name" {...register('name')} placeholder="Nama" defaultValue={initialValue?.name} />
          </div>
          <br />
          <div>
            <label htmlFor="work">Pekerjaan</label>
            <input type="work" {...register('work')} placeholder="Pekerjaan" defaultValue={initialValue?.work} />
          </div>
          <br />
          <div>
            <label htmlFor="address">Alamat</label>
            <input type="address" {...register('address')} placeholder="Alamat" defaultValue={initialValue?.address} />
          </div>
          <br />
          <div>
            <label htmlFor="birthDate">Tanggal lahir</label>
            <input type="date" {...register('birthDate')} placeholder="Tanggal lahir" defaultValue={initialValue?.birthDate} />
          </div>
          <br />
          <div>
            <input type="submit" className="btn btn-success" data-testid="submit" />
            <button type="button" className="btn btn-danger" onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </form>

    </div>

  )
}

export default Index
