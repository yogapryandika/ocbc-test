import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Table from './Table'
import Modal from '../../component/Modal'
import UserForm from './UserForm'

import styles from './user.module.scss'
import { addUserDispatch, getUserDispatch, updateUserDispatch } from './UserSlice'
import { useEffect } from 'react'

const Index = () => {

  const userState = useSelector(state => state.user)
  const dispatch = useDispatch()

  const [AddModal, setAddModal] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  const [idToBeDeleted, setIdToBeDeleted] = useState()
  const [dataTobeUpdate, setDataToBeUpdated] = useState()

  const addData = (data) => {
    dispatch(addUserDispatch(data))

  }

  const goUpdate = (data) => {
    dispatch(updateUserDispatch(dataTobeUpdate.id, data))
    setDataToBeUpdated()
  }

  const updateData = (data) => {
    setDataToBeUpdated(data)
    setUpdateModal(true)
  }

  const deleteData = (id) => {
    setDeleteModal(true)
    setIdToBeDeleted(id)
  }

  useEffect(() => {
    dispatch(getUserDispatch())
  }, [])

  const columns = [
    { path: 'name', name: 'Nama' },
    { path: 'work', name: 'Pekerjaan' },
    { path: 'address', name: 'Alamat' },
    { path: 'birthDate', name: 'Tanggal lahir' },
  ]

  return (
    <>
      <section className={styles.container}>
        <h1 style={{ fontSize: '30px' }} >User List</h1>
        <button className={`btn ${styles.buttonAdd}`} onClick={() => setAddModal(true)}>Add User +</button>
        <div className={styles.tableWrapper}>
          <Table id='community-table' data={userState} columns={columns} updateData={updateData} deleteData={deleteData} />
        </div>
      </section>

      <Modal open={AddModal}>
        <UserForm
          onCancel={() => {
            setAddModal(false)
          }}
          onSubmit={addData}
        />
      </Modal>

      <Modal open={updateModal}>
        <UserForm
          onCancel={() => {
            setUpdateModal(false)
            setDataToBeUpdated()
          }}
          initialValue={dataTobeUpdate}
          onSubmit={goUpdate}
        />
      </Modal>

      <Modal open={deleteModal}>
        <div>
          <div style={{ textAlign: "center", marginBottom: "10px", fontSize: "16px" }}>
            <p>Anda yakin ingin Menghapus ?</p>
          </div>
          <div className={styles.buttonGroupModal}>
            <button className={`btn btn-success`} onClick={() => { }}>Delete</button>
            <button className={`btn btn-danger`} onClick={() => {
              setDeleteModal(false)
              setIdToBeDeleted()
            }}>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Index
