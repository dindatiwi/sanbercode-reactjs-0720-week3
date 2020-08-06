import React from 'react';
import './App.css';

class Buah extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      dataHargaBuah : [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ],
      input:{
        nama:"",
        harga:"",
        berat:""
      },
      indexForm:-1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let input = {...this.state.input}
    input[e.target.name] = e.target.value
    this.setState({
      input
    })
  }

handleSubmit(e){
  e.preventDefault()
  let input = this.state.input
  if(input['nama'] && input['harga'] && input['berat']){
    let newDaftarBuah = this.state.dataHargaBuah
    let index = this.state.indexForm
    if(index===-1){
      newDaftarBuah = [...newDaftarBuah,input]
    }
    else{
      newDaftarBuah[index]=input
    }
    this.setState({
      dataHargaBuah: newDaftarBuah,
      input:{
        nama:"",
        harga:"",
        berat:""
      },
      indexForm: -1
    })
  }
}
handleEdit(e){
  let index = e.target.value
  let buah = this.state.dataHargaBuah[index]
  this.setState({
    input:{
      nama:buah.nama,
      harga:buah.harga,
      berat:buah.berat
    },
    indexForm: index
  })
}


handleDelete(e){
  let index = e.target.value
  let newDaftarBuah = this.state.dataHargaBuah
  let EditDaftarBuah = newDaftarBuah[this.state.indexForm]
  newDaftarBuah.splice(index,1)
  if(EditDaftarBuah !== undefined){
    var newIndex = newDaftarBuah.findIndex((el)=>el===EditDaftarBuah)
    this.setState({
      dataHargaBuah:newDaftarBuah,
      indexForm:newIndex
    })
  }else{
    this.setState({dataHargaBuah:newDaftarBuah})
  }
}
render() {
  return (
    <>
      {this.state.dataHargaBuah.map((el,index)=> {
        return (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{el.nama}</td>
              <td>{el.harga}</td>
              <td>{el.berat/1000}</td>
              <td>
                <button onClick={this.handleEdit} value={index}>Edit</button>
                &nbsp;
                <button onClick={this.handleDelete} value={index}>Delete</button>
              </td>
            </tr>
        )
      })}
      <table>
        <h2>Form</h2>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Name buah:</label>
            <input type="text" name='nama' value={this.state.input.nama} onChange={this.handleChange} placeholder="Nama buah" /> <br />
            <label>Harga buah:</label>
            <input type="text" name='harga' value={this.state.input.harga} onChange={this.handleChange} placeholder="Harga buah" /> <br />
            <label>Berat buah:</label>
            <input type="text" name='berat' value={this.state.input.berat} onChange={this.handleChange} placeholder="Berat buah" /> <br />
            <button>Submit</button>
          </form>
        </div>
      </table>
    </>
  )
}
}

function App() {
  return (
    <div>
      <h1>Tabel Harga Buah</h1>
      <table>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Harga</th>
                  <th>Berat</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <Buah />
              </tbody>
      </table>
    </div>
  );
}

export default App;
