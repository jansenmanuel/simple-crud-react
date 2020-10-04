import React, { Component } from 'react'

class DetailSiswa extends Component {
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
                            <input type="number" className="form-control" name="nisn" required readOnly defaultValue={this.props.data.nisn} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Nama</label>
                            <input type="text" className="form-control" name="nama" required readOnly defaultValue={this.props.data.nama} />
                        </div>
                        <div className="form-row mb-3">
                            <div className="col">
                                <label><span className="text-danger">*</span> Tempat Lahir</label>
                                <input type="text" className="form-control" name="tempat_lahir" required readOnly defaultValue={this.props.data.tempat_lahir} />
                            </div>
                            <div className="col">
                                <label><span className="text-danger">*</span> Tanggal Lahir</label>
                                <input type="date" className="form-control" name="tanggal_lahir" required readOnly defaultValue={this.props.data.tanggal_lahir} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Jenis Kelamin</label>
                            <input type="text" className="form-control" name="jenis_kelamin" required readOnly defaultValue={this.props.data.jenis_kelamin} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Agama</label>
                            <input type="text" className="form-control" name="agama" required readOnly defaultValue={this.props.data.agama} />
                        </div>
                        <div className="form-group">
                            <label><span className="text-danger">*</span> Alamat</label>
                            <input type="text" className="form-control" name="alamat" required readOnly defaultValue={this.props.data.alamat} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailSiswa;