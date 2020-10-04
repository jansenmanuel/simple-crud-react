import React, { Component } from 'react'
import API from '../../services/Service'

class TambahSiswa extends Component {
    state = {
        siswa: {
            id: 0,
            nisn: 0,
            nama: '',
            tempat_lahir: '',
            tanggal_lahir: '',
            jenis_kelamin: '',
            agama: '',
            alamat: ''
        }
    }

    postDataSiswa = () => {
        API.postSiswa(this.state.siswa)
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert('Berhasil ditambah!')
                window.location.reload()
            })
    }

    handleChange = event => {
        let siswaNew = { ...this.state.siswa };
        let timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            siswaNew['id'] = timestamp;
        }
        siswaNew[event.target.name] = event.target.value;
        this.setState({
            siswa: siswaNew
        })
    }

    handleSubmit = () => {
        this.postDataSiswa()
    }

    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="siswaLabel">Tambah Siswa</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label><span className="text-danger">*</span> NISN</label>
                            <input type="number" className="form-control" name="nisn" placeholder="NISN" onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Nama</label>
                            <input type="text" className="form-control" name="nama" placeholder="Nama" onChange={this.handleChange} />
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <label><span className="text-danger">*</span> Tempat Lahir</label>
                                <input type="text" className="form-control" name="tempat_lahir" placeholder="Tempat Lahir" onChange={this.handleChange} />
                            </div>
                            <div className="col">
                                <label><span className="text-danger">*</span> Tanggal Lahir</label>
                                <input type="date" className="form-control" name="tanggal_lahir" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Jenis Kelamin</label>
                            <select className="form-control" name="jenis_kelamin" onChange={this.handleChange}>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Agama</label>
                            <select className="form-control" name="agama" onChange={this.handleChange}>
                                <option value="Kristen">Kristen</option>
                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Budha">Budha</option>
                                <option value="Konghucu">Konghucu</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Alamat</label>
                            <input type="text" className="form-control" name="alamat" placeholder="Alamat" onChange={this.handleChange} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Tambah Siswa</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TambahSiswa;