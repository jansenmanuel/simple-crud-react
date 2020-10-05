import React, { Component } from 'react'
import swal from 'sweetalert'
import API from '../../services/Service'

class UbahSiswa extends Component {
    state = {
        siswa: {
            id: this.props.data.id,
            nisn: this.props.data.nisn,
            nama: this.props.data.nama,
            tempat_lahir: this.props.data.tempat_lahir,
            tanggal_lahir: this.props.data.tanggal_lahir,
            jenis_kelamin: this.props.data.jenis_kelamin,
            agama: this.props.data.agama,
            alamat: this.props.data.alamat
        }
    }

    putDataSiswa = () => {
        API.putSiswa(this.state.siswa, this.state.siswa.id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                swal({
                    title: "Berhasil!",
                    text: "Data siswa berhasil diubah!",
                    icon: "success",
                    button: false,
                    timer: 1500
                }).then(() => {
                    window.location.reload();
                });
            })
    }

    handleChange = event => {
        let siswaNew = { ...this.state.siswa };
        siswaNew[event.target.name] = event.target.value;
        this.setState({
            siswa: siswaNew
        })
    }

    handleSubmit = () => {
        this.putDataSiswa()
    }

    render() {
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="siswaLabel">Ubah Siswa</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label><span className="text-danger">*</span> NISN</label>
                            <input type="number" className="form-control" name="nisn" required onChange={this.handleChange} defaultValue={this.props.data.nisn} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Nama</label>
                            <input type="text" className="form-control" name="nama" required onChange={this.handleChange} defaultValue={this.props.data.nama} />
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <label><span className="text-danger">*</span> Tempat Lahir</label>
                                <input type="text" className="form-control" name="tempat_lahir" required onChange={this.handleChange} defaultValue={this.props.data.tempat_lahir} />
                            </div>
                            <div className="col">
                                <label><span className="text-danger">*</span> Tanggal Lahir</label>
                                <input type="date" className="form-control" name="tanggal_lahir" required onChange={this.handleChange} defaultValue={this.props.data.tanggal_lahir} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Jenis Kelamin</label>
                            <select className="form-control" name="jenis_kelamin" onChange={this.handleChange}>
                                <option selected disabled >{this.props.data.jenis_kelamin}</option>
                                <option value="Laki-Laki">Laki-Laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Agama</label>
                            <select className="form-control" name="agama" onChange={this.handleChange}>
                                <option selected disabled>{this.props.data.agama}</option>
                                <option value="Kristen">Kristen</option>
                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Budha">Budha</option>
                                <option value="Konghucu">Konghucu</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Alamat</label>
                            <input type="text" className="form-control" name="alamat" required onChange={this.handleChange} defaultValue={this.props.data.alamat} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-warning text-light" onClick={this.handleSubmit}>Ubah Siswa</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UbahSiswa;