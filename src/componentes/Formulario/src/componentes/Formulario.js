

export default {
  name: 'src-componentes-formulario-av',
  components: {},
  props: [],
  data () {
    return {
       url: 'https://6198adf1164fa60017c2317b.mockapi.io/UsuariosIngresados',
      usuarios: [],
      formData : this.getInicialData(),
      formState : {},
      nombreLargoMin : 5,
      nombreLargoMax: 15,
      edadMin : 18,
      edadMax : 120,
      usuariosIngresados:[]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    
    getInicialData() {
      return {
        nombre : '',
        edad : '',
        email: ''
      }
    },
    
    async postUsuariosAxios() {
      let usuario = { ...this.formData }
        try {
          let respuesta = await this.axios.post(this.url, usuario, { 'content-type': 'application/json' })
          let usuarioRecibido = respuesta.data
          console.log('AXIOS POST PRODUCTO', usuarioRecibido)
          this.usuarios.push(usuarioRecibido)
          this.formData = this.getInicialData()
          this.formState._reset()
        }
        catch (error) {
          console.error('ERROR AXIOS POST USUARIO', error)
      }
    },    
   

    enviar() {
      //console.log('Enviar')

      //Con SPREAD OPERATOR -> Clon de un Objeto -> {a:1,b:2} -> ...{a:1,b:2} -> a:1,b:2 -> { a:1,b:2 } (Clon)
      console.log({...this.formData})

      this.formData = this.getInicialData()   //inicializando los valores
      this.formState._reset()                 // inicializando el estado
    }
  }
}


