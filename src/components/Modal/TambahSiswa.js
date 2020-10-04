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
                alert('Berhasil!')
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
                            <input type="number" className="form-control" name="nisn" required onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Nama</label>
                            <input type="text" className="form-control" name="nama" required onChange={this.handleChange} />
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <label><span className="text-danger">*</span> Tempat Lahir</label>
                                <input type="text" className="form-control" name="tempat_lahir" required onChange={this.handleChange} />
                            </div>
                            <div className="col">
                                <label><span className="text-danger">*</span> Tanggal Lahir</label>
                                <input type="date" className="form-control" name="tanggal_lahir" required onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Jenis Kelamin</label>
                            <input type="text" className="form-control" name="jenis_kelamin" required onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Agama</label>
                            <input type="text" className="form-control" name="agama" required onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Alamat</label>
                            <input type="text" className="form-control" name="alamat" required onChange={this.handleChange} />
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