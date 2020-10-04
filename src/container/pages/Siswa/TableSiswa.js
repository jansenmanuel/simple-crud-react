import React, { Component } from 'react'
import MyEmpty from '../../../components/Empty/Empty'
import DetailSiswa from '../../../components/Modal/DetailSiswa'
import TambahSiswa from '../../../components/Modal/TambahSiswa'
import UbahSiswa from '../../../components/Modal/UbahSiswa'
import API from '../../../services/Service'

export default class TableSiswa extends Component {
    state = {
        students: []
    }

    getDataSiswa = () => {
        API.getSiswa()
            .then(res => {
                console.log(res);
                this.setState({
                    students: res
                });
            })
    }

    componentDidMount() {
        this.getDataSiswa()
    }

    handleDelete = id => {
        console.log(id);
        API.deleteSiswa(id)
            .then(() => {
                alert('Berhasil dihapus!')
                window.location.reload()
            })
    }

    render() {
        return (
            <div className="table-responsive-sm">
                <button type="button" className="btn btn-success my-3" data-toggle="modal" data-target="#addSiswa">
                    Tambah Data Siswa
                </button>
                <table className="table  table-hover">
                    <thead>
                        <tr>
                            <th scope="col">NISN</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Tempat Lahir</th>
                            <th scope="col">Tanggal Lahir</th>
                            <th scope="col">Jenis Kelamin</th>
                            <th scope="col">Aksi</th>
                        </tr>
                    </thead>
                    {
                        this.state.students.length > 0 ?
                            <tbody>
                                {this.state.students.map(student =>
                                    <tr key={student.id}>
                                        <td>{student.nisn}</td>
                                        <td>{student.nama}</td>
                                        <td>{student.tempat_lahir}</td>
                                        <td>{student.tanggal_lahir}</td>
                                        <td>{student.jenis_kelamin}</td>
                                        <td>
                                            <button type="button" className="btn btn-primary text-light mx-1" data-toggle="modal" data-target={"#detailSiswa" + student.id}>
                                                Detail
                                            </button>
                                            <div className="modal fade" id={"detailSiswa" + student.id} tabIndex="-1" aria-labelledby="detailSiswaLabel" aria-hidden="true">
                                                <DetailSiswa data={student} key={student.id} />
                                            </div>

                                            <button type="button" className="btn btn-warning text-light mx-1" data-toggle="modal" data-target={"#ubahSiswa" + student.id}>
                                                Ubah
                                            </button>
                                            <div className="modal fade" id={"ubahSiswa" + student.id} tabIndex="-1" aria-labelledby="ubahSiswaLabel" aria-hidden="true">
                                                <UbahSiswa data={student} key={student.id} />
                                            </div>

                                            <button type="button" className="btn btn-danger mx-1" onClick={() => this.handleDelete(student.id)}>
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                )}

                            </tbody>
                            :
                            <tbody>
                                <tr>
                                    <td colSpan="8">
                                        <MyEmpty />
                                    </td>
                                </tr>
                            </tbody>
                    }
                </table>
                <div className="modal fade" id="addSiswa" tabIndex="-1" aria-labelledby="addSiswaLabel" aria-hidden="true">
                    <TambahSiswa />
                </div>
            </div>
        )
    }
}
