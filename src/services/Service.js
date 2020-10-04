import Get from "./Get";
import Post from "./Post";
import Put from "./Put";
import Delete from "./Delete";

let online = true
let offline = false

console.log(online);
console.log(offline);

const getSiswa = () => Get(`siswa`, offline)
const postSiswa = (data) => Post(`siswa`, offline, data)
const putSiswa = (data, id) => Put(`siswa/${id}`, offline, data)
const deleteSiswa = (id) => Delete(`siswa/${id}`, offline)

const API = {
    getSiswa,
    postSiswa,
    putSiswa,
    deleteSiswa
}

export default API;